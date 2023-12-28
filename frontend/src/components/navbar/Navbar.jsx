import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/blogger.png";

function Navbar() {
  return (
    <>
      <div className="navbar-container bg-[#9393f327] lg:px-4 px-2 border-b-[1px] border-slate-300 fixed backdrop-blur-sm py-2 flex flex-row w-full justify-between items-center">
        <Link to={"/"}>
          <div className="logo flex flex-row items-center cursor-pointer">
            <img src={Logo} alt="Dev-Logo" className="w-9" />
            <h1 className="font-bold text-xl ml-1">Dev-Blogs</h1>
          </div>
        </Link>
        <div className="flex flex-row gap-2 justify-between items-center">
          <div className="login-btn">
            <Link to={"/login"}>
              <button className="hover:bg-slate-300 rounded-md px-4 py-2 duration-150">
                Log in
              </button>
            </Link>
          </div>
          <div className="signup-btn">
            <Link to={"/signup"}>
              <button className="hover:bg-slate-300 rounded-md px-4 py-2 duration-150">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
