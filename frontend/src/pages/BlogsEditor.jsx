import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import "react-quill/dist/quill.snow.css"; // Import the styles
import ReactQuill from "react-quill";
import axios from "axios";
import { DataContext } from "../assets/helperFunctions/DataProvider";
import { useNavigate } from "react-router-dom";
import Input from "../components/InputBox/InputBox";
import Button from "../components/Button/Button";

const Editor = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [brief, setBrief] = useState("");
  const User = useContext(DataContext);
  const navigate = useNavigate();

  function createNewPost(e) {
    e.preventDefault();
    console.log(file[0]);

    const data = new FormData();
    data.append("title", title);
    data.append("brief", brief);
    data.append("content", content);
    data.append("file", file);
    axios
      .post("http://localhost:3000/createPost", data)
      .then((res) => console.log(res.data));
  }

  let token = localStorage.getItem("token");
  if (token) {
    if (!User.userData.username) {
      axios
        .post("http://localhost:3000/user", { token })
        .then((res) => {
          console.table(res.data);
          User.setUser(res.data);
          console.log(User.userData);
        })
        .catch((err) => {});
    }
  } else {
    // setTimeout(() => {
    //   navigate("/");
    // }, 2000);
    // return (
    //   <div className="w-full dark:bg-gray-900 text-primary-950 dark:text-primary-50 h-screen text-center flex justify-center items-center text-2xl font-bold">
    //     Must Login To Continue
    //     <br />
    //     Redirecting...
    //   </div>
    // );
  }

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  return (
    <>
      <div className="w-full min-h-screen dark:bg-gray-900">
        <Input
          label={"Title"}
          id={"Title"}
          type={"text"}
          placeholder={"Your Blogs Title"}
          setter={setTitle}
        />
        <Input
          label={"Description"}
          id={"Description"}
          type="text"
          placeholder={"A brief description of your blog"}
          setter={setBrief}
        />
        <div className="mb-2">
          <label
            htmlFor="File"
            className={`File block mb-1 text-sm font-medium text-gray-900 dark:text-white`}
          >
            Blog Cover Image
          </label>
          <input
            onChange={(e) => {
              e.preventDefault();
              setFile(e.target.files[0]);
            }}
            type="file"
            name="File"
            id="File"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Upload your Blog's Cover"
          />
        </div>
        <ReactQuill
          className="bg-primary-50"
          modules={modules}
          formats={formats}
          value={content}
          onChange={(blog) => {
            setContent(blog);
          }}
        />
        <Button spaceY={4} onClick={(e) => createNewPost(e)} title={"Post"} />
      </div>
    </>
  );
};

export default Editor;
