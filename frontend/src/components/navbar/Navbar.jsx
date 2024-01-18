import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/blogger.png";
import LoginRegisterCombo from "../Button/LoginRegisterCombo";
import Avatar from "../avatar/Avatar";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

function Navbar({ userName }) {
  return (
    <>
      <nav className="bg-primary-50 border-gray-200 px-2 w-full lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-primary-950 text-lg sm:text-xl font-bold whitespace-nowrap dark:text-primary-50">
              Dev-Blogs
            </span>
          </Link>
          <div className="flex flex-row justify-center items-center gap-1 sm:gap-3 w-fit">
            <ThemeSwitcher />
            {userName ? <Avatar userName={userName} /> : <LoginRegisterCombo />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
