import { useEffect, useRef, useState } from "react";

const EmailVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const isLoading = false;

  const handleChange = (index, value) => {
    const newCode = [...code];

    if (value.length > 1) {
      // Handle Pasting
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Verification code submitted: ${code.join("")}`);
  };

  // Auto Submit when all fields are filled
  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
    <div className="w-full flex justify-center px-3 my-40 ">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-gray-300 rounded-xl shadow-lg px-5 sm:px-8 lg:px-10 py-6">
        <h2 className="text-lg sm:text-xl font-bold text-center mb-4">
          Verify Your Email
        </h2>
        <p className="text-gray-600 text-sm sm:text-base text-center mb-5">
          Enter the 6-digit code sent to your email.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 w-full">
          <div className="flex justify-center gap-2 sm:gap-4">
            {code.map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                className="w-10 h-10 sm:w-12 sm:h-12 text-center border border-gray-400 rounded-md focus:outline-none focus:border-black text-lg"
                value={code[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="mt-4 w-full bg-black text-white p-2 sm:p-3 rounded-md font-light hover:bg-gray-800 transition duration-300"
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
