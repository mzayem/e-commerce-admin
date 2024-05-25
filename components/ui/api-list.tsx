"use client ";

import { useParams } from "next/navigation";
import { ApiAlert } from "./api-alert";
import { useOrigin } from "@/hooks/use-origin";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

export function ApiList({ entityName, entityIdName }: ApiListProps) {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/{${entityIdName}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/{${entityIdName}}`}
      />
      <ApiAlert
        title="Delete"
        variant="admin"
        description={`${baseUrl}/{${entityIdName}}`}
      />
    </>
  );
}
