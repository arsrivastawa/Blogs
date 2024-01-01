import React from "react";

function Alert({ messageToggler, message }) {
  return (
    <>
      <div
        role="alert"
        className={`w-full py-3 bg-primary-50 dark:bg-gray-900 text-primary-950 dark:text-primary-50 px-4 rounded-xl flex flex-row gap-1 items-center ${
          messageToggler ? "" : "hidden"
        } w-3/5`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="font-semibold">{message}</span>
      </div>
    </>
  );
}

export default Alert;
