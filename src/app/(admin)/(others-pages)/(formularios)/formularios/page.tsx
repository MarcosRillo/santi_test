import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableTwo from "@/components/tables/BasicTables/BasicTableTwo";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Lista de Inscriptos - Vendimia 2025",
  description:
    "This is Next.js Basic Data Table page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Vendimia 2025" />
      <div className="space-y-6">
        <ComponentCard title="Listado">
          <BasicTableTwo />
        </ComponentCard>
      </div>
    </div>
  );
}
