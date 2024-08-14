import { useEffect, useState } from "react";
import ArrowLink from "../../assets/ui/ArrowLink";
import VectorGreen from "../../assets/ui/VectorGreen";
import LogoCarousel from "../../components/LogoCarousel";

const DescSection = ({ toggleModal }) => {
  const [isExpanded, setIsExpanded] = useState("first");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 804);

  const toggleDivs = (value) => {
    setIsExpanded(value);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 804);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" w-full h-fit py-[50px] pb-[80px]  bg-[#FFF2EF] flex flex-col items-center">
      <div className=" xs:w-[420px] h-[200px] sm:h-[300px] px-2 text-center flex flex-col justify-center">
        <span className=" text-[11px] xs:text-[13px] sm:text-[15px] mt-5 font-semibold text-ginger-red tracking-wider uppercase  ">
          built for you
        </span>

        <h1 className="  xs:w-[400px] xxs:px-[12px] xs:px-0  text-[35px] xs:text-[40px] mt-2   font-merchant leading-[1.1] ">
          The fastest and safest way to source
        </h1>
        <p className=" text-[16px] text-[#262626] mt-2 px-6 leading-[1.5]">
          We do the hard work of finding and vetting manufacturers so you don’t
          have to.
        </p>
      </div>

      <section className="  w-[100%] md:w-[90%] max-w-[1050px] px-5 md:px-0  h-fit md:h-[550px] mx-[5px] mt-[40px]  sm:mt-0 flex flex-col md:flex-row rounded-[30px] justify-center items-center  overflow-hidden ">
        <section
          className={` sm:w-[500px] ${
            isDesktop && (isExpanded === "first" ? "md:w-[75%]" : "md:w-[25%]")
          }   max-w-[500px] md:max-w-[1000px]  h-fit md:h-[550px] rounded-[30px] bg-white flex flex-col-reverse md:flex-row overflow-hidden relative  transition-all duration-[900ms] ease-in-out`}
        >
          <div
            onClick={()=>toggleDivs("first")}
            className={` text-[15px] pisa font-semibold hidden md:block py-4 rounded-full mb-3 absolute z-10 top-[5.5%] left-[5%] cursor-pointer  ${
              isExpanded === "first" ? " text-[#699444] px-8  " : "text-white px-4"
            } `}
          >
            For Buyers
          </div>
          {isDesktop ? (
            isExpanded === "first" && (
              <div className=" desc md:w-[65%]  lg:w-[52%] h-[50%] md:h-full  px-8   pt-5 pb-5 md:pb-8 md:pt-[100px] relative overflow-hidden">
                <h1 className=" text-[25px] md:text-[35px] font-merchant leading-[1.2] relative z-10">
                  Your gateway to sourcing quality wholesale beauty and fashion
                  products
                </h1>

                <p className="text-[14px] text-[#262626] mt-[10px] md:mt-[65px] mb-4 pr-6 sm:pr-5 relative z-10 ">
                  For buyers, Ginger provides a curated marketplace where you
                  can find the best beauty and fashion products from trusted
                  Supppliers around the world.
                </p>
                <ArrowLink toggleModal={toggleModal} color="#699444" />

                <VectorGreen color="#699444" />
              </div>
            )
          ) : (
            <div className=" desc md:w-[65%] lg:w-[52%] h-[50%] md:h-full  px-8  pt-4 pb-5 md:py-8 relative overflow-hidden">
              <div className="pisa  w-fit text-[12px] md:text-[15px] text-[#699444] font-semibold px-4 md:px-8 py-3 md:py-4 rounded-full mb-3 relative z-10">
                For Buyers
              </div>

              <h1 className=" text-[25px] md:text-[35px] font-merchant leading-[1.2] relative z-10">
                Your gateway to sourcing quality wholesale beauty and fashion
                products
              </h1>

              <p className="text-[14px] text-[#262626] mt-[10px] md:mt-[65px] mb-4 pr-6 sm:pr-5 relative z-10 ">
                For buyers, Ginger provides a curated marketplace where you can
                find the best beauty and fashion products from trusted
                Supppliers around the world.
              </p>
              <ArrowLink toggleModal={toggleModal} color="#699444" />

              <VectorGreen color="#699444" />
            </div>
          )}

          <div
           onClick={()=>toggleDivs("first")}
            className={`w-full ${
              isExpanded === "first" && "md:w-[35%] lg:w-[50%]"
            } h-[300px] sm:h-[250px] md:h-full bg-desc-image1 bg-center bg-cover cursor-pointer`}
          ></div>
        </section>

        <section
         onClick={()=>toggleDivs("second")}
          className={`w-full sm:w-[500px]  ${
            isDesktop && (isExpanded === "second" ? "md:w-[75%]" : "md:w-[25%]")
          }   max-w-[500px] md:max-w-[1000px] h-fit md:h-[550px]   md:ml-[20px] mt-[40px] md:mt-0 rounded-[30px]  md:rounded-l-[30px] relative  flex flex-col md:flex-row-reverse overflow-hidden transition-all duration-[900ms] ease-in-out`}
        >
          <div
            className={` hidden md:block w-fit h-fit text-[12px]  md:text-[15px]  font-semibold   rounded-full  absolute z-10 top-[5.5%] left-[5%] cursor-pointer ${
              isExpanded === "first"
                ? " text-white bg-[#00000096] px-4 py-4"
                : "text-[#113264] pisa px-7 py-4"
            } `}
          >
            For Suppliers
          </div>

          <div
           onClick={()=>toggleDivs("second")}
            className={`  ${
              isDesktop
                ? isExpanded === "first"
                  ? "w-full "
                  : " w-[35%] lg:w-[45%]"
                : "w-ful"
            } h-[300px] sm:h-[250px] md:h-full bg-desc-image2 bg-center bg-cover cursor-pointer`}
          >
            {" "}
          </div>

          {isDesktop ? (
            <div
              className={` desc ${
                isExpanded === "first" ? "hidden" : "w-[65%] lg:w-[55%]"
              }  h-fit md:h-full px-8  pt-4 pb-5 md:pb-8 md:pt-[100px] relative overflow-hidden bg-white`}
            >
              <h1
                className={`text-[25px]  md:text-[35px] font-merchant leading-[1.2] relative z-10`}
              >
                Reach millions of business customers across Africa and grow your
                brand
              </h1>

              <p className="text-[14px] text-[#262626]  mt-[30px] lg:mt-[80px] mb-4 pr-6 sm:pr-5 relative z-10 ">
                For suppliers, whether you're a beauty manufacturer looking to
                distribute your products or a wholesaler expanding your sales
                channels, Ginger is your solution for expansion across the
                continent.
              </p>
              <ArrowLink toggleModal={toggleModal} color="#113264" />
              <VectorGreen color="#113264" />
            </div>
          ) : (
            <div
              className={` desc w-full h-fit md:h-full px-8  pt-4 pb-5 md:pb-8 md:pt-[100px] relative overflow-hidden bg-white`}
            >
              <div className="pisa block md:hidden w-fit h-fit text-[12px] text-[#113264] font-semibold px-4 py-3 rounded-full mb-5 relative z-10">
                For Supppliers
              </div>

              <h1
                className={`text-[25px]  md:text-[35px] font-merchant leading-[1.2] relative z-10`}
              >
                Reach millions of business customers across Africa and grow your
                brand
              </h1>

              <p className="text-[14px] text-[#262626] mt-[10px] md:mt-[80px] mb-4 pr-6 sm:pr-5 relative z-10 ">
                For suppliers, whether you're a beauty manufacturer looking to
                distribute your products or a wholesaler expanding your sales
                channels, Ginger is your solution for expansion across the
                continent.
              </p>
              <ArrowLink toggleModal={toggleModal} color="#113264" />
              <VectorGreen color="#113264" />
            </div>
          )}
        </section>
      </section>

      <LogoCarousel />
    </div>
  );
};

export default DescSection;
