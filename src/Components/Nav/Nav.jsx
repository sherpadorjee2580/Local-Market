import React from "react";
import "./Nav.css";
import { FaSearch, FaCartArrowDown, FaUserAlt } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="nav bg-gray-800 text-white h-[80px] flex items-center justify-center w-screen fixed top-0 left-0">
      <div className="nav-container flex  items-center justify-between w-screen">
        <div className="nav-left w-[20%] flex justify-center items-center">
          <h1 className="logo">MyShop</h1>
        </div>
        <div className="nav-center w-[60%] flex justify-between items-center">
          <ul className="nav-links flex justify-between items-center w-[100%] px-[200px]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Vendo</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="nav-right w-[20%] flex justify-center items-center gap-[10px]">
          <div className="nav-search">
            {" "}
            <FaSearch />{" "}
          </div>
          <div className="nav-cart">
            {" "}
            <FaCartArrowDown />{" "}
          </div>
          <div className="nav-user">
            {" "}
            <FaUserAlt />{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
