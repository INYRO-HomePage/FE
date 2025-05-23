import React from "react";
import StudyIcon from "../../components/icons/StudyIcon";
import ProjectIcon from "../../components/icons/ProjectIcon";
import LaptopIcon from "../../components/icons/LaptopIcon";
import Header from "../../components/header/Header";

const ActivitiesPage = () => {
  return (
    <div className="min-h-screen text-white font-inter">
      <Header />
      <main className="flex flex-col items-center px-4 py-16 gap-24 max-w-[1150px] mx-auto">
        {/* 소개/활동 버튼 */}
        <div className="flex gap-12">
          <button className="text-lg font-semibold hover:underline">
            소개
          </button>
          <button className="text-lg font-semibold hover:underline">
            활동
          </button>
        </div>

        {/* 타이틀 + 설명 */}
        <div className="text-center max-w-[800px]">
          <h1 className="text-[64px] font-bold mb-6">Main</h1>
          <p className="text-[18px] leading-relaxed">
            이니로에서는 원하는 분야를 선택해 함께할 사람들과 도전할 수
            있습니다. <br />
            스터디·프로젝트·멘토링을 통해 배우고 성장하며, <br />
            자유로운 활동 속에서 경험을 나누고 실력을 키워나갑니다.
          </p>
        </div>

        {/* 활동 카드 */}
        <section className="flex flex-wrap justify-center gap-12">
          <ActivityCard
            icon={<StudyIcon />}
            title="Study"
            desc="함께 배우고, 함께 성장하다"
          />
          <ActivityCard
            icon={<LaptopIcon />}
            title="Mentoring"
            desc="배움의 기회를, 성장의 기회로"
          />
          <ActivityCard
            icon={<ProjectIcon />}
            title="Project"
            desc="아이디어를 현실로, 도전을 결과로"
          />
        </section>

        {/* 연혁 타임라인 */}
        <section className="w-full max-w-[800px]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[40px] font-bold">2025</h2>
            <select className="bg-transparent border border-white px-4 py-2 rounded-full text-white">
              <option value="2025">2025</option>
              <option value="2024">2024</option>
            </select>
          </div>

          <ul className="space-y-4 pl-4 border-l-2 border-white">
            {[
              "25-1 신입생 환영회",
              "문제풀이 이벤트",
              "중간고사 응원행사",
              "제 3회 수료명 개최",
              "기말고사 응원행사",
              "25-1 프로젝트 시상식",
            ].map((item, i) => (
              <li key={i} className="relative pl-4">
                <div className="absolute left-[-10px] top-1 w-2 h-2 bg-white rounded-full" />
                <span className="text-[16px]">{item}</span>
                <span className="ml-2">▼</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default ActivitiesPage;

// 서브 컴포넌트
const ActivityCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-xl w-[220px]">
    <div className="mb-4">{icon}</div>
    <h3 className="text-[20px] font-bold">{title}</h3>
    <p className="text-[14px] mt-2">{desc}</p>
  </div>
);
