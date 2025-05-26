import React, { useEffect, useState } from "react";
import SelectBox from "./SelectBox";
import AccordionList from "./AccordionList";
import { fetchHistoryByYear, type HistoryItem } from "../api/historyApi";

const HistoryTimeline = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [historyList, setHistoryList] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const yearOptions = ["2022", "2023", "2024", "2025"];

  useEffect(() => {
    const loadHistories = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchHistoryByYear(Number(selectedYear));
        setHistoryList(data);
      } catch (error) {
        const err = error as Error;
        console.error("불러오기 에러:", err.message);
        setError("연혁을 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    loadHistories();
  }, [selectedYear]);

  return (
    <section className="w-full max-w-[600px] px-4 mx-auto mt-[45px] flex flex-col items-center">
      <div className="flex justify-between items-center mb-10 w-[450px]">
        <h2 className="text-[55px] sm:text-[80px] font-bold">{selectedYear}</h2>
        <SelectBox
          options={yearOptions}
          defaultValue={selectedYear}
          onChange={(year) => setSelectedYear(year)}
        />
      </div>

      <div className="flex flex-col items-start max-w-[350px] w-full">
        {loading ? (
          <p className="text-white">불러오는 중...</p>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          <AccordionList
            items={historyList.map((item) => ({
              title: item.title,
              content: item.content,
            }))}
          />
        )}
      </div>
    </section>
  );
};

export default HistoryTimeline;
