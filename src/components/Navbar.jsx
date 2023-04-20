import React, { useState } from "react";
<<<<<<< Updated upstream
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css";

function Navbar() {
  const [durum, setDurum] = useState(true);
  console.log(durum);

  window.onscroll = function () {
    scrollFunction();
  };

=======
import "../styles.css";

function Navbar() {
  const [test, setTest] = useState();

  const [durum, setDurum] = useState(true);
  console.log(durum);

  window.onscroll = function () {
    scrollFunction();
  };

>>>>>>> Stashed changes
  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
<<<<<<< Updated upstream
      document.querySelector(".navbarcon").style.backgroundColor = "#171717";
=======
      document.querySelector(".navbarcon").style.backgroundColor = "#000";
>>>>>>> Stashed changes
    } else {
      document.querySelector(".navbarcon").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      document.querySelector(".tl").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }

  return (
    <>
<<<<<<< Updated upstream
      <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full">
=======
      <div className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:bg-black lg:px-6 fixed w-full">
>>>>>>> Stashed changes
        <h1 className="text-4xl  font-bold ">Reayhs</h1>

        <nav
          className={` flex justify-center items-center gap-x-10 ${
            durum && "lg:hidden"
<<<<<<< Updated upstream
          } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <ul className=" flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 ">
            <li className="bla">
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#skills">Skills</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#projects">Projects</AnchorLink>
            </li>
          </ul>

          <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a href="https://twitter.com/reayhs" target="_blank">
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

            <a href="https://www.instagram.com/iburakz/" target="_blank">
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a
              href="https://github.com/Reayhs/react-tailwind-portfolio"
              target="_blank"
            >
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
=======
          } lg:fixed lg:top-0 -z-20  lg:flex-col lg:bg-black lg:w-full lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <ul className=" flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 ">
            <li className="bla">
              <a href="#home"></a>Home
            </li>
            <li className="bla">
              <a href="#skills"></a>Skills
            </li>
            <li className="bla">
              <a href="#projects"></a>Projects
            </li>
          </ul>
          <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            <i className="fa-brands fa-instagram  border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            <i className="fa-brands fa-github  border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
>>>>>>> Stashed changes
          </div>
          <div className="btn">
            <button className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold">
              Let's Connect
            </button>
          </div>
        </nav>
        <i
          onClick={(e) => setDurum(!durum)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Navbar;
