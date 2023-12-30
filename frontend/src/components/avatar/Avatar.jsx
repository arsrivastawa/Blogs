import React from "react";

function Avatar({ userName }) {
  const words = userName.split(" ");
  return (
    <>
      <div className="avatar-name-container flex flex-row justify-center items-center gap-2 cursor-pointer">
        <h1 className="font-semibold">{userName}</h1>
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-12">
            <span className="font-semibold">{`${words[0][0].toUpperCase()}${words[1][0].toUpperCase()}`}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Avatar;
