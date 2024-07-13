import DescSection from "./DescSection";
import FaqSection from "./FaqSection";
import HeroSection from "./HeroSection";
import SeeHowSection from "./see-how-routes/SeeHowSection";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [modalOpen, toggleModal] = useOutletContext();

  return (
    <div>
      <HeroSection toggleModal={toggleModal} />
      <DescSection toggleModal={toggleModal} />
      <SeeHowSection toggleModal={toggleModal} />
      <FaqSection toggleModal={toggleModal} />
    </div>
  );
};

export default Home;
