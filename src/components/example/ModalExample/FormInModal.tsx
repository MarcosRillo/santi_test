"use client";
import React from "react";
import Button from "../../ui/button/Button";
import { Modal } from "../../ui/modal";
import { useModal } from "@/hooks/useModal";
import ExampleFormTwo from "@/components/form/example-form/ExampleFormTwo";

export default function FormInModal() {
  const { isOpen, openModal, closeModal } = useModal();
  // const handleSave = () => {
  //   // Handle save logic here
  //   console.log("Saving changes...");
  //   closeModal();
  // };
  return (
    <>
      <Button size="sm" onClick={openModal}>
        <svg
          className="fill-current"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.2502 4.99951C9.2502 4.5853 9.58599 4.24951 10.0002 4.24951C10.4144 4.24951 10.7502 4.5853 10.7502 4.99951V9.24971H15.0006C15.4148 9.24971 15.7506 9.5855 15.7506 9.99971C15.7506 10.4139 15.4148 10.7497 15.0006 10.7497H10.7502V15.0001C10.7502 15.4143 10.4144 15.7501 10.0002 15.7501C9.58599 15.7501 9.2502 15.4143 9.2502 15.0001V10.7497H5C4.58579 10.7497 4.25 10.4139 4.25 9.99971C4.25 9.5855 4.58579 9.24971 5 9.24971H9.2502V4.99951Z"
            fill=""
          />
        </svg>
        Acceso
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[584px] p-5 lg:p-10"
      >
        <div className="pt-60">
        <ExampleFormTwo selectedRowData={null}/>
        </div>
      </Modal>
    </>
  );
}
