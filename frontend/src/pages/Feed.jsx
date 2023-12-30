import React from "react";
import Post from "../components/post/Post";

function Feed() {
  return (
    <>
      <div className="feed-container pt-[70px] flex flex-col items-center justify-center">
        <Post />
      </div>
    </>
  );
}

export default Feed;
