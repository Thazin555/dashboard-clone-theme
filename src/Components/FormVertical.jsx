import React, { useState } from "react";

const FormVertical = () => {
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
    const [finishedChecked, setFinishedChecked] = useState(false);
    const finishedCheckedHandler = () => {
      setFinishedChecked(!finishedChecked);
    };
    const [finishedCheckedProfile, setFinishedCheckedProfile] = useState(false);
    const finishedCheckedProfileHandler = () => {
      setFinishedCheckedProfile(true);
    };
  return (
    <div className=" overflow-hidden">
      <div className=" border mt-10">
        <div className="">
          <h1 className=" px-[24px] py-[16px] font-semibold md:text-[20px] text-[18px]">
            Vertical
          </h1>
          <hr />
        </div>
        <div className="p-[24px] md:text-[16px] text-[14px]">
          <div className=" overflow-hidden relative">
            <div
              onClick={accountHandler}
              onBlur={accountHandler}
              className="flex gap-2 hover:bg-[#0000000a] md:p-[24px] py-5"
            >
              <div
                className={`w-6 h-6 z-50 ${
                  !openAccount ? "bg-[#757575]" : "bg-[#5d87ff]"
                } p-1 justify-center items-center flex rounded-full`}
              >
                <p className="text-white ">1</p>
              </div>
              <h4>Account</h4>
            </div>
            {openAccount && (
              <div
                className={`${
                  finishedCheckedProfile && "slow-motion-down"
                } md:ml-[36px] ml-[8px] md:mt-0 mt-2  rounded-lg dark:bg-gray-800`}
              >
                <div className=" p-[24px] pt-0">
                  <div className=" ">
                    <label htmlFor="formVerticalName">Name</label>
                    <input
                      type="text"
                      id="formVerticalName"
                      className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-4 p-2 hover:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="md:mt-6 mt-3">
                    <label htmlFor="formVerticalEmail">Email</label>
                    <input
                      type="email"
                      id="formVerticalEmail"
                      className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-4 p-2 hover:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="md:mt-6 mt-3">
                    <label htmlFor="formVerticalPassword">Password</label>
                    <input
                      type="password"
                      id="formVerticalPassword"
                      className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-4 p-2 hover:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="">
                    <button
                      type="button"
                      className="text-white ml-auto block md:mt-6 mt-3 bg-[#5d87ff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className=" absolute top-[56px] md:left-[36px] left-[11px] w-[2px] bg-gray-200 h-full dark:bg-gray-700" />
          </div>
          <div className=" !overflow-hidden relative">
            <div
              onClick={() => {
                profileHandler();
                finishedCheckedProfileHandler();
              }}
              className="flex gap-2 hover:bg-[#0000000a] md:p-[24px] py-5"
            >
              <div
                className={`w-6 h-6 z-50 ${
                  !openProfile ? "bg-[#757575]" : "bg-[#5d87ff]"
                } p-1 justify-center items-center flex rounded-full`}
              >
                <p className="text-white ">2</p>
              </div>
              <h4>Profile</h4>
            </div>
            {openProfile && (
              <div
                className={`${
                  finishedChecked ? "slow-motion-down" : "slow-motion-animation"
                } md:ml-[36px] ml-[8px] md:mt-0 mt-2 !overflow-hidden rounded-lg dark:bg-gray-800`}
              >
                <div className=" p-[24px] pt-0">
                  <div className="">
                    <label htmlFor="formVerticalFName">First Name</label>
                    <input
                      type="text"
                      id="formVerticalFName"
                      className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-4 p-2 hover:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="md:mt-6 mt-3">
                    <label htmlFor="formVerticalLName">Last Name</label>
                    <input
                      type="text"
                      id="formVerticalLName"
                      className="mt-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:p-4 p-2 hover:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="md:mt-6 mt-3">
                    <label htmlFor="formVerticalAddress">Address</label>
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
              </div>
            )}
            <div className=" absolute top-[56px] md:left-[36px] left-[11px] w-[2px] bg-gray-200 h-full dark:bg-gray-700" />
          </div>
          <div className=" overflow-hidden relative">
            <div
              onClick={() => {
                finishedHandler();
                finishedCheckedHandler();
                finishedCheckedProfileHandler();
              }}
              className="flex gap-2 hover:bg-[#0000000a] md:p-[24px] py-5"
            >
              <div className="w-6 h-6 z-50 bg-[#5d87ff] p-1 justify-center items-center flex rounded-full">
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
            {openFinished && (
              <div
                className={`md:ml-[36px] ml-[8px] md:mt-0 mt-2 slow-motion-animation rounded-lg dark:bg-gray-800`}
              >
                <div className=" p-[24px] pt-0">
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
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormVertical;
