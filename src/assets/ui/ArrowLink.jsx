import React from "react";
import { Link } from "react-router-dom";

const ArrowLink = ({color}) => {
  return (
    <div className="sales-route relative z-10">
      <Link className="w-[180px] flex no-underline items-center">
        <svg
          width="46"
          height="46"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all ease-linear  "
        >
          <rect width="56" height="56" rx="28" fill={`${color}`}></rect>
          <path
            d="M33 23.0005L22 34.0005"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
          <path
            d="M27.0039 22H33.0039C33.4753 22 33.711 22 33.8575 22.1464C34.0039 22.2929 34.0039 22.5286 34.0039 23V29"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className= {`text-[15px] ml-2 text-[${color}] transition-all ease-linear hover:underline`}>
          Join Waitlist
        </span>
      </Link>
    </div>
  );
};

export default ArrowLink;
