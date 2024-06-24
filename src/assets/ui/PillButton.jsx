import { Link } from "react-router-dom";

const PillButton = ({text, px, textSize}) => {
  return (
   <Link className={`h-fit  ${textSize? textSize:"text-[15px]"}  text-white ${px? px: 'px-5'} py-3 bg-ginger-red rounded-full`}>
    {text} 
   </Link>
  )
}

export default PillButton;
