import { Link } from "react-router-dom";
import Header from "../components/Header";
import Services from "./Services";
import hackerImage from "../assets/Hacker.png";
import Footer from "../components/Footer";
import Accordion from "./Accordion";
import ContactSection from "./Contact";
import { FaRobot } from "react-icons/fa";
import Chatbot from "./Chatbot";
import { useState } from "react";
import { MdOutlineOpenInNew } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(); // Initialize translation function
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed bottom-7 right-5 z-50 flex flex-col items-end ">
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300"
        >
          <FaRobot size={24} />
        </button>

        {/* Chatbot Window */}
        {chatOpen && <Chatbot onClose={() => setChatOpen(false)} />}
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="relative my-20 flex flex-col md:flex-row justify-between px-8 md:px-16 items-center ">
        {/* Left Section */}
        <div className="text-white w-full md:w-1/2 flex flex-col justify-center items-center text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mx-1 text-black text-start lg:mx-5">
            {t("protect_network")}
          </h1>
          <p className="text-lg sm:text-xl mx-2 my-8 text-slate-500 text-start lg:mx-6">
            {t("cyber_threats")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:relative lg:px-6 px-2">
            <Link to="https://en.wikipedia.org/wiki/Firewall">
              <button className="bg-black p-3 font-sans rounded-md w-full sm:w-auto lg:text-left relative font-extralight text-center">
                {t("learn_more")}
                <MdOutlineOpenInNew size="13" className="absolute top-1 right-1" />
              </button>
            </Link>

            <Link to="/register">
              <button className="text-black border-gray-300 border-2 px-4 rounded-md p-3 font-sans font-light w-full sm:w-auto lg:text-left text-center">
                {t("register")}
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-80 md:w-1/2 md:mb-10 md:flex lg:flex lg:justify-center p-5">
          <img src={hackerImage} alt="Hacker Illustration" className="lg:block hidden" />
        </div>
      </div>

      {/* CSV Upload Button */}
      <div className="w-full items-center text-center text-white">
        <Link to="/csv_analyzer">
          <button className="bg-blue-500 text-white font-sans font-light rounded-md px-20 p-3 lg:px-4 lg:p-3 lg:w-auto text-center cursor-pointer hover:bg-blue-600 transition duration-300">
            {t("upload_csv")}
          </button>
        </Link>
      </div>

      {/* Other Sections */}
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
