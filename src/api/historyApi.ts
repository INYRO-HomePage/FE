import axios from "axios";

// 응답 데이터 타입 정의
export interface HistoryItem {
  title: string;
  image: {
    url: string;
  };
}

const BASE_URL = "http://api.inyro.com";

export const fetchHistoryByYear = async (
  year: number
): Promise<HistoryItem[]> => {
  try {
    const response = await axios.get<{ result: { histories: HistoryItem[] } }>(
      `${BASE_URL}/history/${year}`
    );
    console.log(response.data.result.histories);
    return response.data.result.histories;
  } catch (error) {
    console.error(`연혁 불러오기 실패 (연도: ${year})`, error);
    throw new Error("연혁 데이터를 불러오지 못했습니다.");
  }
};
