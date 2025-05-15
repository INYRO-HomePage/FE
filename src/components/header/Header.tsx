import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex justify-between items-center w-[auto] h-[80px] pl-28 pr-28 bg-[#142D2DFC]">
      <div className="w-72">
        <Link
          className="flex items-center gap-1 w-[31px] h-[19px] top-2.5 font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] align-bottom text-[#FFFFFF]"
          to="/"
        >
          <div className="text-[40px] font-bold w-32">INYRO</div>
          <div className="w-[159px] text-[14px] font-semibold">
            Sangmyung&nbsp;University
            <br />
            Central&nbsp;Club
          </div>
        </Link>
      </div>
      <div className="flex justify-end items-center gap-[41px]">
        <Link
          className="w-[31px] h-[19px] top-2.5 font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] align-bottom text-[#FFFFFF]"
          to="/about"
        >
          About
        </Link>
        <Link
          className="w-[31px] h-[19px] top-2.5 font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] align-bottom text-[#FFFFFF]"
          to="/FAQ"
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
}

export default Header;
