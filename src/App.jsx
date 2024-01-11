import React, { useState } from "react";
import Home from "./Pages/Home";
import BasicTable from "./Pages/BasicTable";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Route, Routes } from "react-router-dom";
import Form from './Pages/Form'
import "flowbite";
const App = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    // console.log(menu)
  };
  return (
    <Routes>
      <Route path="/dashboard" element={<Home menu={menu} handleMenu={handleMenu} />}></Route>
      <Route path="/form" element={<Form menu={menu} handleMenu={handleMenu} />}></Route>
      <Route path="/tables" element={<BasicTable menu={menu} handleMenu={handleMenu} />}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default App;
