import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/blogger.png";
import handleLogin from "../../assets/helperFunctions/AuthFunctions";
import Input from "../InputBox/InputBox";
import Button from "../Button/Button";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { DataContext } from "../../assets/helperFunctions/DataProvider";
import Alert from "../alert/Alert";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [msgToggler, setMsgToggler] = useState(false);
  const [msg, setMsg] = useState("");
  const User = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token"))
      setTimeout(() => {
        navigate("/");
      }, 2000);
  });
  if (localStorage.getItem("token")) {
    console.log(localStorage.getItem("token"));
    return (
      <div className="w-full dark:bg-gray-900 text-primary-950 dark:text-primary-50 h-screen text-center flex justify-center items-center text-2xl font-bold">
        Yoy Are Already Logged In
        <br />
        Redirecting...
      </div>
    );
  }
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <motion.div
          key={useLocation().pathname}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.1, ease: "linear" }}
          className="flex flex-col items-center justify-center px-6 py-6 mx-auto h-screen lg:py-0"
        >
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src={Logo} alt="logo" />
            Dev-Blogs
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
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

                <Alert messageToggler={msgToggler} message={msg} />
                <div className="flex w-full justify-center items-center">
                  <Button
                    title={"Log In"}
                    onClick={() =>
                      handleLogin(
                        email,
                        Password,
                        setMsg,
                        setMsgToggler,
                        navigate,
                        User.setUser
                      )
                    }
                  />
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Login;
