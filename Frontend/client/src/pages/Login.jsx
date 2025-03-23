import { Lock, Mail, Loader } from "lucide-react";
import Input from "../components/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = false;

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex justify-center my-40">
      <div className="w-auto  max-w-xs sm:max-w-sm lg:max-w-md bg-gray-300 rounded-xl shadow-lg px-4 sm:px-3 lg:px-10 py-4">
        {/* Title */}
        <h2 className="text-2xl sm:text-2xl font-bold text-center text-black mb-6">
          Welcome Back
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-2">
          <div className="w-full">
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              className="h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full">
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              className="h-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-gray-700 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button - Now Fully Responsive */}
          <button
            disabled={isLoading}
            type="submit"
            className="w-full h-12 bg-black text-white rounded-md text-sm sm:text-base font-light hover:bg-gray-800 transition flex items-center justify-center"
          >
            {isLoading ? (
              <Loader className="w-4 h-4 animate-spin" color="white" />
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm sm:text-base mt-3 sm:mt-4 text-gray-700">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-black font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
