import React from "react";
import ArrowIcon from "../../components/icons/ArrowIcon";
import StudyIcon from "../../components/icons/StudyIcon";
import LaptopIcon from "../../components/icons/LaptopIcon";
import CodeIcon from "../../components/icons/CodeIcon";
import ProjectIcon from "../../components/icons/ProjectIcon";
import { useNavigate } from "react-router-dom";

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="flex flex-col items-center text-white font-[Inter]">
        {/* Title */}
        <section className="mt-[246px] text-center">
          <h1 className="text-[128px] font-bold leading-none">INYRO</h1>
        </section>

        {/* About */}
        <section className="mt-[374px] text-center">
          <h2 className="text-[64px] font-bold">About</h2>
          <p className="text-[96px] font-bold mt-[79px]">
            “IN You, Run Onward”
          </p>
          <p className="text-[32px] text-center font-semibold mt-[14px]">
            함께 배우고, 협력하며, 가능성을 펼치는 곳
          </p>
          <div className="flex mt-[73px] justify-center text-2xl">
            {/* Vector Icon */}
            <ArrowIcon
              onClick={() => navigate("/about")}
              className="cursor-pointer"
            />
          </div>
        </section>

        {/* Activities */}
        <section className="pt-[153px] text-center">
          <h2 className="text-[64px] font-bold">Activities</h2>
          <p className="text-[24px] font-thin ">
            서로에게 배움이 되어, 함께 성장합니다
          </p>
        </section>

        {/* tab  */}
        <section className="w-full max-w-[900px] flex flex-wrap justify-center gap-[100px] mt-[87px]">
          {/* 카드 1 */}
          <div className="flex flex-col justify-center items-center gap-6">
            <StudyIcon height="110px" />
            <span className="text-white text-center text-[32px] font-semibold not-italic leading-none px-10 py-[20px] rounded-full border border-white">
              Study
            </span>
          </div>

          {/* 카드 2 */}
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="relative">
              <LaptopIcon height="110px" />
              <CodeIcon className="absolute top-5 right-[22px]" />
            </div>
            <span className="text-white text-center text-[32px] font-semibold not-italic leading-none px-10 py-[20px] rounded-full border border-white">
              Mentoring
            </span>
          </div>

          {/* 카드 3 */}
          <div className="flex flex-col justify-center items-center gap-6">
            <ProjectIcon height="110px" />
            <span className="text-white text-center text-[32px] font-semibold not-italic leading-none px-10 py-[20px] rounded-full border border-white">
              Project
            </span>
          </div>
        </section>

        <div className="flex justify-center mt-[73px] mb-[50px] text-2xl">
          {/* Vector Icon */}
          <ArrowIcon
            onClick={() => navigate("/activities")}
            className="cursor-pointer"
          />
        </div>
      </main>
    </>
  );
};

export default Homepage;
