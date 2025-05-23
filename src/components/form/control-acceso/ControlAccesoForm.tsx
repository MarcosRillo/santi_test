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

export default function ControlAccesoForm({ selectedRowData }: Props) {
  const [nombre, setNombre] = useState("");
  const [fechaDesde, setFechaDesde] = useState("");
  const [horaDesde, setHoraDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [horaHasta, setHoraHasta] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Free");
  const [impresion, setImpresion] = useState("Local");
  const [marcarAcreditacion, setMarcarAcreditacion] = useState(true);
  const [imprimeSticker, setImprimeSticker] = useState(true);

  const [QR, setQR] = useState(true);
  const [PDF417, setPDF417] = useState(false);

  useEffect(() => {
    if (selectedRowData) {
      setNombre(selectedRowData.fileName || "");
      setFechaDesde(selectedRowData.fechaDesde || "");
      setHoraDesde(selectedRowData.horaDesde || "");
      setFechaHasta(selectedRowData.fechaHasta || "");
      setHoraHasta(selectedRowData.horaHasta || "");
    }
  }, [selectedRowData]);

  const handleQRChange = (value: boolean) => {
    setQR(value);
    if (!value && !PDF417) {
      setPDF417(true); // Si desactivás QR y PDF417 está apagado, lo activás
    }
  };

  const handlePDF417Change = (value: boolean) => {
    setPDF417(value);
    if (!value && !QR) {
      setQR(true); // Si desactivás PDF417 y QR está apagado, lo activás
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      nombre,
      fechaDesde,
      horaDesde,
      fechaHasta,
      horaHasta,
      selectedOption,
      impresion,
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

          <div className="flex items-center justify-center gap-2 py-3 col-span-1">
            <Label className="m-0">Código:</Label>
            <Switch label="QR" checked={QR} onChange={handleQRChange} />
            <Tooltip
              content="Código de barra 2D con datos del DNI"
              position="top"
              theme="dark"
            >
              <Switch
                label="PDF417"
                checked={PDF417}
                onChange={handlePDF417Change}
              />
            </Tooltip>
          </div>
          <Tooltip
            content="Tiempo que muestra info en pantalla hasta próxima lectura [Segundos]"
            position="top"
            theme="dark"
          >
            <div className="flex items-center justify-center gap-4 py-3 col-span-1">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={isChecked}
                  onChange={setIsChecked}
                  className=""
                />
                <Label htmlFor="test" className="m-0">
                  Visualización (segundoss)
                </Label>
              </div>

              <Input
                type="number"
                id="test"
                defaultValue="1"
                min="1"
                className="w-20 text-center"
                disabled={!isChecked}
              />
            </div>
          </Tooltip>
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
                label="Auto Servicio (Camara Frontal)"
                checked={selectedOption === "Premium"}
                onChange={() => setSelectedOption("Premium")}
              />
            </div>
          </div>
          <div className="flex items-center gap-3 col-span-full">
            <Label className="m-0">Impresion:</Label>
            <div className="flex flex-wrap items-center gap-4">
              <Radio
                id="Local"
                name="impresionSelect"
                value="Local"
                label="Local"
                checked={impresion === "Local"}
                onChange={() => setImpresion("Local")}
              />
              <Radio
                id="Servidor"
                name="impresionSelect"
                value="Servidor"
                label="Servidor de impresion"
                checked={impresion === "Servidor"}
                onChange={() => setImpresion("Servidor")}
              />
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="py-4 text-base font-medium text-gray-800 border-b border-gray-200 dark:border-gray-800 dark:text-white/90">
              Acciones
            </h4>
          </div>

          <div className="flex items-center justify-start gap-6 p-3 col-span-1">
            <Switch
              label="Marcar acreditacion"
              defaultChecked={marcarAcreditacion}
              onChange={setMarcarAcreditacion}
            />
          </div>

          <div className="flex items-center justify-start gap-6 p-3 col-span-1">
            <Switch
              label="Imprime credencial"
              defaultChecked={imprimeSticker}
              onChange={setImprimeSticker}
            />
          </div>

          <div className="flex justify-end gap-3 col-span-full">
            <Button size="sm" variant="outline">
              Cancelar
            </Button>
            <Button size="sm">Guardar cambios</Button>
          </div>
        </div>
      </Form>
    </ComponentCard>
  );
}
