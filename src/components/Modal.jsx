
const Modal = ({toggleModal}) => {
 
  function wand(e){
    e.stopPropagation()
  }

  return (
    <div onClick={toggleModal}  className=" w-[100%] max-w-[inherit] h-full bg-[#000000b0] fixed z-[999] flex justify-center items-center">
     <div onClick={wand}  className=" w-[750px] h-[450px] bg-white flex rounded-[25px] overflow-hidden">
          <div className="w-[50%]"></div>
          <div className=" w-[50%] bg-modal-img bg-center bg-cover relative">
            <button onClick={toggleModal} className=" absolute right-4 top-4 hover:scale-[0.4]">
            <svg width="32" height="32" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="15" r="15" fill="#F8F9FA"/>
<path d="M19.3752 10.6249L10.6252 19.3749M10.6252 10.6249L19.3752 19.3749" stroke="#141B34" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
          </div>
     </div>
    </div>
  )
}

export default Modal
