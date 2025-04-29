"use client";
import React, { useState } from "react";
import Checkbox from "../../form/input/Checkbox";

export default function ListWithCheckbox() {
  // State to manage individual checkbox values
  const [checkedItems, setCheckedItems] = useState<boolean[]>([
    true,
    true,
    false,
    true,
    false,
  ]);

  // Handler to toggle individual checkboxes
  const handleCheckboxChange = (index: number, value: boolean) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = value;
    setCheckedItems(updatedCheckedItems);
  };

  return (
    <div className="bg-white dark:bg-white/[0.03] sm:w-fit">
      <ul className="grid grid-cols-2">
        {[
          "Inscripcion general",
          "Staff",
          "Sector publico",
          "Oradores",
          "Prensa",
          "Board",
          "Invitados especiales",
          "PROSPPECT"
        ].map((item, index) => {
          const id = `listCheckbox${index}`; // Unique ID for each checkbox
          return (
            <li
              key={index}
              className="px-3 py-2.5 w-full grid grid-cols-2 gap-2"
            >
              <div className="flex items-center gap-2">
                <Checkbox
                  id={id} // Pass unique id to checkbox
                  checked={checkedItems[index]}
                  onChange={(value) => handleCheckboxChange(index, value)}
                />
                <label
                  htmlFor={id} // Use the same id for the label
                  className="flex items-baseline w-full text-sm cursor-pointer select-none dark:text-gray-400"
                >
                  {item}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
