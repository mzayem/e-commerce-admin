import prismadb from "@/lib/prismadb";
import { StorageForm } from "./components/storage-form";

const StoragePage = async ({ params }: { params: { storageId: string } }) => {
  const storage = await prismadb.storage.findUnique({
    where: { id: params.storageId },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <StorageForm initialData={storage} />
      </div>
    </div>
  );
};

export default StoragePage;
