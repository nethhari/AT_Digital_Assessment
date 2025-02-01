import 'react';
import logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#4F46E5] py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-8 text-left">
          <div className="space-y-4">
            <img src={logo} alt="Logo" className="mb-4" />
            <p className="text-white text-sm leading-relaxed">
              Your goal is our target. Not anything in between. We use online marketing platforms 
              and tools to achieve single objective - your business results.
            </p>
          </div>

          <div className="space-y-4 pl-0 md:pl-32 text-left">
            <h3 className="text-lg font-semibold text-white">Our Technologies</h3>
            <ul className="space-y-2 text-white">
              {['ReactJS', 'Gatsby', 'NextJS', 'NodeJS'].map((tech) => (
                <li key={tech} className="text-sm">{tech}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 pl-0 md:pl-16 text-left">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2 text-white">
              {['Social Media Marketing', 'Web & Mobile App Development', 'Data & Analytics'].map((service) => (
                <li key={service} className="text-sm">{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white pt-6 mt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center space-y-2 md:space-y-0 md:space-x-4 text-white text-sm text-left">
            <span>Privacy Policy</span>
            <div className="hidden md:block h-4 w-px bg-white"></div>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;