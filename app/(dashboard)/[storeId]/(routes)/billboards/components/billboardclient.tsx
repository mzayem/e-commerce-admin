"use client";

import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

interface BilboardClientProps {
  data: Billboard[];
}

export function BillboardClient({ data }: BilboardClientProps) {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <Heading
          title={`Billboard (${data.length})`}
          description="Mange billboard for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4 " />
          Add New
        </Button>
      </div>
    </>
  );
}
