import React from "react";
import { useLocation } from "react-router-dom";



const Profile = () => {
  const location = useLocation();
  const { name = "Marry Doe", email = "marry@gmail.com" } =
    location.state || {};
  return (
    <div
      className="min-h-screen w-full max-w-[375px] mx-auto 
                    flex flex-col bg-[#F7F8F9] border border-[#6C25FF4B]"
    >
      {/* Header Section */}
      <div className="bg-white w-full px-5 py-5">
        <header className="text-[18px] text-[#1D2226]">Account Settings</header>
      </div>

      {/* Profile Details Section */}
      <div className="flex flex-col mx-5  gap-5">
        <div className="flex gap-4">
          {/* profile image */}
          <div className="relative">
            <img
              src="/src/assets/profile.png"
              alt="Profile"
              className="w-[76px] h-[76px] rounded-full  mt-5"
            />
            <img
              src="/src/assets/cam.png"
              alt="camera iamge"
              className="w-[23px] h-[23px] rounded-full mt-5 
                      absolute rigth-5 top-12 cursor-pointer left-14"
            />
          </div>
          {/* user detail */}
          <div className="flex flex-col mt-5">
            <span className="text-[15px] text-[#1D2226] font-bold">{name}</span>
            <span className="text-[14px] text-[#1D2226]">{email}</span>
          </div>
        </div>
        {/* Profile section End */}

        {/* content */}
        <div className="text-[14px]">
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
      </div>
      <hr className="my-4 border-t-2 border-dashed border-[#CBCBCB] w-full" />
    </div>
  );
};

export default Profile;
