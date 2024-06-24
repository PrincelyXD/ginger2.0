import React from "react";
import img1 from "./images/rectangle1.jpg";
import img2 from "./images/rectangle2.jpg";
import img3 from "./images/rectangle3.jpg";
import img4 from "./images/rectangle4.jpg";
import img5 from "./images/rectangle5.jpg";
import img6 from "./images/rectangle6.jpg";
import InstagramPill from "../../assets/ui/InstagramPill";
import Logo from "../../assets/ui/Logo";

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

      <section className=" h-fit md:h-[300px] w-full bg-[#101010] px-5 flex  justify-center">



          <div className="footer-wrapper w-full h-full max-w-[1200px] py-[60px] md:py-[40px]  flex flex-col md:flex-row justify-between  ">

            <div className="w-full max-w-[250px] mb-8 md:mb-0 text-white text-[14px]   ">
            <Logo/>
            <p className="mt-[10px]" >Africa’s largest sourcing platform for beauty and fashion vendors</p>
           </div>

          <div className=" w-[100%] max-w-[350px] text-white flex justify-between mx-0 md:mx-2 mb-8 md:mb-0  ">
            <ul>
              <p className=" text-[16px] font-semibold opacity-[0.7] mb-3">Product</p>
              <li className=" text-[14px] py-1 my-1 ">Overview</li>
              <li className=" text-[14px] py-1 my-1 ">Features</li>
              <li className=" text-[14px] py-1 my-1 ">Solutions</li>
              <li className=" text-[14px] py-1 my-1 ">Toutorials</li>
              <li className=" text-[14px] py-1 my-1 ">Pricing</li>
            </ul>
            <ul>
              <p className=" text-[16px] font-semibold opacity-[0.7] mb-3">Company</p>
              <li className=" text-[14px] py-1 my-1 ">About Us</li>
              <li className=" text-[14px] py-1 my-1 ">Careers</li>
              
            </ul>
            <ul>
              <p className=" text-[16px] font-semibold opacity-[0.7] mb-3">Resources</p>
              <li className=" text-[14px] py-1 my-1 ">Blog</li>
              <li className=" text-[14px] py-1 my-1 ">Newsletter</li>
              <li className=" text-[14px] py-1 my-1 ">Events</li>
              <li className=" text-[14px] py-1 my-1 ">Help center</li>
           
            </ul>
          </div>

          <div className=" text-white">
          <h2 className=" text-[16px] font-semibold opacity-[0.7] mb-2">Stay up to date</h2>
        <p className="text-[13px]">Join over 5,000+ people in our community!</p>

          <form action="./">

            <input
             type="email"
             name="email"
             placeholder="Enter your email"
             className="text-[13px] text-[#0B111B] w-[230px] h-[40px] mt-2 outline-none pl-4 rounded-[10px]"
            />

            <button className=" text-[13px] bg-ginger-red py-[10px] px-5 ml-2 mt-2 rounded-full">
              Subscribe
            </button>
          </form>

          </div>

          </div>
          

      </section>
    </footer>
  );
};

export default Footer;
