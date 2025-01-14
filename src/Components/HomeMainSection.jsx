import React from "react";

import EmployeeSalary from "./EmployeeSalary";

import Container from "./Container";
import Weekly from "./Weekly";
import SideApexChart from "./SideApexChart";

import HomeStatus from "./HomeStatus";
import HomeUpperPart from "./HomeUpperPart";

const HomeMainSection = ({ menu }) => {
  return (
    <Container menu={menu}>
      <HomeStatus />
      <HomeUpperPart />
      <EmployeeSalary />
      {/* <SideApexChart /> */}
      <Weekly />
    </Container>
  );
};

export default HomeMainSection;
