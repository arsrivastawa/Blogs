import React, { useState } from "react";
import handleLogin from "../../assets/helperFunctions/AuthFunctions";
import Input from "../InputBox/InputBox";

function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <>
      <div className="login-container w-full h-screen pt-20 px-2 sm:flex sm:justify-center sm:items-center">
        <div className="min-w-[50%] h-full">
          <div className="heading">
            <h1 className="text-xl sm:text-2xl font-bold">Log In</h1>
          </div>
          <div className="w-full h-2/5 gap-4 flex flex-col justify-center items-center">
            <Input
              type="email"
              id={"email"}
              label={"Email"}
              placeholder={"Enter your email"}
              setter={setEmail}
            />
            <Input
              type="password"
              id={"password"}
              label={"Password"}
              placeholder={"Enter your password"}
              setter={setPassword}
            />
            <h1>{msg}</h1>
            <button
              onClick={() => handleLogin(email, Password, setMsg)}
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

export default Login;
