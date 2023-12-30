import React, { useState } from "react";
import { handleSignup } from "../../assets/helperFunctions/AuthFunctions";
import Input from "../InputBox/InputBox";

function Signup() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [uID, setUID] = useState("");
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
          <div className="w-full sm:h-[80%] h-3/5 gap-4 flex flex-col justify-center items-center">
            <Input
              id={"name"}
              label={"Name"}
              placeholder={"Enter Your Name"}
              setter={setUname}
            />
            <Input
              type="email"
              id={"email"}
              label={"Email"}
              placeholder={"Enter your email"}
              setter={setEmail}
            />
            <Input
              id={"uid"}
              label={"UserID"}
              placeholder={"It should be unique"}
              setter={setUID}
            />
            <Input
              type="password"
              id={"password"}
              label={"Password"}
              placeholder={"Enter your password"}
              setter={setPassword}
            />
            <Input
              type="password"
              id={"cnfPassword"}
              label={"Confirm Password"}
              placeholder={"Re enter your password"}
              setter={setCnfPassword}
            />

            <h1>{msg}</h1>
            <button
              onClick={() =>
                handleSignup(uname, email, uID, Password, cnfPassword, setMsg)
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
