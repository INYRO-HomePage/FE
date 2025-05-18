import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="bg-[#2d5a5a] rounded-2xl w-full px-6 py-5 transition-all">
      <div
        className="flex justify-between items-center cursor-pointer"
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

function FaqPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[51px] items-center text-[#ffffff] min-h-screen bg-gradient-to-b from-[#0a3b3b] to-[#0e3a3a] px-4">
      {/* 네비게이션 */}
      <div className="flex flex-row gap-20 mt-[51px] text-xl font-semibold">
        <button onClick={() => navigate("/spman")}>
          스프멘
        </button>
        <button onClick={() => navigate("/activities")}>
          활동
        </button>
        <button onClick={() => navigate("/register")}>
          등록
        </button>
      </div>

      {/* 목차 */}
      <div className="text-center text-4xl font-extrabold">
        활동별 안내
      </div>

      {/* 세부내용 - 활동 안내 */}
      <div className="w-full max-w-3xl flex flex-col gap-4">
        <FaqItem
          question="스터디는 활동 방식은 무엇인가요?"
          answer={`관심 있는 주제나 기술을 함께 공부하는 모임입니다.\n같은 분야를 선택한 학우들과 함께 성장할 수 있습니다.\n미리 팀을 구성하는 것도 가능합니다.\n주 1시간 이상 활동 필수입니다.`}
        />
        <FaqItem
          question="멘토링는 활동 방식은 무엇인가요?"
          answer={`멘토와 함께 학습하고 피드백을 받으며 성장하는 활동입니다.`}
        />
      </div>

      {/* 목차 */}
      <div className="text-center text-4xl font-extrabold mt-20">
        스프멘 관련
      </div>

      {/* 세부내용 - 스프멘 안내 */}
      <div className="w-full max-w-3xl flex flex-col gap-4 mb-20">
        <FaqItem
          question="스터디, 멘토링, 프로젝트 활동 신청 후 취소할 수 있나요?"
          answer={`지원이 마감된 후 매칭이 시작되면 취소가 어렵습니다.\n이미 팀이 구성된 후에는 팀원들에게 피해가 갈 수 있으며,\n이에 대한 책임은 본인에게 있습니다.`}
        />
        <FaqItem
          question="팀을 직접 구성할 수 있나요?"
          answer="가능합니다. 원하는 팀원들과 미리 팀을 구성한 후 신청할 수 있습니다."
        />
      </div>
    </div>
  );
}

export default FaqPage;
