import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero h-screen flex items-center justify-center w-screen ">
      <div className="hero-container flex justify-center items-center gap-10 max-w-[1280px] w-screen">
        <div className="hero-left flex flex-col max-w-[50%] gap-3">
          <p className="hero-title text-amber-600 font-[600] text-5xl">
            Your local marketplace for unique finds
          </p>
          <p className="hero-subtitle text-[20px] text-gray-600 font-[500]">
            Discover, buy, and sell one-of-a-kind items in your community.
          </p>
          <div className="hero-search flex gap-2 w-full max-w-[450px] mt-6">
            <input
              type="text"
              className="hero-search-input border-1 rounded-lg h-[50px] flex-1 justify-center items-center text-center"
              placeholder="Search for items, categories, or brands"
            />
            <button className="hero-search-button h-[50px] border w-[100px] rounded-lg bg-amber-600 font-semibold ">
              Search
            </button>
          </div>
        </div>
        <div className="hero-right max-w-[50%]">
          <img
            src="/src/assets/market.jpg"
            alt="market image"
            className="hero-img rounded-2xl w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
