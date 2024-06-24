import PillButton from '../../assets/ui/PillButton'
import PlayBtn from "../../assets/ui/PlayBtn";

const HeroSection = () => {
  return (
    <div className="w-full h-[700px] sm:h-[755px] flex items-center justify-center hero-cont mt-[-100px]  bg-hero-background  bg-center bg-cover">
    <div className=" w-full sm:w-[600px] h-fit mt-[60px] xs:mt-[40px]  text-white  text-center flex flex-col items-center justify-center ">
      <PlayBtn />

      <span className=" text-[11px] xs:text-[13px] sm:text-[15px] mt-5 font-semibold text-ginger-red tracking-wider uppercase  ">
        Explore. Buy Wholesale. Sell
      </span>

      <h1 className=" text-[40px] xs:text-[50px] sm:text-[59px] mt-3  px-2 xs:px-3  font-merchant leading-[1.2] ">
        Africa's one-stop beauty & fashion sourcing platform.
      </h1>

      <p className=" w-[300px] xs:w-[370px] text-[12.5px] xs:text-[16px]  mt-4 mb-8 leading-[1.4] ">
        Your one-stop B2B commerce solution for beauty and fashion trade
        across Africa, connecting buyers to sellers and facilitating seamless
        transactions.
      </p>
      
      <PillButton text='Join Waitlist' px='px-8'/>
    </div>
  </div>
  )
}

export default HeroSection
