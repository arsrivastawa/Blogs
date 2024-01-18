import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../assets/helperFunctions/DataProvider";

function CreateButton() {
  const User = useContext(DataContext);
  useEffect(() => {
    console.log("first");
    console.log(window.location.pathname);
  },);
  return (
    <>
      <Link to={User.userData.username ? "/create" : "/login"}>
        <div className="fixed rounded-full cursor-pointer dark:bg-primary-50 hover:scale-105 bg-primary-950 bottom-10 right-10 create-blog-button-container">
          <div className="w-16 aspect-square flex justify-center items-center">
            <i class="bi text-5xl dark:text-primary-950 text-primary-50 bi-plus"></i>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CreateButton;
