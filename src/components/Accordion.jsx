import { useEffect, useState } from "react";

const Accordion = ({ question, answer, listItems, answer2}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`w-full py-3 sm:p-4   border-b-[0.5px] border-[#D2D6DB] ${
        isOpen ? "pb-7" : "pb-4"
      }   rounded-sm cursor-pointer `}
    >
      <button className=" w-full h-full flex justify-between items-center ">
        
        <h1 className=" w-full text-[16px] sm:text-[18px] text-[#0B111B] lg:text-[20px] font-merchant flex">
          {question}
        </h1> 
       

        {isOpen ? (
          <span className=" h-[38px] w-[38px] text-[20px]  bg-[#0B111B] rounded-[50%] flex justify-center items-center">
           
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16663 10H15.8333"
                stroke="#FCFCFD"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        ) : (
          <span className=" h-[38px] w-[38px]  bg-[#E5E7EB] rounded-[50%] flex justify-center items-center">
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#0B111B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </button>
      <div
        className={` text-[#262626] grid overflow-hidden transition-all duration-[400ms] ease-in-out   ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        } `}
      >
        <div
          className={`overflow-hidden text-[13px]   pr-[50px]  sm:pr-[140px] transition-all duration-[600ms] ease-in-out ${
            isOpen ? " pt-[10px]" : " pt-0"
          }`}
        >
          
          {answer}
         {listItems && listItems.map((item, id)=> <ul className=" list-disc pl-6 my-2" key={id}><li>{item}</li></ul>)}
       {answer2}
            
        </div>
      </div>
    </div>
  );
};

export default Accordion;
