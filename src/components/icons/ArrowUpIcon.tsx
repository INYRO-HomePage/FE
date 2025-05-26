import React from "react";

const ArrowUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      {...props}
    >
      <path
        d="M12 7L7 2L2 7"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowUpIcon;
