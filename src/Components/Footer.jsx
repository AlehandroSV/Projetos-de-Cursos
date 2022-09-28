// Import Icons
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer
        className="mt-10 bg-[#2d2d2d] dark:bg-white text-white dark:text-black"
        id="footer"
      >
        <h3 className="text-center font-semibold text-xl">Redes Sociais</h3>
        <div className="flex justify-center">
          <div className="flex gap-3">
            <a
              className=""
              href="https://www.linkedin.com/in/alehandro-santos-vidal-255190234/"
              target="_blank"
            >
              <FaLinkedin size={30} className="block mx-auto" />
              <p className="text-center">LinkedIn</p>
            </a>
            <a
              className=""
              href="https://github.com/AlehandroSV"
              target="_blank"
            >
              <FaGithub size={30} className="block mx-auto" />
              <p className="redes">GitHub</p>
            </a>
            <a className="" href="https://wa.me/+5554999997564" target="_blank">
              <FaWhatsapp size={30} className="block mx-auto" />
              <p className="redes">WhatsApp</p>
            </a>
            <a
              className=""
              href="mailto:alehandrosantos99@gmail.com"
              target="_blank"
            >
              <FaEnvelope size={30} className="block mx-auto" />
              <p className="redes">E-mail</p>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
