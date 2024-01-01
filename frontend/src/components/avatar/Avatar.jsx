import { useNavigate } from "react-router-dom";
import { DataContext } from "../../assets/helperFunctions/DataProvider";
import { useContext, useState } from "react";
// import "./App.css";

function Avatar({ userName }) {
  const navigate = useNavigate();
  const words = userName.split(" ");
  const User = useContext(DataContext);
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    if (visible) {
      document
        .querySelector(".avatar-dropdown-content")
        .classList.replace("opacity-100", "opacity-0");
      setTimeout(() => {
        document
          .querySelector(".avatar-dropdown-content")
          .classList.add("hidden");
      }, 200);
    } else {
      document
        .querySelector(".avatar-dropdown-content")
        .classList.replace("opacity-0", "opacity-100");
      setTimeout(() => {
        document
          .querySelector(".avatar-dropdown-content")
          .classList.remove("hidden");
      }, 200);
    }
    setVisible(!visible);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="avatar-name-container flex flex-row justify-center items-center gap-2 cursor-pointer">
          <h1 className="font-semibold dark:text-primary-50 text-primary-950">
            {words.join(" ")}
          </h1>
          <div className="relative">
            <div
              className="avatar-img-container"
              onClick={toggleVisibility}
              tabIndex="0"
              role="button"
            >
              <div className="bg-primary-950 text-primary-50 dark:text-primary-950 dark:bg-primary-50 flex justify-center items-center rounded-full w-12 aspect-square">
                <span className="font-semibold">{`${words[0][0].toUpperCase()}${words[1][0].toUpperCase()}`}</span>
              </div>
            </div>
            <ul
              tabIndex="0"
              className="avatar-dropdown-content absolute duration-200 opacity-0 bg-white text-primary-950 dark:bg-gray-900 z-[1] mt-1 right-0 menu p-2 shadow bg-base-100 rounded-lg w-40"
            >
              <li className="mb-2 font-semibold bg-primary-50 dark:bg-gray-800 dark:text-primary-50 dark:hover:bg-gray-700 hover:bg-primary-100 px-4 py-2 rounded-md">
                <a className="bg-neutral">Edit Profile</a>
              </li>
              <li
                onClick={(e) => {
                  e.preventDefault();
                  if (localStorage.getItem("token")) {
                    localStorage.removeItem("token");
                    User.setUser({});
                  }
                }}
                className="font-semibold bg-primary-50 dark:bg-gray-800 dark:text-primary-50 dark:hover:bg-gray-700 hover:bg-primary-100 px-4 py-2 rounded-md"
              >
                <span className="bg-neutral">Log out</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Avatar;

/* import React from "react";
import { useNavigate } from "react-router-dom";

function Avatar({ userName }) {
  const navigate = useNavigate();
  const words = userName.split(" ");
  return (
    <>
      <div className="avatar-name-container flex flex-row justify-center items-center gap-2 cursor-pointer">
        <h1 className="font-semibold">{userName}</h1>
        <div className="dropdown dropdown-end">
          <div className="avatar placeholder" tabIndex="0" role="button">
            <div className="bg-neutral text-neutral-content rounded-full w-12">
              <span className="font-semibold">{`${words[0][0].toUpperCase()}${words[1][0].toUpperCase()}`}</span>
            </div>
          </div>
          <ul
            tabIndex="0"
            className="dropdown-content z-[1] mt-1 text-slate-200 menu p-2 shadow bg-base-100 rounded-box w-36"
          >
            <li className="mb-2 font-semibold hover:text-white">
              <a className="bg-neutral">Edit Profile</a>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                if (localStorage.getItem("token"))
                  localStorage.removeItem("token");
                window.location.reload();
              }}
              className="font-semibold hover:text-white"
            >
              <a className="bg-neutral">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Avatar;
 */
