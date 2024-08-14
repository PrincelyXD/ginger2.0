import Accordion from "../../components/Accordion";
import PillButton from "../../assets/ui/PillButton";
import VectorGreen2 from "../../assets/ui/VectorGreen2"

const FaqSection = ({toggleModal}) => {
  const productsOnGinger = [
    "Hair Care: Shampoos, conditioners, treatments, and styling products.",
    "Nail Care: Polishes, tools, and accessories.",
    "Lashes & Brows: Extensions, serums, and grooming kits.",
   " Electricals: Hairdryers, straighteners, curlers, and other beauty devices.",
    "Spa Supplies: Massage oils, skincare products, and spa equipment.",
    "Skincare: Cleansers, moisturizers, serums, and masks.",
    "Makeup: Foundations, lipsticks, eye shadows, and more.",
    "Perfume & Fragrance: A wide variety of perfumes and colognes.",
   " Barbering: Clippers, trimmers, and grooming products.",
   " Health & Wellness: Supplements, fitness products, and wellness tools."
  ]

  const customerSupport =[
    "Email: Reach out to us at support@gingerme.io for any inquiries or assistance.",
    "Live Chat: Use the live chat feature on our website for real-time support from our customer service representatives.",
    "Contact Form: Fill out the contact form available on our Contact Us page, and we will get back to you as soon as possible.",
  ]


  const verification = [
    "Register: Create an account on Ginger by clicking on the Sign Up button on our homepage.",
"Complete Your Profile: Fill out your supplier profile with accurate and detailed information about your business, including your company name, contact details, and product offerings",
"Submit Required Documents: Upload the necessary documents to verify your business, such as business registration certificates, tax identification numbers, and any other relevant certifications.",
"Review Process: Our team will review your application and submitted documents. This process may take a few days.",
"Verification Confirmation: Once your application is approved, you will receive a confirmation email, and your account will be marked as a verified supplier and will be live in the Ginger marketplace.",
  ]

  const cancelOrder =[
"    Hover over your Account icon and select Transaction History",
"Find the order you’d like to cancel and select Cancel Order"
  ]
  return (
    <section className=" w-full h-fit bg-[#F9FAFB] md:py-[60px] pb-[50px] mpb-[100px] px-5 flex flex-col items-center justify-center">

      <div className=" w-[100%]  max-w-[1100px] h-fit  flex flex-col mb-[50px]  md:flex-row md:justify-between">

        <div className=" w-[320px] lg:w-[350px] py-5 pt-[40px] md:pt-[20px] mb-5 md:h-[300px] ">
            <h1 className=" text-[30px] lg:text-[36px] font-merchant leading-[1.2]">
            Frequently asked questions
            </h1>

            <p className=" text-[14px] text-[#262626] pt-0 ">
            Let’s help you get all the answers you need. If you’d prefer to speak with us directly, do send an email to <a className=" font-semibold italic" href="mailto:support@gingerme.io">support@gingerme.io</a>.
            </p>
        </div>


        <div className=" w-full sm:w-[580px] h-fit sm:p-4 bg-[#ffff] self-center  md:self-start rounded-xl ">
            <Accordion question='How do I sign up on Ginger?' answer="Thank you so much for your interest in joining Ginger! To sign up as a buyer, please create an account here. It is important that when you sign-up you provide accurate information. The more information you provide during sign-up the less likely there are to be delays with receiving orders. Thank you for being thorough!"/>
            <Accordion question='What type of products can I find on Ginger?' answer="On Ginger, you can find a wide range of high-quality products tailored to the beauty and personal care industry. Our marketplace offers:" listItems={productsOnGinger} answer2="Whether you are a beauty professional, retail business, pharmacy, salon owner - Ginger has everything you need to support and grow your business with ease."/>
            <Accordion question='Who is considered a supplier on Ginger?' answer="A supplier on Ginger is any verified manufacturer, wholesaler, or brand that provides beauty, personal care, jewelry, and fashion products to businesses. Suppliers are thoroughly vetted to ensure they meet our quality standards and can offer reliable and high-quality inventory to our buyers."/>
            <Accordion question='How can I contact customer support?' answer="You can contact Ginger's customer support in several ways:" listItems={customerSupport} answer2="We are here to help and ensure you have a seamless experience on Ginger."/>
            <Accordion question='Are transactions on Ginger secure?' answer="Yes, transactions on Ginger are secure. We prioritize the safety and security of our users' information and financial transactions. Our platform utilizes advanced encryption technologies and follows industry-standard security protocols to protect your data. We use Paystack, a trusted and secure payment gateway, to process all payments, ensuring that your transactions are handled with the highest level of security. Your peace of mind is our top priority, so you can shop with confidence on Ginger. If you have any concerns or questions about security, please contact our customer support team."/>
            
            <Accordion question='Can I track my order on Ginger?' answer="Yes, you can track your order on Ginger. Once your order is processed and shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status of your shipment through our website. Simply go to the Track Order section, enter your tracking number, and you will see real-time updates on the location and estimated delivery time of your order. If you have any issues or need further assistance, please contact our customer support team."/>
             <Accordion question='How do I become a verified supplier on Ginger?' answer="To become a verified supplier on Ginger, follow these steps:"listItems={verification}answer2="If you have any questions or need assistance during the verification process, please contact our customer support team."/>
            <Accordion question="How can I cancel an order?" answer="You can cancel an order on Ginger as long as the supplier hasn’t started processing it yet. To cancel an order:" listItems={cancelOrder} answer2="If the supplier has started processing your order, click Request Cancellation. The supplier will then be able to accept or decline your request. You can’t cancel an order once it’s been shipped."/>
          <Accordion question="How do I contact a supplier on Ginger?" answer="The best way to get in touch with a supplier on Ginger is through our chat messaging platform. Chat is available on all Ginger platforms, including on our desktop website and our mobile app. We encourage you to contact the supplier directly for specific questions about their products or about the status of an order. All the brands on Ginger produce and ship orders to you directly, so they’re the best point of contact to get those questions answered"/>
        </div>
      </div>


      <div className=" w-[100%]  max-w-[1100px] h-fit sm:h-[450px] overflow-hidden rounded-[10px] sm:rounded-[30px] flex">
            <div className="w-full sm:w-[42%] h-full  bg-[#101010] flex flex-col sm:items-center justify-center relative overflow-hidden">

              <div className="text-white h-fit w-[100%] max-w-[320px] sm:max-w-[350px] py-7 pl-5 sm:pr-0 relative z-30 ">
                <h2 className=" text-[27px] sm:text-[30px] lg:text-[32px] font-merchant mb-4 pr-4 leading-[1.2]">
              Connect with verified buyers or sellers on the platform
              </h2>

              <p className=" text-[14px] sm:text-[14px]  mb-[30px]">
              Whether you're a seller showcasing products or a buyer seeking quality items, our curation-driven process gets you started instantly.
              </p>
              <PillButton toggleModal={toggleModal} text="Join Waitlist" px="px-6"  textSize='text-[12px]'/>
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
