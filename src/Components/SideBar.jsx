import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Circle, Files, Table } from "@phosphor-icons/react";
import React, { useState } from "react";
import Logo from "../img/logo.svg";
import TableLogo from "../img/table.svg";
import RegisterLogo from "../img/register.svg";
import AnalyticalLogo from "../img/analytical.svg";
import AnalyticalLight from "../img/analytical_light.svg";
import FormLogo from "../img/form.svg";
import FormLight from "../img/form_light.svg";
import { Link } from "react-router-dom";

const SideBar = ({ menu }) => {
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

  // const [isActive, setIsActive] = useState(true);
  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item === selectedItem ? null : item);
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
              <img src={Logo} alt="" />
            ) : (
              <>
                <span className="xl:block lg:hidden">
                  <img
                    src="https://modernize-angular-main.netlify.app/assets/images/logos/dark-logo.svg"
                    alt=""
                  />
                </span>
                <span className="xl:hidden lg:block">
                  <img src={Logo} alt="" />
                </span>
              </>
            )}
          </div>
          {/* body  */}
          <div
            className={`px-6 flex flex-col flex-grow overflow-y-auto ${
              menu && "overflow-y-visible ps-5"
            }`}
          >
            <div>
              <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block">
                Home
              </span>
              <ul>
                <li className="xl:block lg:hidden">
                  <Link to="/dashboard"
                    onClick={() => handleItemClick("app")}
                    className={`flex items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-200 ${
                      menu ? "gap-8 group-hover:gap-[14px] w-14 -ms-[10px] ps-[18px] group-hover:w-full" : "gap-[14px]"
                    } ${
                      selectedItem === "app" &&
                      "bg-[#5d87ff] text-white hover:bg-[#5d87ff] hover:text-white"
                    }`}
                  >
                    {selectedItem === "app" ? (
                      <img className="w-5 h-5" src={AnalyticalLight} alt="" />
                    ) : (
                      <img className="w-5 h-5" src={AnalyticalLogo} alt="" />
                    )}
                    Analytical
                  </Link>
                </li>
                <li className="xl:hidden lg:block">
                  <Link
                    to="/dashboard"
                    onClick={() => handleItemClick("app")}
                    className={`py-3 flex justify-center hover:bg-gray-100 rounded-md duration-200 `}
                  >
                    <img className="w-7 h-7" src={AnalyticalLogo} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block">
                Forms
              </span>
              <ul>
                <li className="xl:block lg:hidden">
                  <a
                    onClick={() => handleItemClick("form")}
                    href="#"
                    className={`flex items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-200 ${
                      menu ? "gap-7 group-hover:gap-[14px]" : "gap-[14px]"
                    } ${
                      selectedItem === "form" &&
                      "bg-[#5d87ff] text-white hover:bg-[#5d87ff] hover:text-white"
                    }`}
                  >
                    {selectedItem === "form" ? (
                      <img
                        className="w-[22px] h-[22px]"
                        src={FormLight}
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-[22px] h-[22px]"
                        src={FormLogo}
                        alt=""
                      />
                    )}
                    {/* <Files size={20} /> */}
                    Form Wizard
                  </a>
                </li>
                <li className="xl:hidden lg:block">
                  <a
                    href="#"
                    className={`py-3 flex justify-center hover:bg-gray-100 rounded-md duration-200`}
                  >
                    {/* <Files size={20} /> */}
                    <img className="w-[22px] h-[22px]" src={FormLogo} alt="" />
                  </a>
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
                    className={`xl:flex lg:hidden items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-300 cursor-pointer active:bg-gray-300 active:duration-200 ${
                      menu ? "gap-7 group-hover:gap-[14px]" : "gap-[14px]"
                    }`}
                    onClick={handleTable}
                  >
                    {/* <Table size={20} /> */}
                    <img className="w-5 h-5" src={TableLogo} alt="" />
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
                    <img className="w-5 h-5" src={TableLogo} alt="" />
                  </div>
                  {tableOpen && (
                    <ul>
                      <li className="xl:block lg:hidden">
                        <Link 
                          to="/tables"
                          onClick={() => handleItemClick("table")}
                          className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-200 ${
                            menu
                              ? "gap-8 px-4 group-hover:gap-4"
                              : "gap-5 px-2.5"
                          } ${
                            selectedItem === "table" &&
                            "bg-[#5d87ff] text-white hover:bg-[#5d87ff] hover:text-white"
                          }`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <Circle size={11} />
                          Basic Table
                        </Link>
                      </li>
                      <li className="xl:hidden lg:block">
                        <Link
                          to="/tables"
                          className={`flex items-center py-3 hover:bg-gray-100 rounded-md duration-300 gap-5 px-2.5`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <Circle size={11} />
                        </Link>
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
                      className="w-6 h-6"
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
                      className="w-6 h-6"
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
                        <Link
                          to="/"
                          onClick={() => handleItemClick("login")}
                          className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-200 ${
                            menu
                              ? "gap-8 px-4 group-hover:gap-4"
                              : "gap-5 px-3.5"
                          } ${
                            selectedItem === "login" &&
                            "bg-[#5d87ff] text-white hover:bg-[#5d87ff] hover:text-white"
                          }`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <Circle size={11} />
                          Side Login
                        </Link>
                      </li>
                      <li className="xl:hidden lg:block">
                        <Link
                          to="/"
                          className={`flex justify-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-300`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <Circle size={11} />
                        </Link>
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
                    <img className="w-5 h-5" src={RegisterLogo} alt="" />

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
                        d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                      />
                    </svg>
                  </div>
                  {registerOpen && (
                    <ul>
                      <li className="xl:block lg:hidden">
                        <Link
                          to="/register"
                          onClick={() => handleItemClick("register")}
                          className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-200 ${
                            menu
                              ? "gap-8 px-4 group-hover:gap-4"
                              : "gap-5 px-3.5"
                          } ${
                            selectedItem === "register" &&
                            "bg-[#5d87ff] text-white hover:bg-[#5d87ff] hover:text-white"
                          }`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <Circle size={11} />
                          Side Register
                        </Link>
                      </li>
                      <li className="xl:hidden lg:block">
                        <Link
                          to="/register"
                          href=""
                          className={`flex justify-center py-3 hover:bg-gray-100 rounded-md duration-300`}
                        >
                          {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                          <Circle size={11} />
                        </Link>
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
            </div>
          </div>
        </div>
      </aside>

      {/* md & mobile device  */}
      {menu && (
        <aside
          className={`fixed block xl:hidden  w-[270px] h-screen  border border-gray-300 bg-white z-50`}
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
              <img
                src="https://modernize-angular-main.netlify.app/assets/images/logos/dark-logo.svg"
                alt=""
              />
            </div>
            {/* body  */}
            <div className={`px-6 flex flex-col flex-grow overflow-y-auto`}>
              <div>
                <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block">
                  Home
                </span>
                <ul>
                  <li>
                    <Link
                      to="/dashboard"
                      className={`flex items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-300 gap-[14px]`}
                    >
                      {/* <svg
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
                          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg> */}
                      <img className="w-5 h-5" src={AnalyticalLogo} alt="" />
                      Analytical
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="uppercase font-san text-xs font-bold pt-6 pb-3 block">
                  Forms
                </span>
                <ul>
                  <li>
                    <a
                      href=""
                      className={`flex items-center font-san text-sm px-2.5 py-3 hover:bg-gray-100 rounded-md duration-300 gap-[14px]`}
                    >
                      {/* <Files size={20} /> */}
                      <img
                        className="w-[22px] h-[22px]"
                        src={FormLogo}
                        alt=""
                      />
                      Form Wizard
                    </a>
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
                      <img className="w-5 h-5" src={TableLogo} alt="" />
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
                          <Link
                            to="/tables"
                            className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-300 gap-5 px-2.5`}
                          >
                            {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                            <Circle size={11} />
                            Basic Table
                          </Link>
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
                        className="w-6 h-6"
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
                          <Link
                            to="/"
                            className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-300 gap-5 px-3.5`}
                          >
                            {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                            <Circle size={11} />
                            Side Login
                          </Link>
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
                      <img className="w-5 h-5" src={RegisterLogo} alt="" />

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
                          <Link
                            to="/register"
                            className={`flex items-center font-san text-sm py-3 hover:bg-gray-100 rounded-md duration-300 gap-5 px-3.5`}
                          >
                            {/* <FontAwesomeIcon className="w-2 h-2" icon={faCircle} /> */}
                            <Circle size={11} />
                            Side Register
                          </Link>
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
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default SideBar;
