import React from "react";
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
