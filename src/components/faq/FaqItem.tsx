import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className="flex justify-between items-end bg-[#345c5b] rounded-[30px] w-[900px] h-[auto] px-[50px] py-5 font-bold font-['Inter'] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-xl font-bold">{question}</h2>
        <span className="text-2xl">{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <p className="mt-4 text-lg leading-relaxed whitespace-pre-line">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqItem;
