import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logowhite.png";

import { HiMenu } from "react-icons/hi";
import { AiFillCloseCricle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
const Home = () => {
  document.title = "Home-CCinter";
  return (
    <div>
      <div className="flex justify-center items-center flex-col h-screen z-10  home over ">
        <div className="h-auto bg-blackOverlay w-full flex justify-between">
          <div className="text-white w-150px md:max-w-[180px] max-w-[90px] "><img src={logo} alt="logo"/> </div>
          <div className="text-white "> <button className="bg-mainColor flex justify-center ease-in-out duration-700 items-center p-4 pl-6  pr-6 rounded-lg cursor-pointer ouline-none text-black m-5 hover:bg-black hover:text-white">Login</button> </div>

        </div>
        <div className="h-[90%] bg-blackOverlay  flex flex-col justify-center items-center text-center	 w-full">
          <h1 className="text-white font-serif font-black text-4xl md:text-8xl">Lets Make An Epic Match.</h1>
          <button className="but flex justify-center ease-in-out duration-700 items-center p-4 pl-6  pr-6  cursor-pointer ouline-none text-white m-5 font-bold md:w-[20%] hover:text-white md:text-3xl hover:tracking-widest rounded-[2rem]">Log in</button>
        </div>
        <div className="bg-blackOverlay w-full items-end">

        <h2 className=" font-light text-white  md:ml-5 ">Background Image from <a className="text-red-900" href="https://tinder.com/">Tinder.com</a></h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
