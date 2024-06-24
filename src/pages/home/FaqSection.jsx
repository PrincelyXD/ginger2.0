import Accordion from "../../components/Accordion";
import PillButton from "../../assets/ui/PillButton";
import VectorGreen2 from "../../assets/ui/VectorGreen2"

const FaqSection = () => {
  return (
    <section className=" w-full h-fit bg-[#F9FAFB] py-[60px] md:pb-[100px] px-5 flex flex-col items-center justify-center">

      <div className=" w-[100%]  max-w-[1100px] h-fit  flex flex-col mb-[50px]  md:flex-row md:justify-between">

        <div className=" w-[320px] lg:w-[350px] py-5 mb-5 md:h-[300px] ">
            <h1 className=" text-[30px] lg:text-[36px] font-merchant leading-[1.2]">
            Frequently asked questions
            </h1>

            <p className=" text-[14px] text-[#262626] pt-0 ">
            Let’s help you get all the answers you need. If you’d prefer to speak with us directly, do send an email to ejiro@gingerme.io.
            </p>
        </div>

        <div className=" w-full sm:w-[580px] h-fit sm:p-4 bg-[#ffff] self-center  md:self-start rounded-xl ">
            <Accordion question='How do I register on Ginger?' answer="You will get an email on how to setup your account when we launch. For now, you can simply join our waitlist and stay in the loop of things until then. It's quick and easy!"/>
            <Accordion question='What type of products can I find on Ginger?' answer="You will get an email on how to setup your account when we launch. For now, you can simply join our waitlist and stay in the loop of things until then. It's quick and easy!"/>
            <Accordion question='How can I contact customer support?' answer="You will get an email on how to setup your account when we launch. For now, you can simply join our waitlist and stay in the loop of things until then. It's quick and easy!"/>
            <Accordion question='Are transactions on Ginger secure?' answer="You will get an email on how to setup your account when we launch. For now, you can simply join our waitlist and stay in the loop of things until then. It's quick and easy!"/>
            <Accordion question='Can I track my orders on Ginger?' answer="You will get an email on how to setup your account when we launch. For now, you can simply join our waitlist and stay in the loop of things until then. It's quick and easy!"/>
            <Accordion question='How do I become a verified supplier on Ginger?' answer="You will get an email on how to setup your account when we launch. For now, you can simply join our waitlist and stay in the loop of things until then. It's quick and easy!"/>
            
        </div>
      </div>


      <div className=" w-[100%]  max-w-[1100px] h-fit sm:h-[450px] overflow-hidden rounded-[10px] sm:rounded-[30px] flex">
            <div className="w-full sm:w-[42%] h-full  bg-[#101010] flex flex-col sm:items-center justify-center relative overflow-hidden">

              <div className="text-white h-fit w-[100%] max-w-[320px] sm:max-w-[350px] py-7 pl-5 sm:pr-0 relative z-30 ">
                <h2 className=" text-[24px] sm:text-[30px] lg:text-[32px] font-merchant mb-4 pr-4 leading-[1.2]">
              Connect with verified buyers or sellers on the platform
              </h2>

              <p className=" text-[12px] sm:text-[14px]  mb-[30px]">
              Whether you're a seller showcasing products or a buyer seeking quality items, our curation-driven process gets you started instantly.
              </p>
              <PillButton text="Join Waitlist" px="px-6"  textSize='text-[12px]'/>
              </div>
              <VectorGreen2 color="red"/>
            </div>

            <div className=" w-[58%] hidden sm:block h-full bg-faq-img bg-cover bg-center">
            </div>

      </div>
    </section>
  );
};

export default FaqSection;
