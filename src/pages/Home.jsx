import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full max-w-[375px] mx-auto 
            px-5 py-10 
            flex flex-col justify-end 
            bg-[#F7F8F9] 
            border border-[#6C25FF4B]"
    >
      <h1 className="text-[28px] font-bold text-[#1D2226]">Welcome to PopX</h1>
      <p className="text-[18px] text-[#1D2226]/60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col gap-3">
        <button
          onClick={() => navigate("/register")}
          className="w-full bg-[#6C25FF] text-white font-sm p-[10px] 
                    rounded active:scale-95 transition-all duration-200"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-[#6C25FF4B] font-sm p-[10px] rounded 
                    active:scale-95 transition-all duration-200"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Home;
