import React from "react";

function Button({ title, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="btn btn-xs text-base sm:btn-sm md:btn-md btn-neutral text-slate-200"
      >
        {title}
      </button>
    </>
  );
}

export default Button;
