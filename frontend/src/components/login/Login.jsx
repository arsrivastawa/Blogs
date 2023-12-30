import React, { useState } from "react";
import handleLogin from "../../assets/helperFunctions/AuthFunctions";
import Input from "../InputBox/InputBox";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [msgToggler, setMsgToggler] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
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
            <div
              role="alert"
              className={`alert bg-neutral ${msgToggler ? "" : "hidden"} w-3/5`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                color="lightgrey"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-slate-200">{msg}</span>
            </div>
            <Button
              title={"Submit"}
              onClick={() =>
                handleLogin(email, Password, setMsg, setMsgToggler, navigate)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
