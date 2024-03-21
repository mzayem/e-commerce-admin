"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const StoreModal = useStoreModal();
  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and
  categories"
      isOpen={StoreModal.isOpen}
      onClose={StoreModal.onClose}
    >
      <p>Future Create Store Form</p>
    </Modal>
  );
};
