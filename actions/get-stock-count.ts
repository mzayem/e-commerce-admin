import prismadb from "@/lib/prismadb";

export async function getStockCount(storeId: string) {
  const stockCount = await prismadb.product.count({
    where: {
      storeId,
      isArchived: false,
    },
  });

  return stockCount;
}
