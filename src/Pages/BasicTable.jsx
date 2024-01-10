import React from "react";
import TableHeader from "./TableHeader";
import TopProject from "./TopProject";
import BestProjects from "./BestProjects";
import EmployeeOfTheYear from "./EmployeeOfTheYear";

const BasicTable = () => {
  return (
    <div>
      <TableHeader />
      <TopProject />
      <BestProjects />
      <EmployeeOfTheYear />
    </div>
  );
};

export default BasicTable;
