import { Link } from "react-router-dom";
import Header from "../components/Header";
import Services from "./Services";
import hackerImage from '../assets/Hacker.png';
import Footer from "../components/Footer";
import Accordion from "./Accordion";
import ContactSection from "./Contact";

const Home = () => {
  // Function to handle file upload
 

  return (
    <>
      <div>
        <Header />
        {/* Hero Section or Home section */}
        <div className="relative my-20 flex flex-col md:flex-row justify-between px-8 md:px-16 items-center">
          {/* Left Section */}
          <div className="text-white w-full md:w-1/2 flex flex-col justify-center items-center text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl mx-1 text-black text-start lg:mx-5">
              Protect Your Network from Malicious Threats
            </h1>
            <p className="text-lg sm:text-xl mx-2 my-8 text-slate-500 text-start lg:mx-6">
              Stay one step ahead of cyber threats with our advanced monitoring system. We detect and block malicious activity to keep your online environment safe.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:relative lg:px-6 px-2">
              <Link to="/PacketCapture">
                <button className="bg-black p-3 font-sans font-light rounded-md w-full sm:w-auto text-left">
                  Test Your Firewall
                </button>
              </Link>
              <Link to="/register">
                <button className="text-black border-gray-300 border-2 px-4 rounded-md p-3 font-sans font-light w-full sm:w-auto text-left">
                  Register
                </button>
              </Link>
              {/* Upload CSV Button */}
              <Link to="/csv_analyzer">
              <button className="bg-blue-500 text-white p-3 font-sans font-light rounded-md w-full sm:w-auto text-center cursor-pointer hover:bg-blue-600 transition duration-300">
                <input
                  type="file"
                  accept=".csv"
                  // onChange={handleFileUpload}
                  className="hidden"
                />
                Upload CSV
              </button>
              </Link>
              
            </div>
          </div>

          {/* Right Section */}
          <div className="w-80 md:w-1/2 md:mb-10 md:flex lg:flex lg:justify-center p-5">
            <img src={hackerImage} alt="errImage" className="p-4 rounded-md w-full sm:w-auto max-w-xs md:max-w-none hidden lg:block" />
          </div>
        </div>
      </div>

      <Services />
      <div className="border-b-2 mx-8 my-10"></div>
      <Accordion />
      <div className="border-b-2 mx-8 my-10"></div>
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;  