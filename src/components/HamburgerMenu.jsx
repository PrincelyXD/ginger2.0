import { useState } from "react";
import { Link } from "react-router-dom";
import { Rotate as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" ">
      <Hamburger toggled={open} toggle={setOpen} color="#fff" />

      {/* <motion.div
        className="NavDropDown"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {open && (
          <div className="w-full h-[90vh] bg-white absolute left-0 top-100 z-10 flex justify-center ">
            <div className=" w-[90%] h-full bg-green-950 flex flex-col pt-[50px]">
              <Link className=" w-full py-6 mb-2 border-[#262626] bg-purple-400">Be a Suppllier</Link>
              <Link className=" w-full py-6 mb-2 border-[#262626] bg-purple-400">Categories</Link>
              <Link className=" w-full py-6 mb-2 border-[#262626] bg-purple-400">About Us</Link>
              <Link className=" w-full py-6 mb-2 border-[#262626] bg-purple-400">Support</Link>
            </div>


          </div>
        )}
      </motion.div> */}
    </div>
  );
}

export default HamburgerMenu;
