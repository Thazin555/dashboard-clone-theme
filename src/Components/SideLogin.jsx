import React from "react";
import { Link } from "react-router-dom";

const SideLogin = () => {
  return (
    <div className="h-screen">
      <div className="">
        <img
          className=" p-6   block lg:hidden"
          src="https://modernize-angular-main.netlify.app/assets/images/logos/dark-logo.svg"
        />
      </div>
      <div className="grid grid-cols-12 h-full">
        {/* grid 1 */}
        <div className="hidden lg:block pb-10 col-span-3 bg-[#eff2fc] lg:col-span-7">
          <img
            className="p-6"
            src="https://modernize-angular-main.netlify.app/assets/images/logos/dark-logo.svg"
          />
          <div className="flex items-center justify-center h-full">
            <img
              className="mx-auto self-center w-[500px]"
              src="https://modernize-angular-main.netlify.app/assets/images/backgrounds/login-bg.svg"
            />
          </div>
        </div>
        {/* grid 2  */}
        <div className="px-10 col-span-12 lg:col-span-5 ">
          <div className="flex justify-center items-center h-full">
            <div className=" px-4">
              <h1 className="text-2xl font-bold block text-nowrap">
                Welcome to Modernize
              </h1>
              <p className="mb-9 text-slate-700">Your Admin Dashboard</p>
              <div className="md:flex-row flex-col flex gap-6 mb-5">
                <div className="flex items-center gap-3 sm:mb-3 lg:mb-0 hover:bg-gray-100 duration-300 justify-center rounded-md border px-3">
                  <img
                    src="https://modernize-angular-main.netlify.app/assets/images/svgs/google-icon.svg"
                    className="w-4 h-4"
                  />
                  <button>Sign in with Google</button>
                </div>
                <div className="flex items-center gap-3 justify-center rounded-md border hover:bg-gray-100 duration-300 px-5">
                  <img
                    src="https://modernize-angular-main.netlify.app/assets/images/svgs/facebook-icon.svg"
                    className="w-7 h-7 "
                  />
                  <button>Sign in with FB</button>
                </div>
              </div>
              <div className="flex mb-7 text-sm  items-center justify-around gap-1 ">
                <div className="w-[100px] top-[50%] h-[1px] bg-[#e5eaef] left-0 " />
                <div>or Sign in with</div>
                <div className="w-[100px] top-[50%] h-[1px] bg-[#e5eaef] left-0 " />
              </div>

              {/* form  */}
              <form className="">
                <div className="mb-5">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm  font-bold text-gray-900 "
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block w-full p-4   text-gray-900 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500  "
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm  font-bold text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="large-input"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg sm:text-md focus:ring-blue-500 focus:border-blue-500 "
                  />
                </div>
                <div className="grid grid-cols-1 text-sm items-center mb-5">
                  <div className="flex items-center ">
                    <input
                      id="terms"
                      type="checkbox"
                      defaultValue
                      className=" w-6 h-6 border border-slate-300  rounded mx-2  focus:ring-3 focus:ring-blue-300 "
                      required
                    />
                    <label htmlFor="terms" className="ms-2  font-normal  ">
                      Remember this Device
                    </label>
                    <a className="ms-4 text-blue-600 font-semibold cursor-pointer">
                      Forgot Password ?
                    </a>
                  </div>
                </div>
                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="text-white text-sm w-full bg-blue-700  focus:ring-4 focus:outline-none
     font-normal rounded-lg  px-5 py-2.5 text-center "
                  >
                    Sign In
                  </button>
                </Link>

                <div className="mt-5 text-sm">
                  <label
                    htmlFor="terms"
                    className="ms-2  font-semibold text-gray-900 dark:text-gray-300"
                  >
                    New to Modernize?
                    <a
                      href="./SlideRegister"
                      className="text-blue-600 hover:underline"
                    >
                      Create an account
                    </a>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideLogin;
