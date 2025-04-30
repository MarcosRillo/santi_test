"use client";
import React from "react";
import { Modal } from "../../ui/modal";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import { HiOutlinePrinter } from "react-icons/hi2";
import { TrashBinIcon } from "@/icons";
import Button from "@/components/ui/button/Button";
import { RxReload } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const tableData = [
  {
    fileName: "Acceso vendimia 2025",
  },
  {
    fileName: "Inscriptos Vendimia",
  },
  {
    fileName: "Staff vendimia 2025",
  },
  {
    fileName: "Disertantes Vendimia",
  },
];

type FileRow = {
  fileName: string;
};

type RecentFileTableProps = {
  setSelectedRowData: (row: FileRow | null) => void;
};

export default function ImpresionServerModal({
  setSelectedRowData,
}: RecentFileTableProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    const row = selectedRow === index ? null : tableData[index];
    setSelectedRow(index === selectedRow ? null : index);
    setSelectedRowData(row);
  };

  const router = useRouter();

  const handleRedirect = () => {
    router.push("/two-step-verification"); // <- cambiá esta ruta a la que necesites
  };

  return (
    <>
      <button
        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
        onClick={openModal}
      >
        <HiOutlinePrinter className="w-5 h-5" />
      </button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        className="max-w-[584px] p-5 lg:p-10"
      >
        <form className="">
          <h4 className="mb-6 text-lg font-medium text-gray-800 dark:text-white/90">
            Servidor de Impresion
          </h4>

          <div className="overflow-hidden rounded-2xl border col-span-2 border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]">
            <div className="flex items-center justify-center px-6 mb-4">
              <Button
                size="sm"
                variant="primary"
                onClick={handleRedirect}
                startIcon={<FaPlus />}
              >
                Agregar servidor de impresion
              </Button>
            </div>

            <div className="max-w-full overflow-x-auto">
              <table className="w-full border-collapse table-auto">
                <thead>
                  <tr className="border-t border-gray-200 dark:border-gray-800">
                    <th className="px-6 py-3 font-medium text-left text-gray-500 text-theme-sm dark:text-gray-400">
                      Nombre
                    </th>
                    <th className="px-6 py-3 font-medium text-center text-gray-500 text-theme-sm dark:text-gray-400">
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      onClick={() => handleSelect(index)}
                      className={`cursor-pointer ${
                        selectedRow === index
                          ? "bg-brand-200 text-white"
                          : "border-t border-gray-100 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      <td className="px-6 py-[18px] text-sm text-gray-700 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          {row.fileName}
                        </div>
                      </td>
                      <td className="px-6 py-[18px] text-center">
                        <div className="flex items-center justify-center gap-2 ">
                          <button>
                            <TrashBinIcon className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500" />
                          </button>
                          <button className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
                            <RxReload className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
