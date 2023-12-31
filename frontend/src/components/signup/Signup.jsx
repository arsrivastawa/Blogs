import React, { useContext, useState } from "react";
import { handleSignup } from "../../assets/helperFunctions/AuthFunctions";
import Input from "../InputBox/InputBox";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../assets/helperFunctions/DataProvider";

function Signup() {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [uID, setUID] = useState("");
  const [Password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [msgToggler, setMsgToggler] = useState(false);
  const [msg, setMsg] = useState("");
  const User = useContext(DataContext);
  const navigate = useNavigate();
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
            <div
              role="alert"
              className={`alert bg-neutral ${msgToggler ? "" : "hidden"} w-3/5`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current shrink-0 h-6 w-6"
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
              onClick={() => {
                handleSignup(
                  uname,
                  email,
                  uID,
                  Password,
                  cnfPassword,
                  setMsg,
                  setMsgToggler,
                  navigate,
                  User.setUser
                );
                console.log(msgToggler);
              }}
              title={"Submit"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
