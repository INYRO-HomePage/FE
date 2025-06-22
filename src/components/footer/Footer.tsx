import React from "react";
import Instagram from "../icons/Instagram";
import Notion from "../icons/Notion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#142d2d] text-white h-[200px] px-8 py-6 mt-[50px]">
      <div className="flex flex-col justify-center h-full mx-auto max-w-screen-2xl">
        {/* 상단: 좌우 정렬 */}
        <div className="flex justify-between items-center mb-[13px] mx-3">
          <p className="text-[16px] font-light leading-normal">
            Copyright &nbsp;&nbsp;ⓒ 2025 INYRO ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/smu_inyro/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50"
            >
              <Instagram />
            </a>
            <a
              href="https://notion.so"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50"
            >
              <Notion />
            </a>
          </div>
        </div>

        {/* 가로선 */}
        <hr className="border-t border-white mb-[19px]" />

        {/* 하단: 텍스트 */}
        <div className="flex flex-col gap-5 mx-3">
          <p className="font-semibold text-[24px] leading-none">
            IN You, Run Onward
          </p>
          <p className="font-[400] text-[20px] leading-none">
            inyro1234@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
