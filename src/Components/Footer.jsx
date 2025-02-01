import 'react';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#4F46E5] w-[1440px] h-[266px] p-[40px_80px_20px_80px] flex justify-between items-start">
      <div className="text-white w-1/2 pr-[80px]">
        <img src={logo} alt="Logo" className="mb-4" />
        <p>
          Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
        </p>
      </div>

      <div className="text-white w-1/2 flex justify-between pl-[80px]">
        <div>
          <h2 className="font-bold">Our Technologies</h2>
          <ul className="mt-4">
            <li><a href="#" className="hover:underline">ReactJS</a></li>
            <li><a href="#" className="hover:underline">Gatsby</a></li>
            <li><a href="#" className="hover:underline">NextJS</a></li>
            <li><a href="#" className="hover:underline">NodeJS</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Our Services</h2>
          <ul className="mt-4">
            <li><a href="#" className="hover:underline">Social Media Marketing</a></li>
            <li><a href="#" className="hover:underline">Web & Mobile App Development</a></li>
            <li><a href="#" className="hover:underline">Data & Analytics</a></li>
            <li><a href="#" className="hover:underline">Google Marketing solutions</a></li>
            <li><a href="#" className="hover:underline">Search Engine Optimization</a></li>
          </ul>
        </div>
      </div>

      <div className="absolute bottom-5 text-white text-sm">
        <p>Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;