import DescSection from "./DescSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import SeeHowSection from "./see-how-routes/SeeHowSection";

const Home = () => {
  return (
    <div className=" min-w-[344px]">
      <HeroSection />
      <DescSection/>
      <SeeHowSection/>
      <FaqSection/>
    </div>
  );
};

export default Home;
