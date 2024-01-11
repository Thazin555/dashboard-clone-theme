import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Aperture, Circle, Files, Table } from "@phosphor-icons/react";
import React, { useState } from "react";
import Logo from "../img/logo.svg";
import TableLogo from "../img/table.svg";
import RegisterLogo from "../img/register.svg";
import AnalyticalLogo from "../img/analytical.svg";
import AnalyticalLight from "../img/analytical_light.svg";
import FormLogo from "../img/form.svg";
import FormLight from "../img/form_light.svg";
import { Link, NavLink } from "react-router-dom";

const SideBar = ({ menu, handleMenu }) => {
  // console.log(menu);
  const [tableOpen, setTableOpen] = useState(false);
  const handleTable = () => {
    setTableOpen(!tableOpen);
  };

  const [loginOpen, setLoginOpen] = useState(false);
  const handleLogin = () => {
    setLoginOpen(!loginOpen);
  };

  const [registerOpen, setRegisterOpen] = useState(false);
  const handleRegister = () => {
    setRegisterOpen(!registerOpen);
  };

  const navListStyle = ({ isActive }) => {
    return {
      color: isActive ? "#fff" : "#2A3547",
      backgroundColor: isActive ? "#5d87ff" : "#fff",
      // stroke: isActive ? "white" : "red"
    };
  };


  return (
    <div className="group">
      <aside
        className={`xl:fixed xl:block lg:fixed lg:block md:hidden hidden xl:w-[270px] lg:w-[79px] h-screen  border border-gray-300 ${
          menu &&
          "xl:w-[79px] group-hover:w-[270px] group-hover:bg-white group-hover:z-50 duration-300 overflow-hidden"
        }`}
      >
        <div
          className={`flex flex-col h-screen ${
            menu && "xl:w-[270px] lg:w-[79px]"
          }`}
        >
          {/* header  */}
          <div className="p-5">
            {menu ? (
              <a href="">
                <img src={Logo} alt="" />
              </a>
            ) : (
              <>
                <a href="" className="xl:block lg:hidden">
                  <img
                    src="https://modernize-angular-main.netlify.app/assets/images/logos/dark-logo.svg"
                    alt=""
                  />
                </a>
                <a href="" className="xl:hidden lg:block">
                  <img src={Logo} alt="" />
                </a>
              </>
            )}
          </div>
          {/* body  */}
          <div
            className={`xl:px-6 lg:px-3 flex flex-col flex-grow overflow-y-auto ${
              menu && "overflow-y-visible ps-5"
            }`}
          >
            <div>
              <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block xl:text-left text-center">
                Home
              </span>
              <ul>
                <li className="xl:block lg:hidden">
                  <NavLink
                    to="/dashboard"
                    style={navListStyle}
                    className={`flex items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 active:bg-gray-200 rounded-md duration-200 ${
                      menu
                        ? "gap-8 group-hover:gap-[14px] w-14 -ms-[10px] ps-[18px] group-hover:w-full"
                        : "gap-[14px]"
                    } `}
                  >
                    <div>
                      <Aperture size={21} />
                    </div>
                    Analytical
                  </NavLink>
                </li>
                <li className="xl:hidden lg:block">
                  <NavLink
                    to="/dashboard"
                    style={navListStyle}
                    className={`py-3 flex justify-center hover:bg-gray-100 rounded-md duration-200 `}
                  >
                    <Aperture size={21} />
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block xl:text-left text-center">
                Forms
              </span>
              <ul>
                <li className="xl:block lg:hidden">
                  <NavLink
                    to="/form"
                    style={navListStyle}
                    href="#"
                    className={`flex items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-200 ${
                      menu
                        ? "gap-7 group-hover:gap-[14px] w-14 h-10 -ms-[10px] ps-[18px] text-nowrap group-hover:w-full"
                        : "gap-[14px]"
                    } `}
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-[22px] h-[22px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                      </svg>
                    </div>
                    Form Wizard
                  </NavLink>
                </li>
                <li className="xl:hidden lg:block">
                  <NavLink
                    to="/form"
                    style={navListStyle}
                    className={`py-3 flex justify-center hover:bg-gray-100 rounded-md duration-200`}
                  >
                    {/* <img className="w-[20px] h-[20px]" src={FormLogo} alt="" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block text-center xl:text-left">
                Tables
              </span>
              <ul>
                <li>
                  <div
                    className={`xl:flex lg:hidden items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-300 cursor-pointer active:bg-gray-300 active:duration-200 ${
                      menu ? "gap-7 group-hover:gap-[14px]" : "gap-[14px]"
                    }`}
                    onClick={handleTable}
                  >
                    {/* <Table size={20} /> */}
                    <img className="w-4 h-4" src={TableLogo} alt="" />
                    <span className="flex items-center flex-grow justify-between select-none">
                      Tables
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-3 h-w-3 stroke-2 duration-300 ${
                          tableOpen && "rotate-180"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={`xl:hidden lg:flex justify-center py-3 hover:bg-gray-100 rounded-md duration-300`}
                    onClick={handleTable}
                  >
                    {/* <Table size={20} /> */}
                    <img className="w-4 h-4" src={TableLogo} alt="" />
                  </div>
                  {tableOpen && (
                    <ul>
                      <li className="xl:block lg:hidden">
                        <NavLink
                          to="/tables"
                          style={navListStyle}
                          className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-200 ${
                            menu
                              ? "gap-7 px-4 w-14 h-10 -ms-[10px] ps-[22px] group-hover:w-full"
                              : "gap-5 px-2.5"
                          }`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <div>
                            <Circle size={11} />
                          </div>
                          Basic Table
                        </NavLink>
                      </li>
                      <li className="xl:hidden lg:block">
                        <NavLink
                          to="/tables"
                          style={navListStyle}
                          className={`flex items-center py-3.5 hover:bg-gray-100 rounded-md duration-300 gap-5 px-5`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <Circle size={11} />
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            <div>
              <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block xl:text-left text-center">
                Auth
              </span>
              <ul>
                <li>
                  <div
                    className={`xl:flex lg:hidden items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-300 cursor-pointer active:bg-gray-300 active:duration-200 ${
                      menu ? "gap-7 group-hover:gap-[14px]" : "gap-[14px]"
                    }`}
                    onClick={handleLogin}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[22px] h-[22px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                      />
                    </svg>

                    <span className="flex items-center flex-grow justify-between select-none">
                      Login
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-3 h-w-3 stroke-2 duration-300 ${
                          loginOpen && "rotate-180"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={`xl:hidden lg:flex justify-center py-3 hover:bg-gray-100 rounded-md duration-300 cursor-pointer active:bg-gray-300 active:duration-200`}
                    onClick={handleLogin}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[22px] h-[22px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                      />
                    </svg>
                  </div>
                  {loginOpen && (
                    <ul>
                      <li className="xl:block lg:hidden">
                        <NavLink
                          to="/"
                          style={navListStyle}
                          className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-200 ${
                            menu
                              ? "gap-8 px-4 group-hover:gap-4"
                              : "gap-5 px-3.5"
                          }`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <Circle size={11} />
                          Side Login
                        </NavLink>
                      </li>
                      <li className="xl:hidden lg:block">
                        <NavLink
                          to="/"
                          style={navListStyle}
                          className={`flex justify-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-300`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <Circle size={11} />
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <div
                    className={`xl:flex lg:hidden items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-300 cursor-pointer active:bg-gray-300 active:duration-200 ${
                      menu ? "gap-7 group-hover:gap-[14px]" : "gap-[14px]"
                    }`}
                    onClick={handleRegister}
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                      />
                    </svg> */}
                    <img
                      className="w-[18px] h-[18px]"
                      src={RegisterLogo}
                      alt=""
                    />

                    <span className="flex items-center flex-grow justify-between select-none">
                      Register
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-3 h-w-3 stroke-2 duration-300 ${
                          registerOpen && "rotate-180"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={`xl:hidden lg:flex justify-center py-3 hover:bg-gray-100 rounded-md duration-300 cursor-pointer active:bg-gray-300 active:duration-200`}
                    onClick={handleRegister}
                  >
                    <img
                      className="w-[18px] h-[18px]"
                      src={RegisterLogo}
                      alt=""
                    />
                  </div>
                  {registerOpen && (
                    <ul>
                      <li className="xl:block lg:hidden">
                        <NavLink
                          to="/register"
                          style={navListStyle}
                          className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-200 ${
                            menu
                              ? "gap-8 px-4 group-hover:gap-4"
                              : "gap-5 px-3.5"
                          }`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <Circle size={11} />
                          Side Register
                        </NavLink>
                      </li>
                      <li className="xl:hidden lg:block">
                        <NavLink
                          to="/register"
                          style={navListStyle}
                          href=""
                          className={`flex justify-center py-3 hover:bg-gray-100 rounded-md duration-300`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <Circle size={11} />
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {/* footer  */}
          <div
            className={`p-6 mt-auto lg:hidden xl:block ${
              menu && "xl:hidden group-hover:block"
            }`}
          >
            <div className="p-4 bg-[#e8f7ff] rounded-lg flex items-center gap-[30px]">
              <div className="flex items-center gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://modernize-angular-main.netlify.app/assets/images/profile/user-1.jpg"
                  alt=""
                />
                <div className="font-san text-xs text-[#2a3547]">
                  <p className="text-sm font-bold">Mathew</p>
                  <p>Designer</p>
                </div>
              </div>
              <Link to="/">
                <div className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[18px] h-[16px] text-[#5d87ff] stroke-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* md & mobile device  */}
      {menu && (
        <aside
          className={`fixed block  xl:hidden  w-[270px] h-screen  border border-gray-300 bg-white z-50`}
        >
          <div className={`flex flex-col h-screen ${menu && "w-[270px]"}`}>
            {/* header  */}
            <div className="p-5">
              {/* {menu ? (
                <img src={Logo} alt="" />
              ) : (
                <img
                  src="https://modernize-angular-main.netlify.app/assets/images/logos/dark-logo.svg"
                  alt=""
                />
              )} */}
              <a href="">
                <img
                  src="https://modernize-angular-main.netlify.app/assets/images/logos/dark-logo.svg"
                  alt=""
                />
              </a>
            </div>
            {/* body  */}
            <div className={`px-6 flex flex-col flex-grow overflow-y-auto`}>
              <div>
                <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block">
                  Home
                </span>
                <ul>
                  <li>
                    <NavLink
                      to="/dashboard"
                      style={navListStyle}
                      onClick={handleMenu}
                      className={`flex items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-300 gap-[14px]`}
                    >
                      <Aperture size={21} />
                      Analytical
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block">
                  Forms
                </span>
                <ul>
                  <li>
                    <NavLink
                      style={navListStyle}
                      to="/form"
                      onClick={handleMenu}
                      className={`flex items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-300 gap-[14px]`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                      Form Wizard
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block">
                  Tables
                </span>
                <ul>
                  <li>
                    <div
                      href=""
                      className={`flex items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-300 cursor-pointer active:bg-gray-300 active:duration-200 gap-[14px]`}
                      onClick={handleTable}
                    >
                      {/* <Table size={20} /> */}
                      <img className="w-4 h-4" src={TableLogo} alt="" />
                      <span className="flex items-center flex-grow justify-between select-none">
                        Tables
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`w-3 h-w-3 stroke-2 duration-300 ${
                            tableOpen && "rotate-180"
                          }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>
                    {tableOpen && (
                      <ul>
                        <li>
                          <NavLink
                            style={navListStyle}
                            to="/tables"
                            onClick={handleMenu}
                            className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-300 gap-5 px-2.5`}
                          >
                            {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                            <Circle size={11} />
                            Basic Table
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
              <div>
                <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block">
                  Auth
                </span>
                <ul>
                  <li>
                    <div
                      href=""
                      className={`flex items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-300 cursor-pointer active:bg-gray-300 active:duration-200 gap-[14px]`}
                      onClick={handleLogin}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-[22px] h-[22px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                        />
                      </svg>

                      <span className="flex items-center flex-grow justify-between select-none">
                        Login
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`w-3 h-w-3 stroke-2 duration-300 ${
                            loginOpen && "rotate-180"
                          }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>
                    {loginOpen && (
                      <ul>
                        <li>
                          <NavLink
                            style={navListStyle}
                            to="/"
                            className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-300 gap-5 px-3.5`}
                          >
                            {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                            <Circle size={11} />
                            Side Login
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div
                      href=""
                      className={`flex items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-300 cursor-pointer active:bg-gray-300 active:duration-200 gap-[14px]`}
                      onClick={handleRegister}
                    >
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                        />
                      </svg> */}
                      <img
                        className="w-[18px] h-[18px]"
                        src={RegisterLogo}
                        alt=""
                      />

                      <span className="flex items-center flex-grow justify-between select-none">
                        Register
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`w-3 h-w-3 stroke-2 duration-300 ${
                            registerOpen && "rotate-180"
                          }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>
                    {registerOpen && (
                      <ul>
                        <li>
                          <NavLink
                            style={navListStyle}
                            to="/register"
                            className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-300 gap-5 px-3.5`}
                          >
                            {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                            <Circle size={11} />
                            Side Register
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            {/* footer  */}
            <div className={`p-6 mt-auto`}>
              <div className="p-4 bg-[#e8f7ff] rounded-lg flex items-center gap-[30px]">
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://modernize-angular-main.netlify.app/assets/images/profile/user-1.jpg"
                    alt=""
                  />
                  <div className="font-san text-xs text-[#2a3547]">
                    <p className="text-sm font-bold">Mathew</p>
                    <p>Designer</p>
                  </div>
                </div>
                <Link to="/">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[18px] h-[16px] text-[#5d87ff] stroke-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default SideBar;
