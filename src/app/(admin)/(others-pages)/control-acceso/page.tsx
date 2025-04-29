"use client";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
// import AllFolders from "@/components/file-manager/AllFolders";
// import AllMediaCard from "@/components/file-manager/AllMediaCard";
import RecentFileTable from "@/components/control-acceso/RecentFileTable";
// import StorageDetailsChart from "@/components/file-manager/StorageDetailsChart";
// import { Metadata } from "next";
import React, { useState } from "react";

// export const metadata: Metadata = {
//   title: "Next.js FileManager | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js FileManager page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
//   // other metadata
// };

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

export default function FileManager() {
  const [selectedRowData, setSelectedRowData] = useState<FileRow | null>(null);
  return (
    <div>
      <PageBreadcrumb pageTitle="Control de Acceso" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <RecentFileTable setSelectedRowData={setSelectedRowData} />
        </div>
      </div>
    </div>
  );
}
