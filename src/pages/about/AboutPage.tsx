import { useNavigate } from "react-router-dom";
import ManagementChampionshipCup from "../../assets/management/ManagementChampionshipCup.svg";
import ManagementFreeParticipation from "../../assets/management/ManagementFreeParticipation.svg";
import ManagementTeamActivities from "../../assets/management/ManagementTeamActivities.svg";

function AboutPage() {
  const nav = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center text-white">
      {/* 소개, 활동 */}
      <div className="flex justify-center items-center gap-[45px] mb-8 mt-[35px]">
        <p
          onClick={() => nav("/activities")}
          className="  cursor-pointer"
        >
          소개
        </p>
        <p
          onClick={() => nav("/activities")}
          className=" cursor-pointer"
        >
          활동
        </p>
      </div>

      {/* Introduction */}
      <div>
        <p className="text-white text-center text-7xl font-bold font-['Inter'] mb-[52px]">
          Introduction
        </p>
      </div>

      {/* Introduction - detail */}
      <div className="w-[862px] text-center mb-[235px]">
        <span className="text-2xl font-['Inter']">
          이니로(Inyro)는 상명대학교 중앙 동아리로,
          <br />
          프로그래밍에 관심 있는 학우들이 자유롭게 배우고
          성장하는 공간입니다.
          <br />
          <br />
          '지능형 로봇(brainy-robot)'에서 이름을 따온 이니로는
          <br />
          프로그래밍 언어, 알고리즘, 웹/앱 개발 등 다양한 분야를
          탐구하고,
          <br />
          직접 프로젝트를 기획하며 실전 경험을 쌓을 수 있는
          곳입니다.
          <br />
        </span>
        <span className="text-text text-6xl font-semibold font-['Inter']">
          “
        </span>
        <span className="text-6xl font-bold font-['Inter'] leading-[2] text-[#67B289]">
          IN You, Run Onward
        </span>
        <span className="text-text text-6xl font-semibold font-['Inter']">
          ”<br />
        </span>
        <span className="text-text text-2xl font-['Inter']">
          이니로는 각자의 가능성을 믿고, 새로운 도전을 시작하는
          곳입니다.
        </span>
      </div>

      {/* Management */}
      <div className="text-center mb-11">
        <p className="text-7xl font-bold font-['Inter'] mb-3">
          Management
        </p>
        <p className="justify-start text-2xl font-medium font-['Inter']">
          이니로에서는 자율성과 협업을 바탕으로 <br />
          각자가 원하는 분야에서 성장할 수 있도록 운영됩니다.
        </p>
      </div>

      {/* Management - detail */}
      <div className="flex flex-col items-center">
        {/* 자유 참여 */}
        <div className="flex flex-col items-center">
          <img src={ManagementFreeParticipation} alt="" />
          <p className="text-center text-3xl font-semibold font-['Inter'] mb-[11px]">
            자유 참여
          </p>
          <p className="text-center text-2xl font-medium font-['Inter']">
            특정 스터디나 프로젝트가 정해져 있지 않고, <br />
            개인이 원하는 분야를 선택해 신청
          </p>
        </div>

        {/* 팀 활동 */}
        <div>
          <img src={ManagementTeamActivities} alt="" />
        </div>

        {/* 함께 나누는 성과 */}
        <div>
          <img src={ManagementChampionshipCup} alt="" />
        </div>
      </div>

      {/* Goal */}
      <div></div>

      {/* Goal Detail */}
      <div></div>
    </div>
  );
}

export default AboutPage;
