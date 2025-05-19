import { useState } from "react";
import FaqItem from "../../components/faq/FaqItem";

function FaqPage() {
  const [tab, setTab] = useState<
    "spman" | "activities" | "register"
  >("spman");

  const renderContent = () => {
    switch (tab) {
      case "spman":
        return (
          <div className="flex flex-col gap-[51px]">
            <div className="text-center text-4xl font-extrabold ">
              스프멘 관련
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4 ">
              <FaqItem
                question="스터디, 멘토링, 프로젝트 활동 신청 후 취소할 수 있나요?"
                answer={`지원이 마감된 후 매칭이 시작되면 취소가 어렵습니다.\n이미 팀이 구성된 후에는 팀원들에게 피해가 갈 수 있으며, 이에 대한 책임은 본인에게 있습니다.`}
              />
              <FaqItem
                question="팀을 직접 구성할 수 있나요?"
                answer="가능합니다! 활동 지원시 운영진에게 미리 구성된 팀원을 전달하면 원하는 팀으로 조정할 수 있습니다."
              />
              <FaqItem
                question="활동 보고서 작성이 필수인가요?"
                answer={`네, 모든 활동은 매주 보고서 작성을 필수로 합니다. \n보고서가 제출되지 않거나, 정당한 사유 없이 누락될 경우 경고가 부여될 수 있습니다.`}
              />
              <FaqItem
                question="활동은 몇 주 동안 진행되나요?"
                answer={`총 8주 동안 진행됩니다.\n최종 보고 전까지 모든 팀은 8주차까지의 보고서를 작성해야 합니다.`}
              />
              <FaqItem
                question="활동 종료 후 평가 기준은 무엇인가요?"
                answer={`보고서의 완성도와 성실함이 가장 중요한 심사 기준입니다.\n최종 보고서를 기반으로 운영진이 심사하며, 우수팀에게는 소정의 상금이 수여됩니다.`}
              />
              <FaqItem
                question="활동 중도 포기 시 불이익이 있나요?"
                answer={`활동을 중도 포기할 경우, 활동 하나당 경고 1회가 부여됩니다.\n경고 3회 누적 시 동아리에서 임의 탈퇴될 수 있습니다.\n모든 책임을 감수한다면 운영진에게 편하게 말씀해 주세요.`}
              />
              <FaqItem
                question="지원자가 적으면 매칭이 어려울 수도 있나요?"
                answer={`네, 지원 인원이 적으면 팀 매칭이 어려울 수 있습니다.\n이 경우 개인의 의견을 반영하여 다른 팀으로 배정될 수도 있습니다."`}
              />
            </div>
          </div>
        );
      case "activities":
        return <div></div>;
      case "register":
        return <></>;
      default:
        return (
          <div>
            <p>로딩중입니다.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col gap-[51px] items-center min-h-screen bg-gradient-to-b px-4">
      {/* 네비게이션 */}
      <div className="flex flex-row justify-center items-center gap-20 mt-[51px] text-xl font-semibold">
        <button onClick={() => setTab("spman")}>스프멘</button>
        <button onClick={() => setTab("activities")}>
          활동
        </button>
        <button onClick={() => setTab("register")}>등록</button>
      </div>

      {/* 세부 내용 */}
      {renderContent()}
    </div>
  );
}

export default FaqPage;
