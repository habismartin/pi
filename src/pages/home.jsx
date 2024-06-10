import React from "react";
import Logo from "../images/pilogo.png";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import Fireside from '../images/fireside.jpg'
import Wallet from '../images/wallet.jpg'
import Brainstorm from '../images/brainstorm.jpg'
import Mine from '../images/mine.jpg'
import Blockchain from '../images/blockchain.jpg'
import Develop from '../images/develop.jpg'
import KYC from '../images/kyc.jpg'
import Chat from '../images/chat.jpg'
import Btn from '../images/btn.jpg'


const pagesData = [
    {
      url: '/',
      imgSrc: Fireside,
      name: 'Fireside'
    },
    {
      url: '/pi-wallet',
      imgSrc: Wallet,
      name: 'Wallet'
    },
    {
      url: '/',
      imgSrc: Brainstorm,
      name: 'Brainstorm'
    },
    {
      url: '/',
      imgSrc: Mine,
      name: 'Mine'
    },
    {
      url: '/',
      imgSrc: Blockchain,
      name: 'Blockchain'
    },
    {
      url: '/',
      imgSrc: Develop,
      name: 'Develop'
    },
    {
      url: '/',
      imgSrc: KYC,
      name: 'KYC'
    },
    {
      url: '/',
      imgSrc: Chat,
      name: 'Chat'
    }
  ];
  

const Home = () => {
  return (
    <div className="flex flex-col w-full overflow-auto">
      <div className="flex bg-[#703d92] text-white h-14 items-center justify-between px-3">
        <BiArrowBack size={21} color="#ffffff50" />
        <div className="flex items-center text-white font-[500] gap-3">
          Home <img src={Logo} alt="Pi" className="h-8" />
        </div>
        <FaAngleDown size={20} />
      </div>

      <div className="flex flex-col items-center w-full">
        <img src={Logo} alt="pi" className="h-[18dvh] mt-3"/>
        <p className="text-[#f6b133] mb-2 font-[600] text-[21px]">
          Welcome to the Pi browser
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 w-full">
        {pagesData.map((page, index) => (
          <Link to={page?.url} key={index} className="">
            <div className="flex flex-col items-center p-4">
                <div className="border overflow-hidden border-[#703d92] w-[70px] h-[70px] rounded-[17px] flex items-center justify-center">
                <img src={page?.imgSrc} alt={page?.name} className="w-full object-cover" />
                </div>
              <p className="mt-2 text-[13px] text-[#703d92]">{page?.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <button className="w-[90%] bg-[#703d92] text-white rounded-lg h-14 font-[600] flex items-center justify-center"><img src={Btn} className="h-9" alt="o" /> Explore the Testnet Ecosystem</button>
      </div>
    </div>
  );
};

export default Home;
