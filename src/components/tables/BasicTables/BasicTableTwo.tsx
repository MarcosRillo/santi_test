"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { TrashBinIcon } from "../../../icons";
import AvatarText from "../../ui/avatar/AvatarText";
import { useModal } from "@/hooks/useModal";
import Checkbox from "../../form/input/Checkbox";
import Badge from "../../ui/badge/Badge";
import { Modal } from "@/components/ui/modal";
import Button from "../../ui/button/Button";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import ListWithCheckbox from "@/components/ui/list/ListWithCheckbox";

// Interface for the table row data
interface TableRowData {
  id: string; // Unique identifier for the row
  user: {
    initials: string; // Initials for the avatar
    name: string; // User's full name
    email: string; // User's email address
    whatsapp: number;
    dni: number;
  };
  avatarColor: "brand" | "blue" | "green" | "red" | "yellow" | "gray"; // Color variant for the avatar
  product: {
    name: string; // Product name
    purchaseDate: string; // Date of purchase
  };
  status: {
    // label: string; // Status text
    type:
      | "Inscripcion general"
      | "Staff + 2"
      | "Sector publico"
      | "Oradores + 1"
      | "Prensa"
      | "Board"
      | "Invitados especiales"
      | "PROSPPECT + 1"; // Size of the badge
  };
  actions: {
    edit: boolean;
    delete: boolean; // Indicates a delete action is available
  };
}

const tableRowData: TableRowData[] = [
  {
    id: "00001",
    user: {
      initials: "AB",
      name: "Marcos Rillo",
      email: "marcosrillo@gmail.com",
      whatsapp: 3813027536,
      dni: 41950530,
    },
    avatarColor: "brand",
    product: {
      name: "DNI",
      purchaseDate: "2025-06-15",
    },
    status: {
      type: "Staff + 2",
    },
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    id: "00002",
    user: {
      initials: "CD",
      name: "Jane Smith",
      email: "janesmith@gmail.com",
      whatsapp: 532918564,
      dni: 37029876,
    },
    avatarColor: "brand",
    product: {
      name: "DNI",
      purchaseDate: "2025-06-18",
    },
    status: {
      type: "Inscripcion general",
    },
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    id: "00003",
    user: {
      initials: "EF",
      name: "Michael Brown",
      email: "michaelbrown@gmail.com",
      whatsapp: 21314124241,
      dni: 38987456,
    },
    avatarColor: "brand",
    product: {
      name: "DNI",
      purchaseDate: "2025-06-20",
    },
    status: {
      type: "Oradores + 1",
    },
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    id: "00004",
    user: {
      initials: "GH",
      name: "Alice Johnson",
      email: "alicejohnson@gmail.com",
      whatsapp: 1245152626,
      dni: 27846876,
    },
    avatarColor: "brand",
    product: {
      name: "DNI",
      purchaseDate: "2025-06-25",
    },
    status: {
      type: "Board",
    },
    actions: {
      edit: true,
      delete: true,
    },
  },
  {
    id: "00005",
    user: {
      initials: "IJ",
      name: "Robert Lee",
      email: "robertlee@gmail.com",
      whatsapp: 124382164912,
      dni: 28945876,
    },
    avatarColor: "brand",
    product: {
      name: "DNI",
      purchaseDate: "2025-06-30",
    },
    status: {
      type: "PROSPPECT + 1",
    },
    actions: {
      edit: true,
      delete: true,
    },
  },
];

