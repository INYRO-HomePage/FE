import React from "react";
import ArrowIcon from "../../components/icons/ArrowIcon";
import StudyIcon from "../../components/icons/StudyIcon";
import LaptopIcon from "../../components/icons/LaptopIcon";
import CodeIcon from "../../components/icons/CodeIcon";
import ProjectIcon from "../../components/icons/ProjectIcon";
import Header from "../../components/header/Header";

const Homepage: React.FC = () => {
  return (
    <>
      {/* Header */}
      <Header />
      <main className="flex flex-col items-center text-white font-[Inter]">
        {/* Title */}
        <section className="pt-[246px] text-center">
          <h1 className="text-[128px] font-bold leading-none">INYRO</h1>
        </section>

        {/* About */}
        <section className="pt-[374px] text-center">
          <h2 className="text-[64px] font-bold">About</h2>
          <p className="text-[96px] font-bold mt-[79px]">
            “IN You, Run Onward”
          </p>
          <p className="text-[32px] text-center font-semibold mt-[14px]">
            함께 배우고, 협력하며, 가능성을 펼치는 곳
          </p>
          <div className="flex mt-[73px] justify-center text-2xl">
            {/* Vector Icon */}
            <ArrowIcon className="cursor-pointer" />
          </div>
        </section>

        {/* Activities */}
        <section className="pt-[153px] text-center">
          <h2 className="text-[64px] font-bold">Activities</h2>
          <p className="text-[24px] font-thin ">
            서로에게 배움이 되어, 함께 성장합니다
          </p>

          {/* tab  */}
          <div className="flex mt-[87px] justify-center gap-[200px]">
            <StudyIcon />
            <div className="relative w-[115px] h-[115px]">
              <LaptopIcon className="" />
              <CodeIcon className="absolute top-6 right-[21px]" />
            </div>
            <ProjectIcon />
          </div>
          <div className="inline-flex items-center gap-[30px]">
            {/* study */}
            <div className="flex justify-center items-center gap-[10px] px-[64px] py-[20px] rounded-full border border-white">
              <span className="text-white text-center  text-[32px] font-semibold not-italic leading-none">
                study
              </span>
            </div>
            {/* mentoring */}
            <div className="flex justify-center items-center gap-[10px] px-[64px] py-[20px] rounded-full border border-white">
              <span className="text-white text-center  text-[32px] font-semibold not-italic leading-none">
                mentoring
              </span>
            </div>
            {/* project */}
            <div className="flex justify-center items-center gap-[10px] px-[64px] py-[20px] rounded-full border border-white">
              <span className="text-white text-center  text-[32px] font-semibold not-italic leading-none">
                project
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-[90px] text-2xl">
            {/* Vector Icon */}
            <ArrowIcon className="cursor-pointer" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Homepage;
