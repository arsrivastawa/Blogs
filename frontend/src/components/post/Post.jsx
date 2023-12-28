import React from "react";
import "./Post.css";

function Post() {
  return (
    <>
      <div className="post-container mb-3 w-full h-32 grid">
        <div className="post-image flex items-center">
          <img
            src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="post-img"
          />
        </div>
        <div className="details flex flex-col overflow-hidden">
          <div>
            <h1 className="post-title lg:text-lg font-bold">
              Full-House battery backup coming later this year
            </h1>
            <h1 className="author lg:text-lg font-bold text-slate-500">
              <i class="bi bi-pen"></i>Aditya Ranjan
            </h1>
          </div>
          <h1 className="post-description-preview lg:text-lg text-slate-500 overflow-hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti
            facilis nam, eum consectetur minus exercitationem rerum est ipsam
            fugiat dolor similique asperiores dolores facere.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Post;
