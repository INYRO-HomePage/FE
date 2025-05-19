import { useState, useRef } from "react";

import ArrowDown from "../../assets/arror-down.svg";
import ArrowUp from "../../assets/arror-up.svg";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const answerRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className="flex flex-col rounded-[30px] w-[900px] h-[auto] px-[50px] font-bold bg-[#345c5b] cursor-pointer py-[30px]">
      {/* 질문 */}
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-2xl font-bold flex-1 flex items-center">
          {question}
        </h2>
        <img
          src={open ? ArrowUp : ArrowDown}
          alt={open ? "접기" : "펼치기"}
          className="w-5 h-2.5 inline"
        />
      </div>

      {/* 답 */}
      <div
        className="transition-all duration-300 overflow-hidden"
        style={{
          maxHeight:
            open && answerRef.current
              ? answerRef.current.scrollHeight + 40
              : 0,
          opacity: open ? 1 : 0,
        }}
        onClick={() => setOpen(!open)}
      >
        <p
          ref={answerRef}
          className="mt-[25px] text-lg text-start whitespace-pre-line font-normal"
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
