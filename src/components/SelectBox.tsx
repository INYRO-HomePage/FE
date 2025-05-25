import React, { useState } from "react";
import ArrowUpIcon from "./icons/ArrowUpIcon";

type SelectBoxProps = {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
};

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  defaultValue = "",
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultValue || options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div className="relative w-[120px]">
      {/* 버튼 */}
      <button
        className="w-full bg-transparent border border-white text-white px-4 py-2 rounded-md text-center font-medium flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <ArrowUpIcon
          className={`w-[14px] h-[9px] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* 옵션 목록 */}
      {isOpen && (
        <ul className="absolute w-full bg-transparent border border-white rounded-md z-20">
          {options.map((e) => (
            <li
              key={e}
              className="px-4 py-2 text-white hover:bg-white hover:text-black cursor-pointer"
              onClick={() => handleSelect(e)}
            >
              {e}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectBox;
