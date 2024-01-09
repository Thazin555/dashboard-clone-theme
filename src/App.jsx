import React, { useState } from "react";
import Home from "./Pages/Home";

const App = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    // console.log(menu)
  };
  return (
    <div>
      <Home menu={menu} handleMenu={handleMenu} />
    </div>
  );
};

export default App;
