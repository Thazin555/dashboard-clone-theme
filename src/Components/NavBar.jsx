import {
  Bell,
  DotsNine,
  EnvelopeSimple,
  List,
  MagnifyingGlass,
  Question,
  User,
} from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import FlagIcon from "../img/flag.svg";
import FlagEs from "../img/flag-es.svg";
import FlagFr from "../img/flag-fr.svg";
import FlagCh from "../img/flag-ch.svg";
import { Link } from "react-router-dom";

const NavBar = ({ handleMenu, menu }) => {
  const [openApp, setOpenApp] = useState(false);
  const dropdownRef = useRef(null);

  const handleApp = () => {
    setOpenApp(!openApp);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenApp(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [openProfile, setOpenProfile] = useState(false);
  const profileRef = useRef(null);

  const handleProfile = () => {
    setOpenProfile(!openProfile);
  };

  const handleClickOutsideProfile = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setOpenProfile(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideProfile);
    return () => {
      document.removeEventListener("click", handleClickOutsideProfile);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const [offsetDistance, setOffsetDistance] = useState("");
  useEffect(() => {
    const handleResize = () => {
      setOffsetDistance(window.innerWidth <= 768 ? "-110" : "-50");
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className={`wrap ${menu && "min-wrap"}  h-[70px] px-4`}>
        <div className="h-full flex items-center justify-between">
          {/* left side  */}
          <div className="h-full flex items-center">
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-400"
              onClick={handleMenu}
            >
              <List size={20} />
            </button>
            <button
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-400"
            >
              <MagnifyingGlass size={20} />
            </button>
            <div>
              <ul className="xl:flex gap-1 font-san text-sm md:hidden hidden">
                <li
                  ref={dropdownRef}
                  className="px-2 py-1.5 rounded-lg hover:bg-gray-200"
                >
                  <button
                    className="flex gap-1 items-center"
                    onClick={handleApp}
                  >
                    Apps
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[13px] h-[13px] stroke-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  {/* app dropdown  */}
                  {openApp && (
                    <div className="shadow rounded w-[830px] absolute top-14 left-[120px] z-50 bg-white">
                      <div className="grid grid-cols-12">
                        <div className="col-span-8  grid grid-cols-12">
                          <div className="col-span-6 p-9 ps-8 pb-0">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-chat.svg"
                                  alt=""
                                />
                              </div>
                              <a
                                href=""
                                className="font-san text-[#2a3547] block"
                              >
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Chat Application
                                </h5>
                                <span className="text-xs">
                                  Messages & Emails
                                </span>
                              </a>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-invoice.svg"
                                  alt=""
                                />
                              </div>
                              <a
                                href=""
                                className="font-san text-[#2a3547] block"
                              >
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Invoice App
                                </h5>
                                <span className="text-xs">
                                  Get latest invoice
                                </span>
                              </a>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-mobile.svg"
                                  alt=""
                                />
                              </div>
                              <a
                                href=""
                                className="font-san text-[#2a3547] block"
                              >
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Conatct Application
                                </h5>
                                <span className="text-xs">
                                  2 Unsaved Contacts
                                </span>
                              </a>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-message-box.svg"
                                  alt=""
                                />
                              </div>
                              <a
                                href=""
                                className="font-san text-[#2a3547] block"
                              >
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Email App
                                </h5>
                                <span className="text-xs">
                                  Messages & Emails
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="col-span-6 pt-9 ps-4 pe-8">
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-cart.svg"
                                  alt=""
                                />
                              </div>
                              <a
                                href=""
                                className="font-san text-[#2a3547] block"
                              >
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Todo App
                                </h5>
                                <span className="text-xs">
                                  Messages & Emails
                                </span>
                              </a>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-date.svg"
                                  alt=""
                                />
                              </div>
                              <a
                                href=""
                                className="font-san text-[#2a3547] block"
                              >
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Calendar App
                                </h5>
                                <span className="text-xs">Get Dates</span>
                              </a>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-lifebuoy.svg"
                                  alt=""
                                />
                              </div>
                              <a
                                href=""
                                className="font-san text-[#2a3547] block"
                              >
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Tickets App
                                </h5>
                                <span className="text-xs">
                                  Create new ticket
                                </span>
                              </a>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-application.svg"
                                  alt=""
                                />
                              </div>
                              <a
                                href=""
                                className="font-san text-[#2a3547] block"
                              >
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Courses
                                </h5>
                                <span className="text-xs">
                                  Create new course
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="col-span-12 border-t p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex gap-2 items-center text-[#2a3547] font-san text-base font-semibold">
                                <Question size={22} />
                                <h2>Frequently Asked Questions</h2>
                              </div>
                              <button className="bg-[#5d87ff] text-white font-san text-sm px-4 py-2 rounded">
                                Check
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-4 px-4 border-l">
                          <div className="px-4 py-8">
                            <h3 className="font-san font-semibold text-lg text-[#2a3547] mb-4">
                              Quick Links
                            </h3>
                            <ul>
                              <li className="font-san text-sm font-semibold text-[#2a3547] py-2 hover:text-[#5d87ff]">
                                <a href="">Pricing Page</a>
                              </li>
                              <li className="font-san text-sm font-semibold text-[#2a3547] py-2 hover:text-[#5d87ff]">
                                <a href="">Authentication Design</a>
                              </li>
                              <li className="font-san text-sm font-semibold text-[#2a3547] py-2 hover:text-[#5d87ff]">
                                <a href="">Register Now</a>
                              </li>
                              <li className="font-san text-sm font-semibold text-[#2a3547] py-2 hover:text-[#5d87ff]">
                                <a href="">404 Error</a>
                              </li>
                              <li className="font-san text-sm font-semibold text-[#2a3547] py-2 hover:text-[#5d87ff]">
                                <a href="">Notes App</a>
                              </li>
                              <li className="font-san text-sm font-semibold text-[#2a3547] py-2 hover:text-[#5d87ff]">
                                <a href="">Emplyee App</a>
                              </li>
                              <li className="font-san text-sm font-semibold text-[#2a3547] py-2 hover:text-[#5d87ff]">
                                <a href="">Todo Application</a>
                              </li>
                              <li className="font-san text-sm font-semibold text-[#2a3547] py-2 hover:text-[#5d87ff]">
                                <a href="">Treeview</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li className="px-3 py-1.5 rounded-lg hover:bg-gray-200">
                  <a href="">Chat</a>
                </li>
                <li className="px-2 py-1.5 rounded-lg hover:bg-gray-200">
                  <a href="">Calendar</a>
                </li>
                <li className="px-3 py-1.5 rounded-lg hover:bg-gray-200">
                  <a href="">Email</a>
                </li>
              </ul>
            </div>
          </div>
          {/* right side  */}
          <div className="flex items-center">
            {/* link  */}
            <button
              data-drawer-target="drawer-right-example"
              data-drawer-show="drawer-right-example"
              data-drawer-placement="right"
              aria-controls="drawer-right-example"
              className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center xl:hidden"
            >
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/external-dots-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
              />
              {/* <DotsNine size={22} /> */}
            </button>
            {/* link drawer  */}
            <div
              id="drawer-right-example"
              className="fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-80"
              tabIndex={-1}
              aria-labelledby="drawer-right-label"
            >
              <div>
                <img
                  className="p-5"
                  src="https://modernize-angular-main.netlify.app/assets/images/logos/dark-logo.svg"
                  alt=""
                />
                {/* close btn  */}
                <button
                  type="button"
                  data-drawer-hide="drawer-right-example"
                  aria-controls="drawer-right-example"
                  className="hover:bg-gray-200 text-gray-900 text-sm w-12 h-12 rounded-full absolute top-2.5 end-2.5 inline-flex items-center justify-center"
                >
                  <svg
                    className="w-2.5 h-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="px-6 font-san">
                <ul>
                  <li className="">
                    <button
                      onClick={handleIsOpen}
                      className="flex items-center justify-between w-full text-base font-semibold text-black/70 pt-4 pb-3"
                    >
                      Apps
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`w-[13px] h-[13px] stroke-2 stroke-black duration-300 ${
                          isOpen && "rotate-180"
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="pb-4">
                        <ul>
                          <li className="mb-6">
                            <a href="#" className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-chat.svg"
                                  alt=""
                                />
                              </div>
                              <div>
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Chat Application
                                </h5>
                                <span className="text-xs">
                                  Messages & Emails
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="mb-6">
                            <a href="#" className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-cart.svg"
                                  alt=""
                                />
                              </div>
                              <div className="text-[#2A3547]">
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  eCommerce App
                                </h5>
                                <span className="text-xs">Buy a Product</span>
                              </div>
                            </a>
                          </li>
                          <li className="mb-6">
                            <a href="#" className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-invoice.svg"
                                  alt=""
                                />
                              </div>
                              <div className="text-[#2A3547]">
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Invoice App
                                </h5>
                                <span className="text-xs">
                                  Get latest invoice
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="mb-6">
                            <a href="#" className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-date.svg"
                                  alt=""
                                />
                              </div>
                              <div className="text-[#2A3547]">
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Calendar App
                                </h5>
                                <span className="text-xs">Get Dates</span>
                              </div>
                            </a>
                          </li>
                          <li className="mb-6">
                            <a href="#" className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-mobile.svg"
                                  alt=""
                                />
                              </div>
                              <div className="text-[#2A3547]">
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Contact Application
                                </h5>
                                <span className="text-xs">
                                  2 Unsaved Contacts
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="mb-6">
                            <a href="#" className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-lifebuoy.svg"
                                  alt=""
                                />
                              </div>
                              <div className="text-[#2A3547]">
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Tickets App
                                </h5>
                                <span className="text-xs">
                                  Create new ticket
                                </span>
                              </div>
                            </a>
                          </li>
                          <li className="mb-6">
                            <a href="#" className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-message-box.svg"
                                  alt=""
                                />
                              </div>
                              <div className="text-[#2A3547]">
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Email App
                                </h5>
                                <span className="text-xs">Get new emails</span>
                              </div>
                            </a>
                          </li>
                          <li className="mb-6">
                            <a href="#" className="flex items-center gap-4">
                              <div className="w-10 h-10 bg-[#ecf2ff] rounded-md flex items-center justify-center">
                                <img
                                  src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-dd-application.svg"
                                  alt=""
                                />
                              </div>
                              <div className="text-[#2A3547]">
                                <h5 className="text-sm font-semibold hover:text-blue-500">
                                  Courses
                                </h5>
                                <span className="text-xs">
                                  Create new course
                                </span>
                              </div>
                            </a>
                          </li>
                        </ul>
                        <div className="font-san text-[#2a3547] font-semibold">
                          <h3 className="font-san font-semibold text-lg text-[#2a3547] mb-4">
                            Quick Links
                          </h3>
                          <ul>
                            <li className="py-2 hover:text-[#5d87ff]">
                              <a href="#" className="text-sm block">
                                Pricing Page
                              </a>
                            </li>
                            <li className="py-2 hover:text-[#5d87ff]">
                              <a href="#" className="text-sm block">
                                Authentication Design
                              </a>
                            </li>
                            <li className="py-2 hover:text-[#5d87ff]">
                              <a href="#" className="text-sm block">
                                Register Now
                              </a>
                            </li>
                            <li className="py-2 hover:text-[#5d87ff]">
                              <a href="#" className="text-sm block">
                                404 Error
                              </a>
                            </li>
                            <li className="py-2 hover:text-[#5d87ff]">
                              <a href="#" className="text-sm block">
                                Notes App
                              </a>
                            </li>
                            <li className="py-2 hover:text-[#5d87ff]">
                              <a href="#" className="text-sm block">
                                Emplyee App
                              </a>
                            </li>
                            <li className="py-2 hover:text-[#5d87ff]">
                              <a href="#" className="text-sm block">
                                Todo Application
                              </a>
                            </li>
                            <li className="py-2 hover:text-[#5d87ff]">
                              <a href="#" className="text-sm block">
                                Treeview
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-base font-semibold text-black/70 py-3"
                    >
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-base font-semibold text-black/70 py-3"
                    >
                      Chat
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-base font-semibold text-black/70 py-3"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* language  */}
            <button
              id="dropdownOffsetButton"
              data-dropdown-toggle="dropdownSkidding"
              data-dropdown-offset-distance="-50"
              data-dropdown-offset-skidding="120"
              data-dropdown-placement="right"
              className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center"
            >
              <img className="w-5 h-5 rounded-full" src={FlagIcon} alt="" />
            </button>
            {/* language dropdown  */}
            <div
              id="dropdownSkidding"
              className="z-10 hidden bg-white rounded shadow py-2"
            >
              <ul aria-labelledby="dropdownDefault">
                <li className="hover:bg-[#fafafa] duration-200">
                  <button className="px-4 py-3 font-san text-sm text-[#2a3547] flex items-center gap-2 font-semibold ">
                    <img className="rounded-full" src={FlagIcon} alt="" />
                    English
                  </button>
                </li>
                <li className="hover:bg-[#fafafa] duration-200">
                  <button className="px-4 py-3 font-san text-sm text-[#2a3547] flex items-center gap-2 font-semibold">
                    <img className="rounded-full" src={FlagEs} alt="" />
                    Español
                  </button>
                </li>
                <li className="hover:bg-[#fafafa] duration-200">
                  <button className="px-4 py-3 font-san text-sm text-[#2a3547] flex items-center gap-2 font-semibold">
                    <img className="rounded-full" src={FlagFr} alt="" />
                    Français
                  </button>
                </li>
                <li className="hover:bg-[#fafafa] duration-200">
                  <button className="px-4 py-3 font-san text-sm text-[#2a3547] flex items-center gap-2 font-semibold">
                    <img className="rounded-full" src={FlagCh} alt="" />
                    German
                  </button>
                </li>
              </ul>
            </div>

            {/* notification  */}
            <button
              id="dropdownNotificationButton"
              data-dropdown-toggle="dropdownNotification"
              data-dropdown-offset-distance={offsetDistance}
              data-dropdown-offset-skidding="295"
              data-dropdown-placement="left"
              className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center relative"
            >
              <Bell size={24} />
              <span className="font-san text-xs font-bold bg-[#5d87ff] text-white w-[22px] h-[22px] rounded-full flex items-center justify-center absolute top-0.5 right-0.5">
                1
              </span>
            </button>
            {/* notification dropdown  */}
            <div
              id="dropdownNotification"
              className="z-20 hidden w-full max-w-sm bg-white rounded shadow"
              aria-labelledby="dropdownNotificationButton"
            >
              <div className="py-2">
                <div className="font-san text-[#2A3547] px-8 py-4 flex items-center justify-between">
                  <h3 className="text-base font-semibold">Notifications</h3>
                  <button className="bg-[#5d87ff] text-white text-xs px-2 py-1 rounded-md">
                    <span>5</span> new
                  </button>
                </div>
                <div>
                  <div className="hover:bg-[#fafafa] duration-200">
                    <button className="flex items-center gap-4 px-8 py-4">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://modernize-angular-main.netlify.app/assets/images/profile/user-1.jpg"
                        alt=""
                      />
                      <div className="font-san text-sm text-[#2A3547]">
                        <h5 className="font-semibold mb-0.5">
                          Roman Joined the Team!
                        </h5>
                        <p className="text-black/80 text-left">
                          Congratulate him
                        </p>
                      </div>
                    </button>
                  </div>
                  <div className="hover:bg-[#fafafa] duration-200">
                    <button className="flex items-center gap-4 px-8 py-4">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://modernize-angular-main.netlify.app/assets/images/profile/user-2.jpg"
                        alt=""
                      />
                      <div className="font-san text-sm text-[#2A3547]">
                        <h5 className="font-semibold mb-0.5 text-left">
                          New message received
                        </h5>
                        <p className="text-black/80 text-left">
                          Salma sent you new message
                        </p>
                      </div>
                    </button>
                  </div>
                  <div className="hover:bg-[#fafafa] duration-200">
                    <button className="flex items-center gap-4 px-8 py-4">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://modernize-angular-main.netlify.app/assets/images/profile/user-3.jpg"
                        alt=""
                      />
                      <div className="font-san text-sm text-[#2A3547]">
                        <h5 className="font-semibold mb-0.5">
                          New Payment received
                        </h5>
                        <p className="text-black/80 text-left">
                          Check your earnings
                        </p>
                      </div>
                    </button>
                  </div>
                  <div className="hover:bg-[#fafafa] duration-200">
                    <button className="flex items-center gap-4 px-8 py-4">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://modernize-angular-main.netlify.app/assets/images/profile/user-4.jpg"
                        alt=""
                      />
                      <div className="font-san text-sm text-[#2A3547]">
                        <h5 className="font-semibold mb-0.5">
                          Jolly completed tasks
                        </h5>
                        <p className="text-black/80 text-left">
                          Assign her new tasks
                        </p>
                      </div>
                    </button>
                  </div>
                  <div className="hover:bg-[#fafafa] duration-200">
                    <button className="flex items-center gap-4 px-8 py-4">
                      <img
                        className="w-12 h-12 rounded-full"
                        src="https://modernize-angular-main.netlify.app/assets/images/profile/user-5.jpg"
                        alt=""
                      />
                      <div className="font-san text-sm text-[#2A3547]">
                        <h5 className="font-semibold mb-0.5">
                          Roman Joined the Team!
                        </h5>
                        <p className="text-black/80 text-left">
                          Congratulate him
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="px-8 py-3">
                  <button className="text-[#5d87ff] font-san text-sm border border-[#5d87ff] w-full rounded py-2 hover:bg-[#ecf2ff]/50">
                    See all notifications
                  </button>
                </div>
              </div>
            </div>

            {/* profile  */}
            <span ref={profileRef}>
              <button
                onClick={handleProfile}
                className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center"
              >
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://modernize-angular-main.netlify.app/assets/images/profile/user-1.jpg"
                  alt=""
                />
              </button>
              {/* profile dropdown  */}
              {openProfile && (
                <div className="-translate-x-[305px] -translate-y-16 xl:-translate-x-[315px] xl:translate-y-0 lg:-translate-x-[315px] lg:translate-y-0 md:-translate-x-[315px] md:translate-y-0 absolute shadow px-8 py-2 w-[360px] z-50 bg-white">
                  {/* <div className=""> */}
                  <div className="py-4">
                    <h3 className="font-san text-base font-semibold text-[#2a3547]">
                      User Profile
                    </h3>
                    <div className="flex items-center gap-4 mt-4 border-b pb-6">
                      <img
                        className="w-24 h-24 rounded-full"
                        src="https://modernize-angular-main.netlify.app/assets/images/profile/user-1.jpg"
                        alt=""
                      />
                      <div className="font-san text-[#2a3547] text-sm">
                        <h5 className="font-semibold mb-1">Mathew Anderson</h5>
                        <p className="mb-1">Designer</p>
                        <p className="flex items-center gap-1">
                          <EnvelopeSimple size={15} />
                          <span>info@modernize.com</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="py-4">
                      <a href="" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded bg-[#ecf2ff] flex items-center justify-center">
                          <img
                            className="w-5 h-5"
                            src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-account.svg"
                            alt=""
                          />
                        </div>
                        <div className="text-sm text-[#2a3547] font-san">
                          <h5 className="font-semibold group-hover:text-[#5d87ff] duration-100">
                            My Profile
                          </h5>
                          <p>Account Settings</p>
                        </div>
                      </a>
                    </div>
                    <div className="py-4">
                      <a href="" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded bg-[#ecf2ff] flex items-center justify-center">
                          <img
                            className="w-5 h-5"
                            src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-inbox.svg"
                            alt=""
                          />
                        </div>
                        <div className="text-sm text-[#2a3547] font-san">
                          <h5 className="font-semibold group-hover:text-[#5d87ff] duration-100">
                            My Box
                          </h5>
                          <p>Messages & Email</p>
                        </div>
                      </a>
                    </div>
                    <div className="py-4">
                      <a href="" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded bg-[#ecf2ff] flex items-center justify-center">
                          <img
                            className="w-5 h-5"
                            src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-tasks.svg"
                            alt=""
                          />
                        </div>
                        <div className="text-sm text-[#2a3547] font-san">
                          <h5 className="font-semibold group-hover:text-[#5d87ff] duration-100">
                            My Tasks
                          </h5>
                          <p>To-do and Daily Tasks</p>
                        </div>
                      </a>
                    </div>
                    {/* <div className="bg-[#ecf2ff] rounded-lg flex overflow-hidden">
                  <div className="p-6 pe-0 font-san">
                    <h3 className="text-lg text-[#2a3547] font-semibold mb-3">Unlimited Access</h3>
                    <button className="text-sm text-white bg-[#5d87ff] px-4 py-2 rounded">Upgrade</button>
                  </div>
                  <img className="w-[179px] h-auto" src="https://modernize-angular-main.netlify.app/assets/images/backgrounds/unlimited-bg.png" alt="" />
                </div> */}
                  </div>
                  <div className="bg-[#ecf2ff] rounded-lg flex overflow-hidden my-4">
                    <div className="p-6 pe-0 font-san">
                      <h3 className="text-lg text-[#2a3547] font-semibold mb-3">
                        Unlimited Access
                      </h3>
                      <button className="text-sm text-white bg-[#5d87ff] px-4 py-2 rounded">
                        Upgrade
                      </button>
                    </div>
                    <img
                      className="w-[179px] h-auto"
                      src="https://modernize-angular-main.netlify.app/assets/images/backgrounds/unlimited-bg.png"
                      alt=""
                    />
                  </div>
                  <Link to="/">
                    <button className="font-san text-sm text-[#5d87ff] border border-[#5d87ff] w-full py-2 rounded hover:bg-[#ecf2ff]/50 my-3">
                      Logout
                    </button>
                  </Link>

                  {/* </div> */}
                </div>
              )}
            </span>
          </div>
        </div>

        {/* modal  */}
        <div>
          <div
            id="default-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-[630px] max-h-full">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow">
                {/* Modal header */}
                <div className="flex items-center justify-between gap-14 p-6 md:p-6 border-b rounded-t">
                  <input
                    type="text"
                    className="w-full rounded h-14 text-sm placeholder:text-sm p-4 caret-blue-600"
                    placeholder="Search here"
                    autoFocus
                  />
                  <button
                    type="button"
                    className="text-gray-900 bg-transparent hover:bg-gray-200 text-sm w-12 h-10 rounded-full ms-auto inline-flex justify-center items-center"
                    data-modal-hide="default-modal"
                  >
                    <svg
                      className="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="px-6 py-5 md:px-6 md:py-5 max-h-[424px] overflow-y-auto">
                  <h3 className="font-san font-semibold text-lg text-[#2a3547] mb-4">
                    Quick Page Links
                  </h3>

                  <a href="" className="font-san text-[#2a3547] py-3 block">
                    <h5 className="text-sm font-semibold">Analytical</h5>
                    <span className="text-xs">/dashboards/dashboard1</span>
                  </a>
                  <a href="" className="font-san text-[#2a3547] py-3 block">
                    <h5 className="text-sm font-semibold">Form Wizard</h5>
                    <span className="text-xs">/forms/form-wizard</span>
                  </a>
                  <a href="" className="font-san text-[#2a3547] py-3 block">
                    <h5 className="text-sm font-semibold">Tables</h5>
                    <span className="text-xs">tables</span>
                  </a>
                  <a href="" className="font-san text-[#2a3547] py-3 block">
                    <h5 className="text-sm font-semibold">Login</h5>
                    <span className="text-xs">/authentication</span>
                  </a>
                  <a href="" className="font-san text-[#2a3547] py-3 block">
                    <h5 className="text-sm font-semibold">Register</h5>
                    <span className="text-xs">/authentication</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </nav>
    </>
  );
};

export default NavBar;
