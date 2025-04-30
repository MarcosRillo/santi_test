"use client";

import { useEffect, useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Radio from "../input/Radio";
import Form from "../Form";
import Button from "../../ui/button/Button";
import { TimeIcon } from "../../../icons";
import Switch from "../switch/Switch";
import { Tooltip } from "@/components/ui/tooltip/Tooltip";
import Checkbox from "../input/Checkbox";

type FileRow = {
  fileName: string;
  fileIcon: {
    light: string;
    dark: string;
  };
  fechaDesde: string;
  fechaHasta: string;
  horaDesde?: string;
  horaHasta?: string;
  category: string;
  size: string;
  dateModified: string;
};

type Props = {
  selectedRowData: FileRow | null;
};

export default function ExampleFormTwo({ selectedRowData }: Props) {
  const [nombre, setNombre] = useState("");
  const [fechaDesde, setFechaDesde] = useState("");
  const [horaDesde, setHoraDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [horaHasta, setHoraHasta] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Free");
  const [autoacreditacion, setAutoacreditacion] = useState(true);
  const [marcarAcreditacion, setMarcarAcreditacion] = useState(true);
  const [imprimeSticker, setImprimeSticker] = useState(true);

  useEffect(() => {
    if (selectedRowData) {
      setNombre(selectedRowData.fileName || "");
      setFechaDesde(selectedRowData.fechaDesde || "");
      setHoraDesde(selectedRowData.horaDesde || "");
      setFechaHasta(selectedRowData.fechaHasta || "");
      setHoraHasta(selectedRowData.horaHasta || "");
    }
  }, [selectedRowData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      nombre,
      fechaDesde,
      horaDesde,
      fechaHasta,
      horaHasta,
      selectedOption,
      autoacreditacion,
      marcarAcreditacion,
      imprimeSticker,
    });
  };

  return (
    <ComponentCard title="Informacion General">
      <Form onSubmit={handleSubmit}>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="col-span-2">
            <Label htmlFor="firstName">Nombre del control de acceso</Label>
            <Input
              type="text"
              id="firstName"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
            />
          </div>

          <div className="col-span-1">
            <Label htmlFor="fechaDesde">Fecha desde</Label>
            <Input
              type="date"
              id="fechaDesde"
              value={fechaDesde}
              onChange={(e) => setFechaDesde(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="horaDesde">Hora desde</Label>
            <div className="relative">
              <Input
                type="time"
                id="horaDesde"
                value={horaDesde}
                onChange={(e) => setHoraDesde(e.target.value)}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400">
                <TimeIcon />
              </span>
            </div>
          </div>

          <div className="col-span-1">
            <Label htmlFor="fechaHasta">Fecha hasta</Label>
            <Input
              type="date"
              id="fechaHasta"
              value={fechaHasta}
              onChange={(e) => setFechaHasta(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="horaHasta">Hora hasta</Label>
            <div className="relative">
              <Input
                type="time"
                id="horaHasta"
                value={horaHasta}
                onChange={(e) => setHoraHasta(e.target.value)}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400">
                <TimeIcon />
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 p-3 col-span-full">
            <Label className="m-0">Codigo:</Label>
            <Switch label="QR" defaultChecked onChange={setAutoacreditacion} />
            <Tooltip
              content="Código de barra 2D con datos del DNI"
              position="top"
              theme="dark"
            >
              <Switch
                label="PDF 417"
                defaultChecked={false}
                onChange={() => {}}
              />
            </Tooltip>
          </div>
          <div className="gap-2 p-3 col-span-full">
            <Label
              htmlFor="test"
              className="flex items-center justify-center gap-2"
            >
              <Checkbox
                checked={isChecked}
                onChange={setIsChecked}
                className=""
              />
              Visualizacion (en segundos)
            </Label>
            <Input
              type="number"
              id="test"
              defaultValue="1"
              className="max-w-3/4 text-center"
            />
          </div>
          <div className="col-span-2">
            <h4 className="py-4 text-base font-medium text-gray-800 border-b border-gray-200 dark:border-gray-800 dark:text-white/90">
              Condiciones de control de acceso
            </h4>
          </div>
          <div className="flex items-center gap-3 col-span-full">
            <Label className="m-0">Modalidad:</Label>
            <div className="flex flex-wrap items-center gap-4">
              <Radio
                id="Free"
                name="roleSelect"
                value="Free"
                label="Asistida (Camara trasera)"
                checked={selectedOption === "Free"}
                onChange={() => setSelectedOption("Free")}
              />
              <Radio
                id="Premium"
                name="roleSelect"
                value="Premium"
                label="AutoServicio (Camara Frontal)"
                checked={selectedOption === "Premium"}
                onChange={() => setSelectedOption("Premium")}
              />
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="py-4 text-base font-medium text-gray-800 border-b border-gray-200 dark:border-gray-800 dark:text-white/90">
              Acciones
            </h4>
          </div>

          <div className="flex items-center justify-start gap-6 p-3 col-span-full">
            <Switch
              label="Marcar acreditacion"
              defaultChecked={marcarAcreditacion}
              onChange={setMarcarAcreditacion}
            />
          </div>

          <div className="flex items-center justify-start gap-6 p-3 col-span-full">
            <Switch
              label="Imprime sticker"
              defaultChecked={imprimeSticker}
              onChange={setImprimeSticker}
            />
          </div>

          <div className="flex gap-3 col-span-full">
            <Button size="sm">Guardar cambios</Button>
            <Button size="sm" variant="outline">
              Cancelar
            </Button>
          </div>
        </div>
      </Form>
    </ComponentCard>
  );
}
