import React from "react";
import TableHeader from "../Components/TableHeader";
import TopProject from "../Components/TopProject";
import BestProjects from "../Components/BestProjects";
import EmployeeOfTheYear from "../Components/EmployeeOfTheYear";
import Container from "../Components/Container";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";

const BasicTable = ({ menu, handleMenu }) => {
  return (
    <div>
      <SideBar menu={menu} />
      <NavBar handleMenu={handleMenu} menu={menu} />
      <Container menu={menu}>
        <TableHeader />
        <TopProject />
        <BestProjects />
        <EmployeeOfTheYear />
      </Container>
    </div>
  );
};

export default BasicTable;
