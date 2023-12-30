import React from "react";

function Input({ id, type = "text", label, placeholder, setter }) {
  return (
    <div className={`${label} password-container sm:w-3/5 flex flex-col`}>
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
    </div>
  );
}

export default Input;
