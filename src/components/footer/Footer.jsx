import React from "react";
import img1 from "./images/rectangle1.jpg";
import img2 from "./images/rectangle2.jpg";
import img3 from "./images/rectangle3.jpg";
import img4 from "./images/rectangle4.jpg";
import img5 from "./images/rectangle5.jpg";
import img6 from "./images/rectangle6.jpg";
import InstagramPill from "../../assets/ui/InstagramPill";
import Logo from "../../assets/ui/Logo";
import { Link } from "react-router-dom";
import SocialIcons from "../../assets/ui/SocialIcons";

const Footer = () => {
  return (
    <footer>
      <div className=" w-full h-[170px] bg-slate-500 flex overflow-hidden relative">
        <img className=" h-[200px]" src={img1} alt="" />
        <img className=" h-[200px]" src={img2} alt="" />
        <img className=" h-[200px]" src={img3} alt="" />
        <img className=" h-[200px]" src={img4} alt="" />
        <img className=" h-[200px]" src={img5} alt="" />
        <img className=" h-[200px]" src={img6} alt="" />

        <div className=" h-full w-full bg-black absolute opacity-[0.5]"> </div>

        <InstagramPill />
      </div>

      <section className=" h-fit md:h-[330px] w-full bg-[#101010] px-5 flex  justify-center">
        <div className="footer-wrapper w-full h-full max-w-[1200px] py-[60px] md:py-[40px]  flex flex-col md:flex-row justify-between  ">
          <div className="w-full max-w-[250px] mb-8 md:mb-0 text-white text-[14px]   ">
            <Logo />
            <p className="mt-[10px]">
              Africa’s largest sourcing platform for beauty and fashion vendors
            </p>
          </div>

          <div className=" w-[100%] max-w-[350px] text-white flex justify-between mx-0 md:mx-2 mb-8 md:mb-0  ">
            <ul>
              <p className=" text-[16px] font-semibold text-[#98A2B3] mb-3">
                Product
              </p>
              <li className=" text-[14px] py-1 my-2 ">
                {" "}
                <Link className="py-3">Overview</Link>{" "}
              </li>
              <li className=" text-[14px] py-1 my-2 ">
                {" "}
                <Link className="py-3">Features</Link>{" "}
              </li>
              <li className=" text-[14px] py-1 my-2 ">
                {" "}
                <Link className="py-3">Solutions</Link>{" "}
              </li>
              <li className=" text-[14px] py-1 my-2 ">
                {" "}
                <Link className="py-3">Toutorials</Link>{" "}
              </li>
              <li className=" text-[14px] py-1 my-2 ">
                {" "}
                <Link className="py-3">Pricing</Link>{" "}
              </li>
            </ul>
            <ul>
              <p className=" text-[16px] font-semibold text-[#98A2B3] mb-3">
                Company
              </p>
              <li className=" text-[14px] py-1 my-2 ">
                {" "}
                <Link className="py-3">About Us</Link>{" "}
              </li>
              <li className=" text-[14px] py-1 my-2 ">
                {" "}
                <Link className="py-3">Careers</Link>{" "}
              </li>
            </ul>
            <ul>
              <p className=" text-[16px] font-semibold text-[#98A2B3] mb-3">
                Resources
              </p>
              <li className=" text-[14px] py-1 my-2 ">
                {" "}
                <Link className="py-3">Blog</Link>{" "}
              </li>
              <li className=" text-[14px] py-1 my-2 ">
                {" "}
                <Link className="py-3">Newsletter</Link>{" "}
              </li>
              <li className=" text-[14px] py-1 my-2 ">
                {" "}
                <Link className="py-3">Events</Link>{" "}
              </li>
              <li className=" text-[14px] py-1 my-2 ">
                {" "}
                <Link className="py-3">Help center</Link>{" "}
              </li>
            </ul>
          </div>

          <div className=" text-white">
            <h2 className=" text-[16px] font-semibold text-[#98A2B3] mb-2">
              Stay up to date
            </h2>
            <p className="text-[13px]">
              Join over 5,000+ people in our community!
            </p>

            <form action="./">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="text-[13px] text-[#0B111B] w-[200px] sm:w-[230px] h-[40px] mt-4 outline-none pl-4 rounded-[10px]"
              />

              <button className=" text-[12px] sm:text-[13px] bg-ginger-red py-[10px] px-5 ml-2 mt-2 rounded-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="w-full h-[70px] bg-black px-5 flex justify-center">
        <div className="w-full max-w-[1200px] flex justify-between items-center ] ">
          <p className="text-[#98A2B3] text-[10px]  sm:text-[12px]">
            All rights reserved © 2024 Ginger Technologies, Inc.
          </p>

          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
