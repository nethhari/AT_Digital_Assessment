import "react";
import logo from '../../src/assets/Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-[#4F46E5] text-white px-20 py-[26px] w-[1440px] flex justify-between items-center">
      <div className="text-2xl font-semibold flex items-center">
        <img src={logo} alt="AT Digital" className="h-6 mr-2" />
      </div>

      <ul className="flex space-x-10 text-base font-medium">
        <li>
          <a href="#services" className="hover:underline">
            SERVICES
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            ABOUT US
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            CONTACT US
          </a>
        </li>
        <li>
          <a href="#careers" className="hover:underline">
            CAREERS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
