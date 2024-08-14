import { NavLink } from "react-router-dom";
import BuiltForYou from "./BuiltForYou";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const SeeHowSection = ({toggleModal}) => {
const [activeLink, setActiveLink] = useState('nav1')

const handleClick= (link) => {
    setActiveLink(link)
}

const modalOpen = null
  const activeStyle1 = {
    color: "#FF4623",
    backgroundColor: "#ff482329",
  
  };
  const activeStyle2 = {
    color: "#113264",
    backgroundColor: "#11326429",
  
  };
  const activeStyle3 = {
    color: "#699444",
    backgroundColor: "#69944429",
   
  };

  return (
    <section className="w-full h-fit pb-[80px] flex flex-col justify-start items-center px-[20px]">
      <div className="w-[100%] max-w-[1100px] h-fit  mt-[40px]  mb-[80px]  sm:h-[200px] flex flex-col sm:flex-row justify-between sm:items-end">
        <div className="w-[100%]  max-w-[400px] mb-[20px] sm:mb-[0]">
          <h1 className=" text-[35px] md:text-[40px] pt-[40px] font-merchant leading-[1.2]">
            See how Ginger helps you source quality products faster
          </h1>
        </div>

        <div className=" w-[100%] max-w-[400px] ml-0 sm:ml-[20px] ">
          <p className=" text-[15px] md:text-[16px]  pr-9 pb-3">
            Join our waitlist now to see why over 60,000 offline buyers and
            sellers trust Ginger for their businesses.
          </p>
        </div>
      </div>

      <div className="w-[100%] max-w-[1100px] sm:h-fit flex  flex-col  sm:flex-row ">

        <div className=" h-fit flex items-end">

          <div className=" hidden sm:block  h-[125px] w-[0.5px] bg-[#D9D9D9] relative ">
             <div>
             { activeLink === "nav1" && <span className={` block w-2 h-2  bg-ginger-red absolute left-[-3.5px]  rounded-full `}></span>} 
             { activeLink === "nav2" && <span className={` block w-2 h-2  bg-[#113264] absolute left-[-3.5px] top-[38%]  rounded-full `}></span>} 
             { activeLink === "nav3" && <span className={` block w-2 h-2  bg-[#699444] absolute left-[-3.5px] bottom-[18%]  rounded-full `}></span>} 
              </div> 
          
          </div>


          <div className=" w-[100%] sm:w-[200px] min-w-[160px] h-[50px] sm:h-[150px] mb-[30px] sm:mb-[0px] sm:justify-evenly pl-[8px]  flex  sm:flex-col   sm:border-b-0   border-[#262626]">
            <NavLink
            to="./"
            end
            onClick={() =>  handleClick('nav1')}
            style={({ isActive }) => (isActive ? activeStyle1 : null)}
            className=" w-fit  h-fit text-[12px] px-3 py-3 sm:px-6 sm:py-3  rounded-full text-[#262626] sm:text-[13px] "
          >
            Built for You
          </NavLink>

          <NavLink
            to="./accesibility"
            onClick={() =>  handleClick('nav2')}
            style={({ isActive }) => (isActive ? activeStyle2 : null)}
            className="w-fit  h-fit text-[12px] px-3 py-3 sm:px-6 sm:py-3  rounded-full text-[#262626] sm:text-[13px] "
          >
            Made Accessible
          </NavLink>
          <NavLink
            to="./security"
            onClick={() =>  handleClick('nav3')}
            style={({ isActive }) => (isActive ? activeStyle3 : null)}
            className=" w-fit  h-fit text-[12px] px-3 py-3 sm:px-6 sm:py-3  rounded-full text-[#262626] sm:text-[13px] "
          >
            Safe & Secure
          </NavLink>
          </div>
          
        </div>

        <Outlet context={[modalOpen, toggleModal]}/>
      </div>
    </section>
  );
};

export default SeeHowSection;
