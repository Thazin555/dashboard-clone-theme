import React, { useState } from "react";
import HomeMainSection from "../Components/HomeMainSection";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";

const Home = ({ menu, handleMenu }) => {
  return (
    <div>
      <SideBar menu={menu} />
      <NavBar handleMenu={handleMenu} menu={menu} />
      <HomeMainSection  menu={menu} />
    </div>
  );
};

export default Home;
