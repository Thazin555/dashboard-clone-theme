import React from "react";
import FormMainSection from "../Components/FormMainSection";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";

const Form = ({ menu, handleMenu }) => {
  return (
    <div>
      <SideBar menu={menu} />
      <NavBar handleMenu={handleMenu} menu={menu} />
      <FormMainSection menu={menu} />
    </div>
  );
};

export default Form;
