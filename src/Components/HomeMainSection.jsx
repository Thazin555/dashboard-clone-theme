
import Container from "./Container";
import Weekly from "./Weekly";
import SideApexChart from "./SideApexChart";

import HomeStatus from './HomeStatus'
import HomeUpperPart from './HomeUpperPart'

const HomeMainSection = () => {
  return (
    <Container>
      <HomeStatus />
        <HomeUpperPart/>
      

      <SideApexChart />
      <Weekly />
    </Container>
  );
};

  

export default HomeMainSection;
