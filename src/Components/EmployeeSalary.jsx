import React from "react";
import Chart from "chart.js/auto";
import SalaryApexChart from "./SalaryApexChart";
import CustomerChart from "./CustomerChart";
import ProjectChart from "./ProjectChart";

const EmployeeSalary = () => {
  return (
    <div className="block lg:grid grid-cols-12 gap-5 ">
      <div className="col-span-12 lg:col-span-4 md:mb-3">
        <div className="w-full border rounded-md  px-5 py-7">
        <h1 className="text-xl text-gray-600 font-semibold">Employee Salary</h1>
        <h3 className="text-gray-500 font-light">Every month</h3>
        <SalaryApexChart />

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0  rounded-md bg-[#e8efff] p-2">
              <a href="#" className="relative block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-6  "
                  viewBox="0 0 24 24"
                >
                  <path stroke="0" d="M0 0h24v24H0z" fill="transparent" />
                  <path
                    d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#5d87ff"
                  />
                  <path
                    d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#5d87ff"
                  />
                  <path
                    d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#5d87ff"
                  />
                  <path
                    d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#5d87ff"
                  />
                  <path
                    d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#5d87ff"
                  />
                  <path
                    d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#5d87ff"
                  />
                  <path
                    d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#5d87ff"
                  />
                  <path
                    d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#5d87ff"
                  />
                  <path
                    d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#5d87ff"
                  />
                </svg>
              </a>
            </div>
            <div className="ml-3">
              <p className="text-gray-500 text-sm whitespace-no-wrap">Salary</p>
              <p className="text-gray-700 font-semibold whitespace-no-wrap">
                $36,358
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0  rounded-md bg-[#edeeef] p-2">
              <a href="#" className="relative block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-6  "
                  viewBox="0 0 24 24"
                >
                  <path stroke="0" d="M0 0h24v24H0z" fill="transparent" />
                  <path
                    d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#334155"
                  />
                  <path
                    d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#334155"
                  />
                  <path
                    d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#334155"
                  />
                  <path
                    d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#334155"
                  />
                  <path
                    d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#334155"
                  />
                  <path
                    d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#334155"
                  />
                  <path
                    d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#334155"
                  />
                  <path
                    d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#334155"
                  />
                  <path
                    d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                    fill="#334155"
                  />
                </svg>
              </a>
            </div>
            <div className="ml-3">
              <p className="text-gray-500 text-sm whitespace-no-wrap">Profit</p>
              <p className="text-gray-700 font-semibold whitespace-no-wrap">
                $5,296
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="block w-full lg:col-span-4 ">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6  ">
            <div className=" border rounded-md">
            <div className="ml-3 pt-7 px-2">
              <p className="text-gray-500 text-base whitespace-no-wrap">
                Customers
              </p>
              <p className="text-gray-700 font-bold text-2xl whitespace-no-wrap">
                36,358
              </p>
              <div className="flex justify-start items-center gap-3 mt-5">
                <div className="p-1 bg-[#f9efec] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fill="#fa896b"
                      fillRule="evenodd"
                      d="M14.78 5.22a.75.75 0 0 0-1.06 0L6.5 12.44V6.75a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5H7.56l7.22-7.22a.75.75 0 0 0 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 font-semibold text-base whitespace-no-wrap">
                  +9%
                </p>
              </div>
            </div>
            <CustomerChart/>
          </div>
            </div>
          <div className="col-span-6 border rounded-md">
            <div className="ml-3  pt-7 px-2">
              <p className="text-gray-500 text-base whitespace-no-wrap">
                Projects
              </p>
              <p className="text-gray-700 font-bold text-2xl whitespace-no-wrap">
                78,298
              </p>
              <div className="flex justify-start items-center gap-3 mt-5">
              <div className="p-1 bg-[#eaf4f9] rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                  fill="#13deb9"
                    fillRule="evenodd"
                    d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700 font-semibold text-base whitespace-no-wrap">
                +9%
              </p>
            </div>
            </div>
            <ProjectChart/>
            
          </div>
        </div>

      <div className="border rounded-md p-5 my-5">
      <div className="mb-10 ">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="relative block">
                <img
                  alt="profile"
                  src="https://modernize-angular-main.netlify.app/assets/images/profile/user-1.jpg"
                  className="mx-auto object-cover rounded-md   h-20 w-20 "
                />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-gray-700 text-xl font-semibold whitespace-no-wrap">
                Super awesome, Vue coming soon!
              </p>
              <p className="text-gray-500 text-base whitespace-no-wrap">
                22 March, 2023
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex -space-x-2 rtl:space-x-reverse">
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://modernize-angular-main.netlify.app/assets/images/profile/user-2.jpg"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://modernize-angular-main.netlify.app/assets/images/profile/user-3.jpg"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://modernize-angular-main.netlify.app/assets/images/profile/user-4.jpg"
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src="https://modernize-angular-main.netlify.app/assets/images/profile/user-5.jpg"
            />
          </div>
          <div className="p-3 rounded-md bg-[#e8efff]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-[#5d87ff]"
            >
              <path
                fill=""
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
          </div>
          
        </div>
      </div>
      </div>
      <div className="block  w-full lg:col-span-4">
        <div className="bg-[#5d87ff] rounded-md pt-7 px-5 pb-5">
          <div
            className="bg-center bg-contain bg-no-repeat flex flex-col gap-40"
            style={{
              backgroundImage:
                'url("https://modernize-angular-main.netlify.app/assets/images/backgrounds/piggy.png")',
            }}
          >
            <div className="">
              <h1 className="text-xl text-gray-50 font-semibold">
                Best selling products
              </h1>
              <h3 className="text-gray-100 font-light">Overview 2023</h3>
            </div>
            <div className="bg-white rounded-md p-5 mt-20">
              <div>
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className=" text-base text-gray-600 font-semibold">
                      MaterialPro
                    </h1>
                    <h3 className="text-gray-500 font-light">$23,568</h3>
                  </div>
                  <span className="text-[#5d87ff] text-xs font-bold bg-[#eaeafb] px-3 py-2 rounded-md">
                    55%
                  </span>
                </div>
                <div className="grid grid-cols-12 bg-[#5d87ff] w-full h-1 mt-3 rounded-full">
                  <div className="col-span-5"></div>
                  <div className=" col-span-7 bg-[#efeffa]"></div>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className=" text-base text-gray-600 font-semibold">
                      Flexy Admin
                    </h1>
                    <h3 className="text-gray-500 font-light">$23,568</h3>
                  </div>
                  <span className="text-[#49beff] text-xs font-bold bg-[#e5f2f9] px-3 py-2 rounded-md">
                    20%
                  </span>
                </div>
                <div className="grid grid-cols-12 bg-[#49beff] w-full h-1 mt-3 rounded-full">
                  <div className="col-span-5"></div>
                  <div className=" col-span-7 bg-[#efeffa]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSalary;
