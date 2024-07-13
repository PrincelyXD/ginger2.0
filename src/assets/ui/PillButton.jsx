const PillButton = ({ text, px, textSize, toggleModal }) => {
  return (
    <button
      onClick={toggleModal}
      className={`h-fit  ${textSize ? textSize : "text-[15px]"}  text-white ${
        px ? px : "px-5"
      } py-3 bg-ginger-red rounded-full`}
    >
      {text}
    </button>
  );
};

export default PillButton;
