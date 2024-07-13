import { useState } from "react";
import { Link } from "react-router-dom";
import { Rotate as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { routes } from "../route-links/routes";
import MobileNavSvg from "../assets/svgs/MobileNavSvg";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const vrt = document.querySelector("#body");

  open ? vrt.classList.add("noScroll") : vrt.classList.remove("noScroll");

  return (
    <div>
      <Hamburger toggled={open} toggle={setOpen} color="#fff" />

      <motion.div
        className="NavDropDown"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {open && (
          <div className="w-full h-[88vh] bg-white absolute left-0 top-[100px] z-10 flex flex-col  items-center overflow-hidden ">
            <div className=" w-[90%] h-fit mb-5  flex flex-col pt-[30px]">
              {routes.map((route, idx) => (
                <motion.span
                  initial={{ transform: "translateY(30px)", opacity: 0 }}
                  animate={{ transform: "translateY(3px)", opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    delay: 0.1 + idx / 10,
                  }}
                  key={route.id}
                  className="w-full mb-2 text-[16px] border-b-[0.5px] last:border-b-[0] border-[#262626] flex relative z-10"
                >
                  <Link
                    id={route.id}
                    className=" w-full py-5 text-[15px] text-[#0d0d10df] uppercase font-bold "
                  >
                    {route.title}
                  </Link>
                </motion.span>
              ))}
            </div>

            <MobileNavSvg color="#FF4623" />
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default HamburgerMenu;
