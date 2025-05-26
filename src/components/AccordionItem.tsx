// components/AccordionItem.tsx
import React, { useState } from "react";
import ArrowDownIcon from "./icons/ArrowDownIcon";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {/* 상단 헤더 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white w-full"
      >
        <div className="relative right-[9px] w-4 h-4 bg-white rounded-full" />
        <span className="text-[16px] font-medium">{title}</span>
        <ArrowDownIcon
          className={`ml-auto w-[14px] h-[9px] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* 펼쳐진 내용 */}
      {isOpen && (
        <div className="bg-[#D9D9D9] rounded-[20px] p-6 text-black mt-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
