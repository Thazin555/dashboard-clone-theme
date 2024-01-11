import React from "react";

const Container = ({ children, menu }) => {
  return (
    <div className={`wrap ${menu && "min-wrap"}`}>
      <div className=" max-w-[1200px] p-[24px] mx-auto">{children}</div>
    </div>
  );
};

export default Container;
