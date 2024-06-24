import { Link } from "react-router-dom";
import Logo from "../assets/ui/Logo";
import PillButton from "../assets/ui/PillButton";
import { Rotate as Hamburger } from 'hamburger-react'
     
const Nav = () => {
  return (
    <div className="h-[100px] w-100% bg-black   flex items-center justify-center">

      <nav className="h-[100px] w-[87%]  flex font-openSans justify-between items-center ">
        <Logo />

          <div className=" text-white relative z-[999] hidden lg:flex py-2 px-4 backdrop-brightness-[.5] backdrop:blur-[0.5] rounded-md">
           
            <Link className=" relative z-20 text-[16px] mx-4  pr-4 py-2 border-r-[1.2px]  border-[#5b5b5b82]">Be a Supplier</Link>
            <Link className=" relative z-20 text-[16px] mr-4 pr-4  py-2 border-r-[1.2px]  border-[#5b5b5b82]">Categories</Link>
            <Link className=" relative z-20 text-[16px] mr-4 pr-4  py-2 border-r-[1.2px]  border-[#5b5b5b82]">About Us</Link>
            <Link className=" relative z-20 text-[16px] mr-4 py-2  ]">Support</Link>

            <div className=" absolute z-2 w-full h-full bg-gradient-to-b from-slate-900 via-slate-600 to-gray-400 left-0 top-0 opacity-[0.2] rounded-md"> 
            </div>
          </div>
          
           <div className=" hidden lg:flex">
          <PillButton text="Join Waitlist" px="px-6" />
          </div>

       <div className=" block lg:hidden">
        <Hamburger color="#fff"/>
       </div>
      </nav>
    </div>
  );
};

export default Nav;
