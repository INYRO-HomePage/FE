import React, { useState } from "react";
import SelectBox from "./SelectBox";
import AccordionList from "./AccordionList";

type TimelineItem = { title: string; content: React.ReactNode };
type TimelineData = Record<string, TimelineItem[]>;

const timelineData: TimelineData = {
  "2022": [
    { title: "22-1", content: "사진이 들어갈 예시입니다." },
    { title: "22-2", content: "사진이 들어갈 예시입니다." },
    { title: "22-3", content: "사진이 들어갈 예시입니다." },
    { title: "22-4", content: "사진이 들어갈 예시입니다." },
    { title: "22-5", content: "사진이 들어갈 예시입니다." },
  ],
  "2023": [
    { title: "23년 1", content: "사진이 들어갈 예시입니다." },
    { title: "23년 2", content: "사진이 들어갈 예시입니다." },
    { title: "23년 3", content: "사진이 들어갈 예시입니다." },
    { title: "23년 4", content: "사진이 들어갈 예시입니다." },
    { title: "23년 5", content: "사진이 들어갈 예시입니다." },
  ],
  "2024": [
    { title: "24년 1", content: "사진이 들어갈 예시입니다." },
    { title: "24년 2", content: "사진이 들어갈 예시입니다." },
    { title: "24년 3", content: "사진이 들어갈 예시입니다." },
    { title: "24년 4", content: "사진이 들어갈 예시입니다." },
    { title: "24년 5", content: "사진이 들어갈 예시입니다." },
  ],
  "2025": [
    { title: "25-1", content: "사진이 들어갈 예시입니다." },
    { title: "25-2", content: "사진이 들어갈 예시입니다." },
    { title: "25-3", content: "사진이 들어갈 예시입니다." },
    { title: "25-4", content: "사진이 들어갈 예시입니다." },
    { title: "25-5", content: "사진이 들어갈 예시입니다." },
  ],
};

const HistoryTimeline = () => {
  const [selectedYear, setSelectedYear] =
    useState<keyof typeof timelineData>("2025");

  return (
    <section className="w-full max-w-[600px] px-4 mx-auto mt-[45px] flex flex-col items-center">
      <div className="flex justify-between items-center mb-10 w-[450px]">
        <h2 className="text-[55px] sm:text-[80px] font-bold">{selectedYear}</h2>
        <SelectBox
          options={Object.keys(timelineData)}
          defaultValue={selectedYear}
          onChange={(year) =>
            setSelectedYear(year as keyof typeof timelineData)
          }
        />
      </div>
      <div className="flex flex-col items-start max-w-[350px] w-full">
        <AccordionList items={timelineData[selectedYear]} />
      </div>
    </section>
  );
};

export default HistoryTimeline;
