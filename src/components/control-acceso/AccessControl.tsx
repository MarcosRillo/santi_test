"use client";
import React, { useState } from "react";
import FormInModal from "../example/ModalExample/FormInModal";
import EditControlModal from "../example/ModalExample/EditControlModal";

import { PaperPlaneIcon, TrashBinIcon } from "@/icons";

const tableData = [
  {
    fileName: "Acceso vendimia 2025",
    fileIcon: {
      light: "/images/icons/file-video.svg",
      dark: "/images/icons/file-video-dark.svg",
    },
    fechaDesde: "20-02-2025",
    fechaHasta: "27-02-2025",
    horaDesde: "19:00",
    horaHasta: "22:30",
    category: "Video",
    size: "89 MB",
    dateModified: "12 Jan, 2027",
  },
  {
    fileName: "Inscriptos Vendimia",
    fileIcon: {
      light: "/images/icons/file-image.svg",
      dark: "/images/icons/file-image-dark.svg",
    },
    fechaDesde: "20-02-2025",
    fechaHasta: "27-02-2025",
    horaDesde: "06:00",
    horaHasta: "12:30",
    category: "Image",
    size: "5.4 MB",
    dateModified: "10 Feb, 2027",
  },
  {
    fileName: "Staff vendimia 2025",
    fileIcon: {
      light: "/images/icons/file-video.svg",
      dark: "/images/icons/file-video-dark.svg",
    },
    fechaDesde: "20-02-2025",
    fechaHasta: "27-02-2025",
    horaDesde: "07:00",
    horaHasta: "16:30",
    category: "Video",
    size: "89 MB",
    dateModified: "12 Jan, 2027",
  },
  {
    fileName: "Disertantes Vendimia",
    fileIcon: {
      light: "/images/icons/file-image.svg",
      dark: "/images/icons/file-image-dark.svg",
    },
    fechaDesde: "20-02-2025",
    fechaHasta: "27-02-2025",
    horaDesde: "08:00",
    horaHasta: "17:30",
    category: "Image",
    size: "5.4 MB",
    dateModified: "10 Feb, 2027",
  },
];

type FileRow = {
  fileName: string;
  fileIcon: {
    light: string;
    dark: string;
  };
  fechaDesde: string;
  fechaHasta: string;
  category: string;
  size: string;
  dateModified: string;
};

type RecentFileTableProps = {
  setSelectedRowData: (row: FileRow | null) => void;
};

export default function AccessControl({
  setSelectedRowData,
}: RecentFileTableProps) {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    const row = selectedRow === index ? null : tableData[index];
    setSelectedRow(index === selectedRow ? null : index);
    setSelectedRowData(row);
  };
  return (
    <>
      <div className="col-span-2"></div>
      <div className="overflow-hidden rounded-2xl border col-span-2 border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex items-center justify-between px-6 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Listado
            </h3>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative">
              <button className="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2 dark:text-gray-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.04199 9.37363C3.04199 5.87693 5.87735 3.04199 9.37533 3.04199C12.8733 3.04199 15.7087 5.87693 15.7087 9.37363C15.7087 12.8703 12.8733 15.7053 9.37533 15.7053C5.87735 15.7053 3.04199 12.8703 3.04199 9.37363ZM9.37533 1.54199C5.04926 1.54199 1.54199 5.04817 1.54199 9.37363C1.54199 13.6991 5.04926 17.2053 9.37533 17.2053C11.2676 17.2053 13.0032 16.5344 14.3572 15.4176L17.1773 18.238C17.4702 18.5309 17.945 18.5309 18.2379 18.238C18.5308 17.9451 18.5309 17.4703 18.238 17.1773L15.4182 14.3573C16.5367 13.0033 17.2087 11.2669 17.2087 9.37363C17.2087 5.04817 13.7014 1.54199 9.37533 1.54199Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Buscar..."
                className="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-3.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[300px]"
              />
            </div>
            <div className="">
              <FormInModal />
            </div>
          </div>
        </div>

        <div className="max-w-full overflow-x-auto">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="border-t border-gray-200 dark:border-gray-800">
                <th className="px-6 py-3 font-medium text-left text-gray-500 text-theme-sm dark:text-gray-400">
                  Nombre
                </th>
                <th className="px-6 py-3 font-medium text-left text-gray-500 text-theme-sm dark:text-gray-400">
                  Fecha Desde
                </th>
                <th className="px-6 py-3 font-medium text-left text-gray-500 text-theme-sm dark:text-gray-400">
                  Fecha Hasta
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
                  <td className="px-6 py-[18px] text-gray-700 text-theme-sm dark:text-gray-400">
                    {row.fechaDesde}
                  </td>
                  <td className="px-6 py-[18px] text-gray-700 text-theme-sm dark:text-gray-400">
                    {row.fechaHasta}
                  </td>
                  <td className="px-6 py-[18px] text-center">
                    <div className="flex items-center justify-center gap-2 ">
                      <button>
                        <TrashBinIcon className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500" />
                      </button>
                      <EditControlModal />
                      <button className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-500">
                        <PaperPlaneIcon className="w-5 h-5" />
                      </button>
                      {/* <ImpresionServerModal setSelectedRowData={setSelectedRowData}/> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
