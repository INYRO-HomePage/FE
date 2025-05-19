// import { useState } from "react";

// import ArrowDown from "../../assets/arror-down.svg";
// import ArrowUp from "../../assets/arror-up.svg";

// interface FaqItemProps {
//   question: string;
//   answer: string;
// }

// const FaqItem = ({ question, answer }: FaqItemProps) => {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <div
//       className="flex flex-col justify-center rounded-[30px] w-[900px] px-[50px] py-5 font-bold bg-[#345c5b] cursor-pointer"
//       onClick={() => setOpen(!open)}
//     >
//       {/* 질문 */}
//       <div
//         className="flex justify-between gap-[40px] items-center cursor-pointer min-h-[40px]"
//         onClick={() => setOpen(!open)}
//       >
//         <h2 className="text-2xl font-bold">{question}</h2>
//         <img
//           src={open ? ArrowUp : ArrowDown}
//           alt={open ? "접기" : "펼치기"}
//           className="w-5 h-2.5 inline"
//         />
//       </div>

//       {/* 답 */}
//       {open && (
//         <p className="px-2 pt-5 pb-2 mt-2 text-lg text-start whitespace-pre-line font-normal transition-all duration-200">
//           {answer}
//         </p>
//       )}
//     </div>
//   );
// };

// export default FaqItem;
import { useState, useRef, useLayoutEffect } from "react";

import ArrowDown from "../../assets/arror-down.svg";
import ArrowUp from "../../assets/arror-up.svg";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(100);
  const answerRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (open && answerRef.current) {
      setHeight(130 + answerRef.current.scrollHeight);
    } else {
      setHeight(110);
    }
  }, [open, answer]);

  return (
    <div
      className="flex flex-col justify-center rounded-[30px] w-[900px] px-[50px] py-5 font-bold bg-[#345c5b] transition-all duration-300 overflow-hidden cursor-pointer"
      style={{ height: `${height}px` }}
      onClick={() => setOpen(!open)}
    >
      {/* 질문 */}
      <div className="flex justify-between gap-[40px] items-center cursor-pointer">
        <h2 className="text-2xl font-bold">{question}</h2>
        <img
          src={open ? ArrowUp : ArrowDown}
          alt={open ? "접기" : "펼치기"}
          className="w-5 h-2.5 inline"
        />
      </div>

      {/* 답 */}
      <div className="mt-6">
        {open && (
          <p
            ref={answerRef}
            className="px-2 pb-2 text-lg text-start whitespace-pre-line font-normal transition-all duration-200"
          >
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
