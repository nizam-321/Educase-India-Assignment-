import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Navigate to profile page
      navigate("/profile", {
        state: {
          email: email,
          name: "Marry Doe",
        },
      });
    }
  };
  return (
    <div
      className=" min-h-screen w-full max-w-[375px] mx-auto 
            px-5 py-10 
            flex flex-col justify-start
            bg-[#F7F8F9] 
            border border-[#6C25FF4B]"
    >
      <h1
        className=" w-[200px] text-[28px] 
                 font-bold text-[#1D2226]"
      >
        Signin to your PopX account
      </h1>
      <p className="text-[18px] text-[#1D2226]/60 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* Login Form for email and password */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 relative mt-10"
      >
        {/* Email Input */}
        <div className="relative">
          <label
            for="email"
            className="text-[13px] text-[#6C25FF] bg-[#F7F8F9]
                       absolute -top-1.5 left-3.5  pl-1 pr-2"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#CBCBCB] bg-[#F7F8F9] 
                       rounded-md px-[18px] pt-2.5 pb-2 focus:outline-none"
          />
        </div>
        {/* Password Input */}
        <div className="relative">
          <label
            for="password"
            className="text-[13px] text-[#6C25FF] bg-[#F7F8F9] 
                       absolute -top-1.5 left-3.5  pl-1 pr-2"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#CBCBCB] bg-[#F7F8F9] 
                      rounded-md px-[18px] pt-2.5 pb-2 focus:outline-none"
          />
        </div>
        {/* Submit Button */}
        <button
          className="w-full bg-[#CBCBCB] text-white  p-[10px] rounded
                           active:scale-95 transition-all duration-200 "
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
