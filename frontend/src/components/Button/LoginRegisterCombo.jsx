import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function LoginRegisterCombo() {
  return (
    <>
      <div className="flex flex-row gap-2 sm:gap-4 justify-between items-center">
        <div className="login-btn">
          <Link to={"/login"}>
            <Button title={"Log In"} />
          </Link>
        </div>
        <div className="signup-btn">
          <Link to={"/signup"}>
            <Button title={"Register"} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginRegisterCombo;
