import { NavLink } from "react-router-dom";
import BuiltForYou from "./BuiltForYou";
import { Outlet } from "react-router-dom";

const SeeHowSection = () => {
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
      <div className="w-[100%] max-w-[1100px] h-fit  mb-[50px]  sm:h-[200px] flex flex-col sm:flex-row justify-between sm:items-end">
        <div className="w-[100%]  max-w-[400px] mb-[20px] sm:mb-[0]">
          <h1 className=" text-[35px] md:text-[40px] font-merchant leading-[1.2]">
            See how Ginger helps you source quality products faster
          </h1>
        </div>

        <div className=" w-[100%] max-w-[400px] ml-0 sm:ml-[20px] ">
          <p className=" text-[15px] md:text-[16px]  pr-9 pb-4">
            Join our waitlist now to see why over 60,000 offline buyers and
            sellers trust Ginger for their businesses.
          </p>
        </div>
      </div>

      <div className="w-[100%] max-w-[1100px] sm:h-fit  flex flex-col  sm:flex-row ">

        <div className="w-[200px] min-w-[160px] h-[150px] justify-evenly pl-[8px]  flex  flex-col border-l-[0.5px]  border-[#262626] ">
          <NavLink
            to="./"
            end
            style={({ isActive }) => (isActive ? activeStyle1 : null)}
            className=" w-fit  px-6 py-3  rounded-full text-[#262626] text-[13px] "
          >
            Built for You
          </NavLink>

          <NavLink
            to="./accesibility"
            style={({ isActive }) => (isActive ? activeStyle2 : null)}
            className="w-fit px-6 py-3  rounded-full text-[#262626] text-[13px] "
          >
            Made Accessible
          </NavLink>
          <NavLink
            to="./security"
            style={({ isActive }) => (isActive ? activeStyle3 : null)}
            className=" w-fit px-6 py-3  rounded-full text-[#262626] text-[13px] "
          >
            Safe & Secure
          </NavLink>
        </div>

        <Outlet />
      </div>
    </section>
  );
};

export default SeeHowSection;
