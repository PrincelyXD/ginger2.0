import PillButton from '../../assets/ui/PillButton'
import PlayBtn from "../../assets/ui/PlayBtn";

const HeroSection = ({toggleModal}) => {
  return (
    <div className="w-full h-[700px] sm:h-[755px] flex items-center justify-center hero-cont mt-[-100px]  bg-hero-background  bg-center bg-cover relative ">
    <div className=" w-full sm:w-[600px] h-fit mt-[60px] xs:mt-[40px]  text-white  text-center flex flex-col items-center justify-center ">
      <div className='absolute w-full h-full bg-gradient-to-b from-[#000] to-[#00000080]  top-0 z-[2]'> </div>
      {/* <PlayBtn /> */}

      <span className=" relative z-[5] text-[11px] xs:text-[13px] sm:text-[15px] mt-5 font-bold text-ginger-red tracking-wider uppercase  ">
      DISCOVER. STOCK UP. REPEAT
      </span>

      <h1 className=" relative z-[5] text-[40px] xs:text-[50px] sm:text-[59px] mt-3  px-2 xs:px-3  font-merchant leading-[1.2] ">
      Africa's one-stop beauty sourcing platform.
      </h1>

      <p className=" relative z-[5] w-[300px] xs:w-[370px] text-[12.5px] xs:text-[16px]  mt-4 mb-8 leading-[1.4] ">
        Your one-stop B2B commerce solution for beauty and fashion trade
        across Africa, connecting buyers to sellers and facilitating seamless
        transactions.
      </p>
      
     <span className='relative z-[5]'> <PillButton toggleModal={toggleModal} text='Join Waitlist' px='px-8'/></span>
    </div>
  </div>
  )
}

export default HeroSection
