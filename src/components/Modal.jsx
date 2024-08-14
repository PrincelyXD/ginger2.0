import { useState } from "react";
import EmptyCheckSvg from "../assets/svgs/EmptyCheckSvg";
import CheckedSvg from "../assets/svgs/CheckedSvg";
import PillButton from "../assets/ui/PillButton";

const Modal = ({ toggleModal }) => {
  const [isBuyer, setIsBuyer] = useState(true);

  function wand(e) {
    e.stopPropagation();
  }

  const toggleInput = () => {
    setIsBuyer((prevValue) => !prevValue);
  };

  return (
    <div
      onClick={toggleModal}
      className=" w-[100%] max-w-[inherit] h-full bg-[#000000b0] fixed z-[999] flex justify-center items-center"
    >
      <div
        onClick={wand}
        className="w-[95%] md:w-[950px] h-[95vh] md:h-[610px]  bg-white flex flex-col md:flex-row rounded-[25px] md:overflow-hidden relative"
      >
        <section className="  md:w-[50%] px-[30px] pb-[20px]  flex flex-col items-center ">
          <button
            onClick={toggleModal}
            className=" block  absolute z-10 right-4 top-4  hover:scale-[1.2] transition-all ease-linear "
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#F8F9FA" />
              <path
                d="M19.3752 10.6249L10.6252 19.3749M10.6252 10.6249L19.3752 19.3749"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <h2 className=" text-[35px] font-merchant mt-5">Join the Waitlist</h2>
          <div className="w-full h-[70px] mt-2 text-[14px] flex items-center">
            <span
              onClick={toggleInput}
              className={`  w-[195px] mr-2  py-3 pl-2 flex items-center rounded-full cursor-pointer   ${
                isBuyer ? "bg-[#FFF2EF]" : "bg-[#f7f7f7]"
              } `}
            >
              {" "}
              <span className=" mr-1">
                {" "}
                {isBuyer ? <CheckedSvg /> : <EmptyCheckSvg />}{" "}
              </span>{" "}
              I’m a Buyer
            </span>
            <span
              onClick={toggleInput}
              className={` w-[195px] ml-[auto] flex items-center  py-3 pl-2 rounded-full cursor-pointer  ${
                isBuyer ? "bg-[#F7F7F7]" : "bg-[#FFF2EF]"
              }`}
            >
              {" "}
              <span className=" mr-1">
                {" "}
                {isBuyer ? <EmptyCheckSvg /> : <CheckedSvg />}{" "}
              </span>{" "}
              I’m a Seller
            </span>
          </div>

          <p className=" px-5 text-[15px] mt-3 text-center font-extralight ">
            {isBuyer
              ? "Ginger allows you to buy a variety of quality products from a large network of vetted beauty and fashion merchants and manufacturers."
              : "Our platform allows you to showcase your beauty and fashion products to a network of verified buyers looking for quality items."}
          </p>

          <div className=" w-full h-fit mt-6 ">
            <form action="" className=" h-[370px]  flex flex-col ">
              <label className="flex text-[14px]  pt-[5px] pl-[10px] text-[#6E6E6E] mb-[15px] border-b-[1.5px] rounded-t-[10px] flex-col bg-[#f7f7f7]">
                Full Name:
                <input
                  type="text"
                  className="h-[25px] text-[16px] text-black pb-[5px] pt-[5px] bg-[#f7f7f7] mb-[5px]  outline-none m-[#f2f2f2] "
                />
              </label>

              <label className="flex text-[14px] pt-[5px] pl-[10px] text-[#6E6E6E] mb-[15px] border-b-[1.5px] rounded-t-[10px] flex-col bg-[#f7f7f7]">
                Email Address
                <input
                  type="text"
                  className="h-[25px] text-[16px] text-black pb-[5px] pt-[5px] bg-[#f7f7f7] mb-[5px]  outline-none m-[#f2f2f2] "
                />
              </label>

              <label className="flex text-[14px] pt-[5px] pl-[10px] text-[#6E6E6E] mb-[15px] border-b-[1.5px] rounded-t-[10px] flex-col bg-[#f7f7f7]">
                Phone number
                <input
                  type="text"
                  className="h-[25px] text-[16px] text-black pb-[5px] pt-[5px] bg-[#f7f7f7] mb-[5px]  outline-none m-[#f2f2f2] "
                />
              </label>

              <label className="flex text-[14px] pt-[5px] pl-[10px] text-[#6E6E6E] mb-[15px] border-b-[1.5px] rounded-t-[10px] flex-col bg-[#f7f7f7]">
                Company name
                <input
                  type="text"
                  className="h-[25px] text-[16px] text-black pb-[5px] pt-[5px] bg-[#f7f7f7] mb-[5px]  outline-none m-[#f2f2f2] "
                />
              </label>

              <span
                className=" m-auto w-fit inline-block md:mb-[40px]"
                onClick={(e) => e.preventDefault()}
              >
                <PillButton text={"Join The Waitlist"} />
              </span>
            </form>
          </div>
        </section>

        <div className=" hidden md:block w-[50%] bg-modal-img bg-center bg-cover relative">
          {/* <button onClick={toggleModal} className=" absolute right-4 top-4 hover:scale-[1.2] transition-all ease-linear ">
            <svg width="32" height="32" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F8F9FA"/>
<path d="M19.3752 10.6249L10.6252 19.3749M10.6252 10.6249L19.3752 19.3749" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

            </button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
