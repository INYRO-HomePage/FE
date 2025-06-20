import StudyIcon from "../../components/icons/StudyIcon";
import ProjectIcon from "../../components/icons/ProjectIcon";
import LaptopIcon from "../../components/icons/LaptopIcon";
import { useNavigate } from "react-router-dom";
import HistoryTimeline from "../../components/HistoryTimeline";
import CodeIcon from "../../components/icons/CodeIcon";

const ActivitiesPage = () => {
  const navigate = useNavigate();
  return (
    <div className=" text-white font-[Inter]">
      <div className="flex flex-col justify-center items-center text-white font-['Inter']">
        {/* 소개/활동 버튼 */}
        <div className="flex justify-center items-center gap-[45px] mb-8 mt-[35px]">
          <p
            onClick={() => navigate("/about")}
            className="cursor-pointer"
          >
            소개
          </p>
          <p
            onClick={() => navigate("/activities")}
            className="cursor-pointer"
          >
            활동
          </p>
        </div>

        {/* 메인 콘텐츠 */}
        <main className="flex flex-col items-center gap-[55px] w-full">
          {/* 타이틀 + 설명 */}
          <div className="text-center max-w-[800px] px-4">
            <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-bold mb-[55px] leading-none">
              Main
            </h1>
            <p className="text-[16px] sm:text-[18px] leading-relaxed">
              이니로에서는 원하는 분야를 선택해 함께할 사람들과
              도전할 수 있습니다. <br />
              스터디·프로젝트·멘토링을 통해 배우고 성장하며,{" "}
              <br />
              자유로운 활동 속에서 경험을 나누고 실력을
              키워나갑니다.
            </p>
          </div>

          {/* 활동 카드 */}
          <section className="flex flex-col lg:flex-row items-center justify-center gap-[50px] w-full flex-wrap">
            {/* Study 카드 */}
            <div className="flex flex-col items-center justify-center w-[350px] h-[230px] px-[40px] py-[82px] bg-[#345b5b] rounded-[30px] gap-[39px]">
              <div className="flex items-end gap-5">
                <StudyIcon className="w-[52px] h-[47px]" />
                <span className="text-[40px] font-bold">
                  Study
                </span>
              </div>
              <p className="text-[24px] text-center not-italic font-[400] leading-[26px]">
                함께 배우고, <br /> 함께 성장하다
              </p>
            </div>

            {/* Mentoring 카드 */}
            <div className="flex flex-col items-center justify-center w-[350px] h-[230px] px-[40px] py-[37px] bg-[#345b5b] rounded-[30px] gap-[35px]">
              <div className="flex relative items-end gap-5">
                <LaptopIcon className="w-[55px] h-[55px]" />
                <CodeIcon className="absolute w-[36px] h-[36px] left-[10px] top-[15px]" />
                <span className="text-[40px] font-bold">
                  Mentoring
                </span>
              </div>
              <p className="text-[24px] text-center not-italic font-[400] leading-[26px]">
                배움의 기회를, <br /> 성장의 기회로
              </p>
            </div>

            {/* Project 카드 */}
            <div className="flex flex-col items-center justify-center w-[350px] h-[230px] px-[40px] py-[68px] bg-[#345b5b] rounded-[30px] gap-[39px]">
              <div className="flex items-end gap-5">
                <ProjectIcon className="w-[55px] h-[44px]" />
                <span className="text-[40px] font-bold">
                  Project
                </span>
              </div>
              <p className="text-[24px] text-center not-italic font-[400] leading-[26px]">
                아이디어를 현실로, <br /> 도전을 결과로
              </p>
            </div>
          </section>
        </main>
        <div className="flex justify-end items-center gap-[50px] mt-[120px] pb-[100px] self-stretch">
          {/* 연혁 타임라인 컴포넌트 필요*/}
          <HistoryTimeline />
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;
