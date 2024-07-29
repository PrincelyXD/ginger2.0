import Footer from "../components/footer/Footer";
import Modal from "../components/Modal";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const frame = document.querySelector("#body");

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  modalOpen ? frame.classList.add("stopPageScroll") : frame.classList.remove("stopPageScroll");

  return (
    <div className="min-w-[344px]  max-w-[1600px] mx-auto relative">
      {modalOpen && <Modal toggleModal={toggleModal} />}
      <Nav toggleModal={toggleModal} />
      <Outlet context={[modalOpen, toggleModal]} />
      <Footer />
    </div>
  );
};

export default Layout;
