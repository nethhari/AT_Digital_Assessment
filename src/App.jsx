import "react";
import Navbar from "./Components/Navbar";
import hero from "./assets/Hero Image.png";
import FQA from './Components/FAQ'
import Footer from "./Components/Footer";
import Button from "./Components/Button";
import image2 from "./assets/image 2.png";
import image1 from "./assets/image 1.png";

const App = () => {
  return(
    <div>
      <Navbar />
      
      <div className="relative min-h-screen">
        <div className="h-[80vh] md:h-screen w-full">
          <img
            src={hero}
            alt="Business strategy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:absolute container mx-auto w-full z-10 md:mt-0 mt-8">
          <div className="bg-gradient-to-r from-[#1CBDDD] to-[#4DCA79] p-8 shadow-xl 
            w-full md:w-[55%] lg:w-[50%] md:left-[5%] md:bottom-[30%] md:absolute
            lg:p-10 xl:p-12 mb-10">
            <div className="space-y-6 ">
              <h1 className="text-3xl md:text-[32px] lg:text-[34px] xl:text-[36px] 
                font-bold text-white leading-tight">
                We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
              </h1>
              <div className="flex justify-start">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white ml-20 mr-20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="h-72 sm:h-96 w-full bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src={image2}
                alt="Web & Mobile Development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:pl-12 space-y-6">
              <h3 
                className="text-[27px] font-semibold leading-[33px] tracking-[0.4px] text-left text-[#4F46E5]"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none'
                }}
              >
                Web & Mobile App Development
              </h3>
              <p className="font-inter text-[16px] font-normal leading-[19.36px] text-left text-black">
                Your web and mobile apps are pieces of the puzzle to grow your business. 
                We use frameworks which tailor content and engagement methods to respond 
                to different intents shown by your potential customers who interact 
                with your business online.
              </p>
              <Button className="mt-4">LEARN MORE</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ml-20">
            <div className="lg:order-2 h-72 sm:h-96 w-full bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src={image1} 
                alt="Digital Strategy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:order-1 lg:pr-12 space-y-6">
              <h3 
                className="text-[27px] font-semibold leading-[33px] tracking-[0.4px] text-left text-[#4F46E5]"
                style={{ 
                  fontFamily: 'Poppins, sans-serif',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none'
                }}
              >
                Digital Strategy Consulting
              </h3>
              <p className="font-inter text-[16px] font-normal leading-[19.36px] text-left text-black">
                Your digital strategy should complement the overall marketing strategy 
                of the company. In online marketing, each component will never work in 
                isolation and every business needs a different mix. We provide a clear 
                concept and strategic overview to find the most efficient model for 
                your business.
              </p>
              <Button className="mt-4">LEARN MORE</Button>
            </div>
          </div>
        </div>
      </div>

      <h3 
        className="text-[27px] font-semibold leading-[33px] tracking-[0.4px] text-[#4F46E5] text-center mb-10 mt-5"
        style={{ 
          fontFamily: 'Poppins, sans-serif',
          textUnderlinePosition: 'from-font',
          textDecorationSkipInk: 'none'
        }}
      >
        Frequently asked questions
      </h3>
      
        <FQA />
        <FQA />
        <FQA />
      

      {/* Added margin-top for 10px gap */}
      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  )
}

export default App;