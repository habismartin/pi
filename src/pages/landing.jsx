import React from "react";
import Logo from "../images/pilogo.png";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-full h-[100dvh] relative bg-[#703d92]">
      <div className="w-full h-[100dvh] bg-[#00000090] absolute">
        <div className="flex items-center justify-between mt-3 px-7">
          <div className="flex items-center gap-1">
            <img src={Logo} alt="pi" className="h-8" />{" "}
            <p className="text-[#f6b133] text-[15px] font-[800]">
              Pi <span className="font-[100]">Network</span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-white">
            <FiSearch size={20} />
            <HiOutlineMenuAlt2 size={20} />
          </div>
        </div>

        <div className="flex flex-col text-white px-7 w-full h-[90dvh] justify-center">
          <p className="text-[30px] font-[500] mb-6">
            The First Digital Currency You Can Mine on Your Phone
          </p>
          <p className="mb-6">
            Start mining Pi cryptocurrency today on our free, energy-light
            mobile app!
          </p>
          <Link
            to="/home"
            className="border border-[#f6b133] rounded mb-6 text-[#f6b133] py-3 w-[80%] flex items-center justify-center gap-2"
          >
            VALIDATE WALLET <PiDownloadSimple size={25} />
          </Link>

          <iframe
            width="100%"
            // height="315"
            src="https://www.youtube.com/embed/MsOaC61cR3U?controls=0&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="absolute bg-white w-full py-2 flex items-center justify-between px-8 bottom-0 rounded-tr-[15px] rounded-tl-[15px]">
        <div className="text-[12px]"><p>Pi Network</p><p className="font-[300]">Start mining. Easy as Pi!</p></div>
        <button className="text-[#703d92] bg-[#f6b133] px-2 py-1 text-[12px]">Download</button>
      </div>
    </div>
  );
};

export default Landing;
