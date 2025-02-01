import "react";
import Navbar from "./Components/Navbar";
import hero from "./assets/Hero Image.png";
import FQA from './Components/FAQ'
import Footer from "./Components/Footer";

const App = () => {
  return(
    <div>
      <Navbar></Navbar>
      <img src={hero} alt="" />
      <FQA></FQA>
      <Footer></Footer>
    </div>
  )
}

export default App;
