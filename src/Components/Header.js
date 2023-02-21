import React from 'react';
import { ReactComponent as Logo } from '../assets/img/pokemon.svg';

const Header = () => {
  return (
    <header className=" fixed w-full h-20 bg-gradient-to-b from-red-700 via-red-600 to-red-500 flex justify-center items-center shadow-md">
      <div className="w-5/6 h-full flex items-center justify-between ">
        <div className="flex gap-3 items-center">
          <div className=" bg-gradient-to-b from-blue-500 to-cyan-300 h-14 w-14 rounded-full border-btn-header mr-6 cursor-pointer shadow-xl"></div>
          <div className="h-5 w-5 rounded-full border border-black bg-red-600"></div>
          <div className="h-5 w-5 rounded-full border border-black bg-amber-300"></div>
          <div className="h-5 w-5 rounded-full border border-black bg-green-400"></div>
        </div>
        <div>
          <Logo style={{ width: '100px', fill: 'white' }} />
        </div>
      </div>
    </header>
  );
};

export default Header;
