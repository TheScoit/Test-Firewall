import { useState } from "react";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !message) {
      setError("Both fields are required");
      return;
    }
    console.log("Email:", email);
    console.log("Message:", message);
    alert("Message sent successfully!");
    setEmail("");
    setMessage("");
  };

  return (
        <div>
            <div className="mx-8">
            <h2 className="text-3xl font-semibold mb-2 text-center">Contact Us</h2>
            </div>
            <div className="h-screen flex justify-center items-center -my-32 p-3 mb-1">
      <div className="w-full max-w-lg p-8 shadow-lg rounded-2xl border bg-white ">
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 mb-4 border rounded h-40"
          />
          <button type="submit" className="w-full p-3 bg-black text-white rounded hover:bg-gray-800">Send Message</button>
        </form>
      </div>
    </div>
    </div>
    
  );
}