import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Feed from "./Feed";
import axios from "axios";

function Home() {
  return (
    <>
      <Feed />
    </>
  );
}

export default Home;
