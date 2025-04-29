import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ExampleFormTwo from "@/components/form/example-form/ExampleFormTwo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Form Layout | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Form Layout page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

export default function FormLayout() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Control de Acceso" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-5 sm:space-y-6">
          <ExampleFormTwo selectedRowData={null}/>
        </div>
      </div>
    </div>
  );
}
