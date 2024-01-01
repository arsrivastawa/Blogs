import React from "react";

function Input({ id, type = "text", label, placeholder, setter }) {
  return (
    /*     <div className={`${label} password-container sm:w-3/5 flex flex-col`}>
      <label htmlFor={id}>{label}</label>
      <input
        className="bg-slate-200 rounded-md px-4 py-2 text-lg border-none outline-none focus:bg-slate-300 placeholder:text-slate-700"
        onChange={(e) => {
          e.preventDefault();
          setter(e.target.value);
        }}
        placeholder={placeholder}
        type={type}
        name={id}
        id={id}
      />
    </div> */

    <div>
      <label
        htmlFor={id}
        className={`${label}block mb-1 text-sm font-medium text-gray-900 dark:text-white`}
      >
        {label}
      </label>
      <input
        onChange={(e) => {
          e.preventDefault();
          setter(e.target.value);
        }}
        type={type}
        name={id}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required=""
      />
    </div>
  );
}

export default Input;
