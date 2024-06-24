import ArrowLink from "../../../assets/ui/ArrowLink";
import VectorGreen2 from "../../../assets/ui/VectorGreen2";

const BuiltForYou = () => {
  return (
    <section className=" w-[100%] h-fit xs:h-[480px]  md:h-[520px]  rounded-[30px] flex flex-col-reverse xs:flex-row overflow-hidden transition-all duration-[0.3s] shadow-[-4px_4px_24px_0px_#00000024] ">
    <div className=" xs:w-[65%] md:w-[60%] h-fit xs:h-full py-[30px]   px-[30px]  flex flex-col justify-between relative overflow-hidden transition-all duration-[0.3s] ">
      <h1 className=" text-[28px] md:text-[35px] font-merchant leading-[1.2] relative z-10">
        Discover a Curated Marketplace
      </h1>

      <div className="wrapper">
        <p className="text-[14px] text-[#262626] mt-[10px] md:mt-[80px] mb-4 pr-4 md:pr-[50px] relative z-10 ">
          With Ginger, finding top-quality beauty and fashion products is
          effortless. Our platform features a carefully curated selection
          of items from verified sellers, ensuring you have access to only
          the best. Easily browse through various categories, compare
          products, and make informed decisions quickly.
        </p>
        <ArrowLink color="#FF4623" />
      </div>

      <VectorGreen2 color="#FF4623" />
    </div>

    <div className=" xs:w-[35%] md:w-[40%] h-[350px] xs:h-full bg-slide1 bg-cover bg-center"></div>
  </section>
  )
}

export default BuiltForYou
