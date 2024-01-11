import React, { useState } from "react";
import Home from "./Pages/Home";
import Test from "./Components/Test";

const App = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    // console.log(menu)
  };
  return (
    <div>
      <Home menu={menu} handleMenu={handleMenu} />
      {/* <Test />   */}
    </div>
  );
};

export default App;
