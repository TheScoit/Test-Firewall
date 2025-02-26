import { Lock, Mail, User2 } from "lucide-react";
import Input from "../components/Input";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-96 lg:max-w-sm rounded-2xl shadow-xl bg-gray-300 items-center flex w-full justify-center my-16 lg:mx-auto px-4 sm:px-6">
      <div className="p-8 flex flex-col justify-center items-center">
        <h2 className="lg:text-3xl font-bold mb-6 text-center text-black text-2xl">
          Create Account
        </h2>
        <form onSubmit={handleRegister}>
          <Input 
            icon={User2}
            type="text"
            placeholder="Full Name"
            className="mb-4 text-gray-900 bg-black outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input 
            icon={Mail}
            type="email"
            placeholder="Email Address"
            className="mb-4 text-gray-900 bg-black outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            icon={Lock}
            type="password"
            placeholder="Password"
            className="mb-4 text-gray-900 bg-black outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Password strength meter */}
          <PasswordStrengthMeter password={password} />
          <button className="mt-5 mx-5 lg:mx-0 w-72 lg:w-full bg-black text-white p-3  rounded-md font-sans font-light hover:bg-gray-800 ">
            Register
          </button>
        </form>

        <div className="px-8 py-4 bg-opacity-50 mt-4 sm:mt-6">
          <p className="text-white text-center text-sm sm:text-base">
            Already have an account? 
            <Link to="/login" className="text-black font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
