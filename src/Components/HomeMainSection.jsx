import React from "react";
import Container from "./Container";
import Weekly from "./Weekly";
import SideApexChart from "./SideApexChart";
import SlideRegister from "./SlideRegister";

const HomeMainSection = () => {
  return (
    <Container>
      <SlideRegister/>
      <SideApexChart />
      <Weekly />
    </Container>
  );
};

export default HomeMainSection;
