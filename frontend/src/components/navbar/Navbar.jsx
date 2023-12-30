import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/blogger.png";
import Button from "../Button/Button";
import LoginRegisterCombo from "../Button/LoginRegisterCombo";
import Avatar from "../avatar/Avatar";

function Navbar({ userName }) {
  return (
    <>
      <div className="navbar-container bg-[#9393f327] lg:px-4 px-2 border-b-[1px] border-slate-300 fixed backdrop-blur-sm py-2 flex flex-row w-full justify-between items-center">
        <Link to={"/"}>
          <div className="logo flex flex-row items-center cursor-pointer">
            <img src={Logo} alt="Dev-Logo" className="w-9" />
            <h1 className="font-bold text-xl ml-1">Dev-Blogs</h1>
          </div>
        </Link>
        {userName ? <Avatar userName={userName} /> : <LoginRegisterCombo />}
      </div>
    </>
  );
}

export default Navbar;
