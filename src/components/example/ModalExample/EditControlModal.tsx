"use client";
import React from "react";
import { Modal } from "../../ui/modal";
import { useModal } from "@/hooks/useModal";
import ExampleFormTwo from "@/components/form/control-acceso/ControlAccesoForm";
import { LuPencil } from "react-icons/lu";


export default function EditControlModal() {
  const { isOpen, openModal, closeModal } = useModal();
  // const handleSave = () => {
  //   // Handle save logic here
  //   console.log("Saving changes...");
  //   closeModal();
  // };
  return (
    <>
      <button className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500 w-5 h-5" onClick={openModal}>
        <LuPencil />
      </button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[584px] mt-40"
      >
        <div className="text-start">
          <ExampleFormTwo selectedRowData={null} />
        </div>
      </Modal>
    </>
  );
}