export default function BasicTableTwo() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const { isOpen, openModal, closeModal } = useModal();

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(tableRowData.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (id: string) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="flex flex-col gap-4 px-6 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Inscriptos
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg
              className="stroke-current fill-white dark:fill-gray-800"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29004 5.90393H17.7067"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7075 14.0961H2.29085"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
              <path
                d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
            </svg>
            Filtros
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            Ver todos
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="px-6 py-3.5 border-t border-gray-100 border-y bg-gray-50 dark:border-white/[0.05] dark:bg-gray-900">
            <TableRow>
              <TableCell className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                <div className="flex items-center gap-3">
                  <div>
                    <Checkbox checked={selectAll} onChange={handleSelectAll} />
                  </div>
                  <div>
                    <span className="font-medium text-gray-500 text-theme-xs dark:text-gray-400">
                      ID
                    </span>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                Nombre y Apellido
              </TableCell>
              <TableCell className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                Tipo
              </TableCell>
              <TableCell className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                Valor
              </TableCell>
              <TableCell className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                WhatsApp
              </TableCell>
              <TableCell className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                Fecha de inscripcion
              </TableCell>
              <TableCell className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                Categoria
              </TableCell>
              <TableCell className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">
                Acciones
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableRowData.map((row: TableRowData) => (
              <TableRow key={row.id}>
                <TableCell className="px-4 sm:px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <div>
                      <Checkbox
                        checked={selectedRows.includes(row.id)}
                        onChange={() => handleRowSelect(row.id)}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-700 text-theme-sm dark:text-gray-400">
                        {row.id}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 sm:px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <AvatarText name={row.user.name} className="w-10 h-10" />
                    <div>
                      <span className="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400">
                        {row.user.name}
                      </span>
                      <span className="text-gray-500 text-theme-sm dark:text-gray-400">
                        {row.user.email}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 sm:px-6 py-3.5">
                  <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                    {row.product.name}
                  </p>
                </TableCell>
                <TableCell className="px-4 sm:px-6 py-3.5">
                  <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                    {row.user.dni}
                  </p>
                </TableCell>
                <TableCell className="px-4 sm:px-6 py-3.5">
                  <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                    {row.user.whatsapp}
                  </p>
                </TableCell>
                <TableCell className="px-4 sm:px-6 py-3.5">
                  <p className="text-gray-700 text-theme-sm dark:text-gray-400">
                    {row.product.purchaseDate}
                  </p>
                </TableCell>
                <TableCell className="px-4 sm:px-6 py-3.5">
                  <Badge
                    variant="light"
                    color={
                      row.status.type === "Staff + 2"
                        ? "success"
                        : row.status.type === "Oradores + 1"
                        ? "light"
                        : row.status.type === "Inscripcion general"
                        ? "info"
                        : "warning"
                    }
                    size="sm"
                  >
                    {row.status.type}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 sm:px-6 py-3.5">
                  {row.actions.edit && (
                    <>
                      <button
                        onClick={openModal}
                        className="cursor-pointer fill-gray-700 hover:text-green-600 dark:fill-gray-400 dark:hover:text-error-500 p-1"
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
                            fill=""
                          />
                        </svg>
                      </button>
                      <Modal
                        isOpen={isOpen}
                        onClose={closeModal}
                        className="max-w-[584px] p-5 lg:p-10"
                      >
                        <form className="">
                          <h4 className="text-lg font-medium text-gray-800 dark:text-white/90">
                            Informacion Personal
                          </h4>
                          <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                            <div className="col-span-1">
                              <Label>ID</Label>
                              <Input type="text" value="00001" disabled />
                            </div>

                            <div className="col-span-1">
                              <Label>Nombre</Label>
                              <Input type="text" value="Marcos" />
                            </div>

                            <div className="col-span-1">
                              <Label>Apellido</Label>
                              <Input type="text" value="Rillo Cabanne" />
                            </div>
                            <div className="col-span-1">
                              <Label>Email</Label>
                              <Input
                                type="email"
                                value="marcosrillocabanne@gmail.com"
                              />
                            </div>

                            <div className="col-span-2">
                              <Label>WhatsApp</Label>
                              <Input type="text" value="+543813027536" />
                            </div>

                            <div className="col-span-1">
                              <Label>Tipo</Label>
                              <Input type="select" value="DNI" />
                            </div>

                            <div className="col-span-1">
                              <Label>Valor</Label>
                              <Input type="text" value="41950530" />
                            </div>

                            <div className="col-span-1 sm:col-span-2">
                              <Label>Fecha de Inscripcion</Label>
                              <Input type="date" value="2025-06-15" />
                            </div>

                            <div className="col-span-1 sm:col-span-2">
                              <Label>Categoria</Label>
                              <ListWithCheckbox />
                            </div>
                          </div>

                          <div className="flex items-center justify-end w-full gap-3 mt-6">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={closeModal}
                            >
                              Cerrar
                            </Button>
                            <Button size="sm" onClick={handleSave}>
                              Guardar Cambios
                            </Button>
                          </div>
                        </form>
                      </Modal>
                    </>
                  )}
                  {row.actions.delete && (
                    <button>
                      <TrashBinIcon className="cursor-pointer fill-gray-700 hover:text-error-500 dark:fill-gray-400 dark:hover:text-error-500" />
                    </button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
