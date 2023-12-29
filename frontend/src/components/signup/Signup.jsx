import React, { useState } from "react";
import { handleSignup } from "../../assets/helperFunctions/AuthFunctions";

function Signup() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <>
      <div className="login-container w-full h-screen pt-20 px-2 sm:flex sm:justify-center sm:items-center">
        <div className="min-w-[50%] h-full">
          <div className="heading">
            <h1 className="text-xl sm:text-2xl font-bold">Sign Up</h1>
          </div>
          <div className="w-full sm:h-[70%] h-3/5 gap-4 flex flex-col justify-center items-center">
            <div className="email-container sm:w-3/5 flex flex-col">
              <label htmlFor="email">Enter Name</label>
              <input
                className="bg-slate-200 rounded-md px-4 py-2 text-lg border-none outline-none focus:bg-slate-300 placeholder:text-slate-700"
                onChange={(e) => {
                  e.preventDefault();
                  setUname(e.target.value);
                }}
                placeholder="Enter Your Name"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="email-container sm:w-3/5 flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="bg-slate-200 rounded-md px-4 py-2 text-lg border-none outline-none focus:bg-slate-300 placeholder:text-slate-700"
                onChange={(e) => {
                  e.preventDefault();
                  setEmail(e.target.value);
                }}
                placeholder="Enter Your Email"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="password-container sm:w-3/5 flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                className="bg-slate-200 rounded-md px-4 py-2 text-lg border-none outline-none focus:bg-slate-300 placeholder:text-slate-700"
                onChange={(e) => {
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
                placeholder="Enter Your Password"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <div className="password-container sm:w-3/5 flex flex-col">
              <label htmlFor="cnfPassword">Confirm Password</label>
              <input
                className="bg-slate-200 rounded-md px-4 py-2 text-lg border-none outline-none focus:bg-slate-300 placeholder:text-slate-700"
                onChange={(e) => {
                  e.preventDefault();
                  setCnfPassword(e.target.value);
                }}
                placeholder="Re-enter Your Password"
                type="password"
                name="cnfPassword"
                id="cnfPassword"
              />
            </div>
            <h1>{msg}</h1>
            <button
              onClick={() =>
                handleSignup(uname, email, Password, cnfPassword, setMsg)
              }
              className="hover:bg-slate-300 rounded-md px-6 py-2 duration-150"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
