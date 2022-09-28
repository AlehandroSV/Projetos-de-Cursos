// Import CSS
import "./NavBar.css";

import { FaHome, FaBars, FaHandsHelping, FaBook } from "react-icons/fa";

const Navbar = () => {
  function responsiveButton() {
    document.getElementById("nav").classList.toggle("-right-full");
    document.getElementById("nav").classList.toggle("right-0");
  }

  return (
    <>
      <header className="bg-[#2d2d2d] dark:bg-white text-white dark:text-black">
        <div className="container items-center flex justify-between md:mx-2">
          <h2 className="font-bold text-xl mx-4">Portifólio de Projetos</h2>

          <button className="md:hidden mx-3" onClick={responsiveButton}>
            <FaBars size={24} />
          </button>

          <nav
            id="nav"
            className="fixed top-6 bottom-0 w-36 -right-full md:w-auto md:static transition-all 
            bg-[#2d2d2d] dark:bg-white text-white dark:text-black my-1 md:my-0"
          >
            <ul className="md:flex items-center gap-8 my-3 mx-20">
              <li>
                <a
                  className="md:block flex justify-center md:my-0 md:py-0 py-2"
                  href="#"
                >
                  <div className="tooltip relative">
                    <FaHome size={24} />
                    <span className="tooltiptext md:block hidden">Home</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="md:block flex justify-center md:my-0 md:py-0 py-2 my-2"
                  href="#"
                >
                  <div className="tooltip relative">
                    <FaHandsHelping size={24} />
                    <span className="tooltiptext md:block hidden">Contato</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="md:block flex justify-center md:my-0 md:py-0 py-2 my-2"
                  href="#"
                >
                  <div className="tooltip relative">
                    <FaBook size={24} />
                    <span className="tooltiptext md:block hidden">
                      Intituições
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
