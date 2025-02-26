import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

const EmailVerification = () => {
  const [code,setCode] = useState(["","","","","",""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate() 
  const isLoading = false

  const handleChange = (index,value) => {
      const newCode = [...code];
      // handle Pasted content
      if(value.length > 1){
          const pastedCode = value.slice(0,6).split("");
          for (let i = 0; i < 6; i++) {
            newCode[i] = pastedCode[i] || "";
          }
          setCode(newCode);

          const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
          const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
          inputRefs.current[focusIndex].focus();
      }else{
        newCode[index] = value;
        setCode(newCode);

        if(value && index < 5){
          inputRefs.current[index + 1].focus();
        }

      }
  }

  const handleKeyDown = (index,e) => {
    if(e.key === 'Backspace' && !code[index] && index > 0){
      inputRefs.current[index -1].focus();
    }
  }


  const handleSubmit = (e) => {
      e.preventDefault();
      const verificationCode = code.json("");
      alert(`Verification code submitted : ${verificationCode}`)
      
  }
  // Auto Submit when all fields are filled 
  useEffect(()=>{
    if(code.every(digit => digit !== '')){
        handleSubmit(new Event('submit'));
    }
  },[code])

  return (
    <div className=" max-w-md rounded-2xl shadow-xl bg-gray-300 items-center flex  w-full justify-center my-24 mx-auto">
      <div className="p-8 ">
      <h2 className="text-2xl flex mb-6 text-center justify-center font-bold ">Verify your Email</h2>
      <p className="text-center text-gray-600 mb-6">Enter the 6-digit code sent to your email address.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-between">
          {code.map((_,index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="6"
              className="w-12 h-12 text-center border border-gray-400 rounded-md focus:outline-none focus:border-black"
              value={code[index]}
              onChange={(e)=> handleChange(index,e.target.value)}
              onKeyDown={(e)=> handleKeyDown(index,e)}
            />
          ))}
        </div>
        <button disabled={isLoading} type="submit" className="mt-5 w-full bg-black text-white p-3 rounded-md font-sans font-light hover:bg-gray-800">
          {isLoading ? "Verifying..." : "Verify Email"}
        </button>

      </form>
      </div>
     
    </div>
  )
}

export default EmailVerification
