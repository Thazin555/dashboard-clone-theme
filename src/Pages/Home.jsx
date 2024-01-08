import React, { useState } from "react";
import HomeMainSection from "../Components/HomeMainSection";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";

const Home = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    // console.log(menu)
  };
  return (
    <div>
      <SideBar menu={menu} />
      <NavBar handleMenu={handleMenu} menu={menu} />
      {/* <HomeMainSection /> */}
    </div>
  );
};

export default Home;
