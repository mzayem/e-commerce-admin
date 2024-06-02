import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { storageId: string } }
) {
  try {
    if (!params.storageId) {
      return new NextResponse("Store ID is required", { status: 400 });
    }

    const storage = await prismadb.storage.findUnique({
      where: {
        id: params.storageId,
      },
    });

    return NextResponse.json(storage);
  } catch (error) {
    console.log("[STORAGE_GET]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string; storageId: string } }
) {
  try {
    const { userId } = auth();
    const { name, value } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }
    if (!value) {
      return new NextResponse("Value is required", { status: 400 });
    }

    if (!params.storageId) {
      return new NextResponse("Storage ID is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const storage = await prismadb.storage.updateMany({
      where: {
        id: params.storageId,
      },
      data: {
        name,
        value,
      },
    });

    return NextResponse.json(storage);
  } catch (error) {
    console.log("[STORAGE_PATCH]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { storeId: string; storageId: string } }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.storageId) {
      return new NextResponse("Store ID is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const storage = await prismadb.storage.deleteMany({
      where: {
        id: params.storageId,
      },
    });

    return NextResponse.json(storage);
  } catch (error) {
    console.log("[STORAGE_DELETE]", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
