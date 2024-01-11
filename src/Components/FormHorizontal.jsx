import React, { useState } from "react";

const FormHorizontal = () => {
  const [openAccount, setOpenAccount] = useState(true);
  const accountHandler = () => {
    setOpenAccount(true);
    setOpenProfile(false);
    setOpenFinished(false);
  };
  const [openProfile, setOpenProfile] = useState(false);
  const profileHandler = () => {
    setOpenProfile(true);
    setOpenAccount(false);
    setOpenFinished(false);
  };
  const [openFinished, setOpenFinished] = useState(false);
  const finishedHandler = () => {
    setOpenFinished(true);
    setOpenProfile(false);
    setOpenAccount(false);
  };
  const [finishedChecked,setFinishedChecked]=useState(false)
  const finishedCheckedHandler=() => {
    setFinishedChecked(!finishedChecked)
    
  }
  const [finishedCheckedProfile, setFinishedCheckedProfile] = useState(false);
  const finishedCheckedProfileHandler = () => {
    setFinishedCheckedProfile(true);
  };
  return (
    <div className=" overflow-hidden">
      <div className=" border mt-10">
        <div className="">
          <h1 className=" px-[24px] py-[16px] font-semibold md:text-[20px] text-[18px]">
            Form Wizard
          </h1>
          <hr />
        </div>
        <div className="p-[24px]">
          <div className="flex md:text-[16px] text-[14px] md:gap-2 gap-1 items-center justify-between">
            <div
              onClick={accountHandler}
              className="flex gap-2 hover:bg-[#0000000a] md:p-[24px]"
            >
              <div
                className={`md:w-6 md:h-6 w-[1.2rem] h-[1.2rem] ${
                  !openAccount ? "bg-[#757575]" : "bg-[#5d87ff]"
                } p-1 justify-center items-center flex rounded-full`}
              >
                <p className="text-white ">1</p>
              </div>
              <h4>Account</h4>
            </div>
            <div className="w-full bg-gray-200 h-0.5 hidden md:block dark:bg-gray-700" />
            <div
              onClick={() => {
                profileHandler();
                finishedCheckedProfileHandler();
              }}
              className="flex gap-2 hover:bg-[#0000000a] md:p-[24px]"
            >
              <div
                className={`md:w-6 md:h-6 w-[1.2rem] h-[1.2rem] ${
                  !openProfile ? "bg-[#757575]" : "bg-[#5d87ff]"
                } p-1 justify-center items-center flex rounded-full`}
              >
                <p className="text-white ">2</p>
              </div>
              <h4>Profile</h4>
            </div>
            <div className="w-full bg-gray-200 h-0.5 hidden md:block dark:bg-gray-700" />
            <div
              onClick={() => {
                finishedHandler();
                finishedCheckedHandler();
                finishedCheckedProfileHandler();
              }}
              className="flex gap-2 hover:bg-[#0000000a] md:p-[24px]"
            >
              <div
                className={`md:w-6 md:h-6 w-[1.2rem] h-[1.2rem] bg-[#5d87ff]  p-1 justify-center items-center flex rounded-full`}
              >
                {openFinished ? (
                  <p className="text-white ">3</p>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                )}
              </div>
              <h4>Finished</h4>
            </div>
          </div>
          <div>
            {openAccount && (
              <div
                className={`md:p-4 pt-4 rounded-lg ${
                  finishedCheckedProfile &&
                  "animate__animated animate__slideInLeft"
                } dark:bg-gray-800`}
              >
                <div className="">
                  <label
                    className=" md:text-inherit text-[14px]"
                    htmlFor="formHorizontalName"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="formHorizontalName"
                    className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-4 p-2 hover:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="md:mt-6 mt-3">
                  <label
                    className=" md:text-inherit text-[14px]"
                    htmlFor="formHorizontalEmail"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="formHorizontalEmail"
                    className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-4 p-2 hover:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="md:mt-6 mt-3">
                  <label
                    className=" md:text-inherit text-[14px]"
                    htmlFor="formHorizontalPassword"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="formHorizontalPassword"
                    className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-4 p-2 hover:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="">
                  <button
                    type="button"
                    className="text-white ml-auto block mt-6 bg-[#5d87ff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {openProfile && (
              <div
                className={`${
                  finishedChecked
                    ? "animate__animated animate__slideInLeft"
                    : "animate__animated animate__slideInRight"
                } md:p-4 pt-4 rounded-lg  dark:bg-gray-800`}
              >
                <div className="">
                  <label
                    className=" md:text-inherit text-[14px]"
                    htmlFor="formHorizontalFName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="formHorizontalFName"
                    className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-4 p-2 hover:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="md:mt-6 mt-3">
                  <label
                    className=" md:text-inherit text-[14px]"
                    htmlFor="formHorizontalLName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="formHorizontalLName"
                    className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-4 p-2 hover:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="md:mt-6 mt-3">
                  <label
                    className=" md:text-inherit text-[14px]"
                    htmlFor="formHorizontalAddress"
                  >
                    Address
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="block mt-4 p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="text-white block mt-6 bg-[#fa896b] hover:bg-[#e38568] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="text-white block mt-6 bg-[#5d87ff] hover:bg-[#6b90f5] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {openFinished && (
              <div className="animate__animated animate__slideInRight md:p-4 pt-4 rounded-lg  dark:bg-gray-800">
                <>
                  <h4 className=" md:text-[18px] text-[16px] font-semibold">
                    Terms and condition
                  </h4>
                  <p className=" mt-[8px] mb-[14px] text-[14px]">
                    Sard about this site or you have been to it, but you cannot
                    figure out what it is or what it can do. MTA web directory
                    isSard about this site or you have been to it, but you
                    cannot figure out what it is or what it can do. MTA web
                    directory is
                  </p>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 hover:bg-[#eeeeee8a] active:bg-[#e5ebff] justify-center items-center flex rounded-full">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value={true}
                        className="w-[14px] h-[14px] text-blue-600 border-gray-300 rounded-[3px] focus:ring-0"
                      />
                    </div>
                    <label
                      htmlFor="default-checkbox"
                      className="text-sm dark:text-gray-300"
                    >
                      Agree with terms?
                    </label>
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="text-white block mt-6 bg-[#fa896b] hover:bg-[#e38568] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="text-white block mt-6 bg-[#5d87ff] hover:bg-[#6b90f5] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Finish
                    </button>
                  </div>
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHorizontal;
