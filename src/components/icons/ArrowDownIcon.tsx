import React from "react";

const ArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="15"
      viewBox="0 0 24 15"
      fill="none"
      {...props}
    >
      <path
        d="M22 2.5L12 12.5L2 2.5"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
