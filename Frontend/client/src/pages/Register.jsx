import { Lock, Mail, User2 } from "lucide-react";
import Input from "../components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex justify-center my-16 lg:my-14">
      <div className="w-auto h-auto max-w-sm sm:max-w-sm lg:max-w-md bg-gray-300 rounded-xl shadow-lg px-4 sm:px-8 lg:px-10 py-4">
        {/* Title */}
        <h2 className="text-2xl sm:text-2xl font-bold text-center text-black mb-6">
          Create Account
        </h2>

        {/* Form */}
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <Input
            icon={User2}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Password Strength Meter */}
          <PasswordStrengthMeter password={password} />

          {/* Register Button */}
          <button className="w-full bg-black text-white p-3 rounded-md text-sm sm:text-base font-light hover:bg-gray-800 transition">
            Register
          </button>
        </form>

        {/* Already have an account? */}
        <p className="text-center text-sm sm:text-base mt-3 sm:mt-4 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
