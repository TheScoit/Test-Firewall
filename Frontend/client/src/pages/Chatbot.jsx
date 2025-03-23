import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaRobot, FaTimes } from "react-icons/fa";

const Chatbot = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

 
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!input.trim()) return;
  
  //   setMessages((prevMessages) => [...prevMessages, { type: "user", text: input }]);
  //   setInput("");
  //   setIsTyping(true);
  
  //   try {
  //     const query = encodeURIComponent(input);
  //     const response = await fetch(`http://127.0.0.1:8000/chatbot/${query}`, {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });
  
  //     if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

  //     const data = await response.json();
  //     const message = await data.top.res;
  //     setMessages((prevMessages) => [...prevMessages, { type: "bot", text: message || "I'm not sure." }]);
  //   } catch (error) {
  //     console.error("Fetch Error:", error);
  //     setMessages((prevMessages) => [...prevMessages, { type: "bot", text: "Server is unreachable. Try again later." }]);
  //   } finally {
  //     setIsTyping(false);
  //   }
  // };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prevMessages) => [...prevMessages, { type: "user", text: input }]);
    setInput("");
    setIsTyping(true);

    try {
        const query = encodeURIComponent(input);
        const response = await fetch(`http://127.0.0.1:8000/chatbot/${query}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("API Response:", data); // Debugging line
        const message = data.response; // ✅ Correct way to access the chatbot response

        setMessages((prevMessages) => [
            ...prevMessages,
            { type: "bot", text: message || "I'm not sure." },
        ]);
    } catch (error) {
        console.error("Fetch Error:", error);
        setMessages((prevMessages) => [
            ...prevMessages,
            { type: "bot", text: "Server is unreachable. Try again later." },
        ]);
    } finally {
        setIsTyping(false);
    }
};


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-16 right-5 w-[90%] sm:w-80 h-[70vh] sm:h-96 bg-gray-900 text-white rounded-lg shadow-lg flex flex-col overflow-hidden"
    >
      {/* Chat Header */}
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaRobot className="mr-2 text-blue-400" />
          <span className="text-lg font-bold">Chat Assistant</span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-300 hover:text-red-500 transition"
        >
          <FaTimes size={18} />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.type === "bot" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`${
                msg.type === "bot" ? "bg-gray-700" : "bg-blue-500"
              } p-3 rounded-lg max-w-xs`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="text-gray-400 text-sm"
          >
            Chatbot is typing...
          </motion.div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Chat Input */}
      <div className="bg-gray-800 p-4 flex items-center" onClick={handleSubmit}>
        <input
          type="text"
          className="flex-1 p-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-400"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
        />
        <button
          onClick={handleSubmit}
          className="ml-2 p-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          <FaPaperPlane />
        </button>
      </div>
    </motion.div>
  );
};

export default Chatbot;
