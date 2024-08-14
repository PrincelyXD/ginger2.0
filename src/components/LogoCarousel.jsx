import React from "react";
import logo1 from "../assets/images/image-36.png";
import logo2 from "../assets/images/image-31.png";
import logo3 from "../assets/images/image-32.png";
import logo4 from "../assets/images/image-61.png";
import logo5 from "../assets/images/image-60.png";
import logo6 from "../assets/images/image-62.png";

const LogoCarousel = () => {
  return (
    <div className=" w-full md:w-[98%] max-w-[1050px] h-[100px] md:h-[150px] mt-[50px] bg-[#101010]  md:rounded-full flex flex-col items-center justify-center">
      <p className=" text-[13px] md:text-[16px] uppercase text-white font-medium tracking-wide md:mt-[-20px] ]">
        backed by top manufacturers
      </p>
      <div className=" hidden w-[80%] md:flex  items-center justify-between logo-carousel mt-[20px]">
        <img className=" h-[30px]" src={logo1} alt="" />
        <img className=" h-[40px]" src={logo2} alt="" />
        <img className=" h-[25px]" src={logo3} alt="" />
        <img className=" h-[25px]" src={logo4} alt="" />
        <img className=" h-[45px]" src={logo5} alt="" />
        <img className=" h-[35px]" src={logo6} alt="" />
      </div>

      <section className=" logo-slider w-full mobile-carousel mt-[10px] ">
        <div className="  whitespace-nowrap overflow-hidden ">
        <div className=" varyf w-fit inline-block md:hidden items-center justify-between  ">
          <img className="  ml-[2rem] inline-block  h-[25px]" src={logo1} alt="" />
          <img className=" ml-[2rem] inline-block h-[25px]" src={logo2} alt="" />
          <img className=" ml-[2rem] inline-block h-[20px]" src={logo3} alt="" />
          <img className=" ml-[2rem] inline-block h-[20px]" src={logo4} alt="" />
          <img className=" ml-[2rem] inline-block h-[25px]" src={logo5} alt="" />
          <img className=" ml-[2rem] inline-block h-[25px] " src={logo6} alt="" />
          <img className="  ml-[2rem] inline-block  h-[25px]" src={logo1} alt="" />
          <img className=" ml-[2rem] inline-block h-[25px]" src={logo2} alt="" />
          <img className=" ml-[2rem] inline-block h-[20px]" src={logo3} alt="" />
          <img className=" ml-[2rem] inline-block h-[20px]" src={logo4} alt="" />
          <img className=" ml-[2rem] inline-block h-[25px]" src={logo5} alt="" />
          <img className=" ml-[2rem] inline-block h-[25px]" src={logo6} alt="" />
        </div>
       
        </div>
       

      </section>
    </div>
  );
};

export default LogoCarousel;
