import ArrowLink from "../../assets/ui/ArrowLink";
import VectorGreen from "../../assets/ui/VectorGreen";
import LogoCarousel from "../../components/LogoCarousel";

const DescSection = () => {
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

      <section className=" w-[100%] md:w-[90%] max-w-[1050px] px-[20px]  h-fit md:h-[550px] mx-[5px] mt-[40px]  sm:mt-0 flex flex-col md:flex-row rounded-[30px] justify-center items-center  overflow-hidden ">
        <section
          className={` sm:w-[500px] md:w-[75%]  max-w-[500px] md:max-w-[1000px]  h-fit md:h-[550px] rounded-[30px] bg-white flex flex-col-reverse md:flex-row overflow-hidden`}
        >
          <div className=" desc md:w-[65%]  lg:w-[52%] h-[50%] md:h-full  px-8  pt-4 pb-5 md:py-8 relative overflow-hidden">
            <div className="pisa  w-fit text-[12px] md:text-[15px] text-[#699444] font-semibold px-4 md:px-8 py-3 md:py-4 rounded-full mb-3 relative z-10">
              For Buyers
            </div>

            <h1 className=" text-[25px] md:text-[35px] font-merchant leading-[1.2] relative z-10">
              Your gateway to sourcing quality wholesale beauty and fashion
              products
            </h1>

            <p className="text-[14px] text-[#262626] mt-[10px] md:mt-[65px] mb-4 pr-6 sm:pr-5 relative z-10 ">
              For buyers, Ginger provides a curated marketplace where you can
              find the best beauty and fashion products from trusted wholesalers
              around the world.
            </p>
            <ArrowLink color='#699444' />

            <VectorGreen color='#699444' />
          </div>

          <div className="w-full md:w-[35%] lg:w-[50%] h-[300px] sm:h-[250px] md:h-full bg-desc-image1 bg-center bg-cover "></div>
        </section>

        <section className="  w-full sm:w-[500px] md:w-[25%] max-w-[500px] md:max-w-[1000px] h-fit md:h-[550px]   md:ml-[20px] mt-[40px] md:mt-0 rounded-[30px]  md:rounded-l-[30px]  flex flex-col md:flex-row overflow-hidden ">
          <div className="w-full h-[300px] sm:h-[250px] md:h-full bg-desc-image2 bg-center bg-cover ">
            <div className="pisa hidden md:block w-fit h-fit text-[12px]  md:text-[15px] text-white font-semibold px-4 py-4 mt-8 ml-5  rounded-full mb-3 relative z-10">
              For Wholesalers
            </div>
          </div>

          <div className=" desc h-fit  px-8  pt-4 pb-5 md:py-8 relative overflow-hidden bg-white  md:hidden ">

            <div className="pisa block md:hidden w-fit h-fit text-[12px] text-[#113264] font-semibold px-4 py-3 rounded-full mb-5 relative z-10">
              For Wholesalers
            </div>

            <h1 className=" text-[25px] md:text-[35px] font-merchant leading-[1.2] relative z-10">
              Your gateway to sourcing quality wholesale beauty and fashion
              products
            </h1>

            <p className="text-[14px] text-[#262626] mt-[10px] md:mt-[65px] mb-4 pr-6 sm:pr-5 relative z-10 ">
              Our platform allows you to showcase your beauty and fashion
              products to a network of verified buyers looking for quality
              items.
            </p>
            <ArrowLink color='#113264' />
            <VectorGreen color='#113264' />
          </div>


        </section>
      </section>

      
        <LogoCarousel />
   
      
    </div>
  );
};

export default DescSection;
