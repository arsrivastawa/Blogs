import React, { useState, useEffect, useLayoutEffect } from "react";
import "quill/dist/quill.snow.css"; // Import the styles
import Quill from "quill";

const Editor = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    var toolbarOptions = [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
    ];
    const quill = new Quill("#editor", {
      theme: "snow",
      modules: {
        toolbar: toolbarOptions,
      },
    });

    quill.on("text-change", () => {
      setContent(quill.root.innerHTML);
    });
  }, []);

  return (
    <div>
      <div id="toolbar" className="fillpr" style={{ width: "600px" }} />
      <div id="editor" style={{ height: "300px" }} />
      <div>
        <h2>Content:</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Editor;
