import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState("");

  const navigate = useNavigate();

  //  Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && phone && password) {
      const userData = {
        name,
        email,
      };
      navigate("/profile", { state: userData });
    }
  };

  return (
    <div
      className="min-h-screen w-full max-w-[375px] mx-auto px-5 py-10 flex flex-col bg-[#F7F8F9] border border-[#6C25FF4B]"
    >
      <h1 className="w-[200px] text-[28px] font-bold text-[#1D2226]">
        Create your PopX account
      </h1>
      
      {/* Registration form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between flex-grow mt-10 h-full"
      >
        <div className="flex flex-col gap-5">
          {/* Name Input */}
          <div className="relative">
            <label
              htmlFor="name"
              className="text-[13px] text-[#6C25FF] bg-[#F7F8F9] absolute -top-2 left-3.5 pl-1 pr-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-[#CBCBCB] bg-[#F7F8F9] rounded-md px-[18px] pt-2.5 pb-2 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <label
              htmlFor="phone"
              className="text-[13px] text-[#6C25FF] bg-[#F7F8F9] absolute -top-2 left-3.5 pl-1 pr-2"
            >
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-[#CBCBCB] bg-[#F7F8F9] rounded-md px-[18px] pt-2.5 pb-2 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="text-[13px] text-[#6C25FF] bg-[#F7F8F9] absolute -top-2 left-3.5 pl-1 pr-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[#CBCBCB] bg-[#F7F8F9] rounded-md px-[18px] pt-2.5 pb-2 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="text-[13px] text-[#6C25FF] bg-[#F7F8F9] absolute -top-2 left-3.5 pl-1 pr-2"
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
              className="w-full border border-[#CBCBCB] bg-[#F7F8F9] rounded-md px-[18px] pt-2.5 pb-2 focus:outline-none"
            />
          </div>

          {/* Company Name */}
          <div className="relative">
            <label
              htmlFor="company"
              className="text-[13px] text-[#6C25FF] bg-[#F7F8F9] absolute -top-2 left-3.5 pl-1 pr-2"
            >
              Company Name
            </label>
            <input
              id="company"
              type="text"
              placeholder="Enter company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full border border-[#CBCBCB] bg-[#F7F8F9] rounded-md px-[18px] pt-2.5 pb-2 focus:outline-none"
            />
          </div>

          {/* Radio Input */}
          <div className="flex flex-col gap-2 w-[132px]">
            <label className="text-[13px] text-[#1D2226]">
              Are you an Agency?
            </label>
            <div className="flex items-center gap-4 pl-1">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="creator"
                  value="yes"
                  checked={isAgency === "yes"}
                  onChange={(e) => setIsAgency(e.target.value)}
                  className="accent-[#6C25FF]"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="creator"
                  value="no"
                  checked={isAgency === "no"}
                  onChange={(e) => setIsAgency(e.target.value)}
                  className="accent-[#6C25FF]"
                />
                No
              </label>
            </div>
          </div>
        </div>

        <button
          className="w-full bg-[#6C25FF] text-white p-[10px] rounded active:scale-95 transition-all duration-200 mt-6"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
