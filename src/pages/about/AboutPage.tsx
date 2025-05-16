import { useNavigate } from "react-router-dom";
import ManagementChampionshipCup from "../../assets/management/ManagementChampionshipCup.svg";
import ManagementFreeParticipation from "../../assets/management/ManagementFreeParticipation.svg";
import ManagementTeamActivities from "../../assets/management/ManagementTeamActivities.svg";

function AboutPage() {
  const nav = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center text-white font-['Inter']">
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
        <p className="text-white text-center text-7xl font-bold  mb-[52px]">
          Introduction
        </p>
      </div>

      {/* Introduction - detail */}
      <div className="w-[862px] text-center mb-[235px]">
        <span className="text-2xl ">
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
        <span className="text-text text-6xl font-semibold ">
          “
        </span>
        <span className="text-6xl font-bold  leading-[2] text-[#67B289]">
          IN You, Run Onward
        </span>
        <span className="text-text text-6xl font-semibold ">
          ”<br />
        </span>
        <span className="text-text text-2xl ">
          이니로는 각자의 가능성을 믿고, 새로운 도전을 시작하는
          곳입니다.
        </span>
      </div>

      {/* Management */}
      <div className="text-center mb-[88px]">
        <p className="text-7xl font-bold  mb-3">Management</p>
        <p className="justify-start text-2xl font-medium ">
          이니로에서는 자율성과 협업을 바탕으로 <br />
          각자가 원하는 분야에서 성장할 수 있도록 운영됩니다.
        </p>
      </div>

      {/* Management - detail */}
      <div className="flex flex-col items-center mb-[199px]">
        {/* 자유 참여 */}
        <div className="flex flex-col items-center mb-[120px]">
          <img
            className="w-32 h-44 mb-[13px]"
            src={ManagementFreeParticipation}
            alt="자유 참여"
          />
          <p className="text-center text-3xl font-semibold  mb-[11px]">
            자유 참여
          </p>
          <p className="text-center text-2xl font-medium ">
            특정 스터디나 프로젝트가 정해져 있지 않고, <br />
            개인이 원하는 분야를 선택해 신청
          </p>
        </div>

        {/* 팀 활동 */}
        <div className="flex flex-col items-center mb-[120px]">
          <img
            className="w-48 h-40 mb-[13px]"
            src={ManagementTeamActivities}
            alt="팀 활동"
          />
          <p className="text-center text-3xl font-semibold  mb-[11px]">
            팀 활동
          </p>
          <p className="text-center text-2xl font-medium ">
            운영진이 비슷한 목표를 가진 팀원들을 연결
          </p>
        </div>

        {/* 함께 나누는 성과 */}
        <div className="flex flex-col items-center">
          <img
            className="w-36 h-36 mb-[13px]"
            src={ManagementChampionshipCup}
            alt="함께 나누는 성과"
          />
          <p className="text-center text-3xl font-semibold  mb-[11px]">
            함께 나누는 성과
          </p>
          <p className="text-center text-2xl font-medium ">
            ‘스프멘 시상식’을 통해 한 학기 동안의 성장을 응원
          </p>
        </div>
      </div>

      {/* Goal */}
      <div className="mb-11">
        <p className="text-7xl font-bold ">Goal</p>
      </div>

      {/* Goal Detail */}
      <div className="flex flex-col items-center gap-8 mb-[65px]">
        <p className="text-[31px] font-semibold leading-normal  ">
          “스스로 배우고 성장하는 학습 문화”
        </p>
        <p className="text-[31px] font-semibold leading-normal ">
          <span className="text-white">“</span>협업을 통한 성장
          <span className="text-white">“</span>
        </p>

        <p className="text-[30px] font-semibold leading-normal  ">
          <span className="text-white">“</span>멘토링을 통한 연결
          <span className="text-white">“</span>
        </p>
        <p className="text-[29px] font-semibold leading-normal  text-[#A9D7C1]">
          <span className="text-white">“</span>도전과 성취를
          응원하는 환경
          <span className="text-white ">“</span>
        </p>
      </div>

      {/* ... */}
      <div className="flex flex-col items-center justify-center mb-[65px]">
        <p className="text-[32px] leading-[36px] font-black ">
          .
        </p>
        <p className="text-[32px] leading-[36px] font-black ">
          .
        </p>
        <p className="text-[32px] leading-[36px] font-black ">
          .
        </p>
      </div>

      {/* last text */}
      <div className="text-center text-2xl font-medium mb-[65px]">
        이니로는 단순한 프로그래밍 학습을 넘어, <br />
        함께 배우고 성장하며 실질적인 역량을 키우는 것을 목표로
        합니다. <br />
        자율적인 학습과 협업을 통해 문제 해결 능력을 기르고,
        <br />
        실무 경험을 쌓으며, 서로의 성장을 돕는 환경을 조성합니다.
      </div>

      {/* ... */}
      <div className="flex flex-col mb-[65px]">
        <p className="text-[32px] leading-[36px] font-black ">
          .
        </p>
        <p className="text-[32px] leading-[36px] font-black ">
          .
        </p>
        <p className="text-[32px] leading-[36px] font-black ">
          .
        </p>
      </div>
    </div>
  );
}

export default AboutPage;

// 2025.05.17 완성
