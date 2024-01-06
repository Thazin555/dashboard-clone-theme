import React from "react";

const Weekly = () => {
  return (
    <div className=" max-w-[1200px] p-[24px] mx-auto">
      <div className="container  mx-auto mt-10 ">
        <div className="grid gap-4 md:grid-cols-12 lg:grid-cols-12 md:gap-5 px-10 md:px-10 lg:px-5 ">
          {/* grid 1 */}
          <div className="col-span-8  md:me-0 lg:me-0  md:col-span-4 lg:col-span-4 border border-slate-200 px-4 shadow-md">
            {/* grid 1 header */}
            <div className="mt-5  px-2">
              <h1 className="font-bold  text-lg tracking-wide">Weekly Stats</h1>
              <h2 className="text-slate-700">Average sales</h2>
            </div>
            {/* Chart  */}
            <div className="mb-60"></div>
            {/* Top Sales  */}
            <div className="flex items-center  mb-5 justify-between">
              <div className="flex  items-center">
                <svg
                  className="w-10 h-10 bg-blue-100 rounded-md me-4  px-2 text-blue-500 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="text-blue-500 "
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  ></path>
                  <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                </svg>
                <div className="flex-wrap leading-6 items-center justify-center">
                  <h1 className="font-bold text-gray-900">Top Sales</h1>
                  <h2 className="text-[13px] text-gray-500 tracking-normal">
                    Johnathan Doe
                  </h2>
                </div>
              </div>
              <h1
                className="bg-blue-100 text-sm font-semibold rounded-lg
              px-2 py-2 text-blue-500"
              >
                +68
              </h1>
            </div>
            {/* Best Seller  */}
            <div className="flex items-center mb-5 justify-between">
              <div className="flex items-center">
                <svg
                  className="w-10 h-10 me-4 bg-green-100 rounded-md  px-2  mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className=""
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  ></path>
                  <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                </svg>
                <div className="flex-wrap leading-6 items-center justify-center">
                  <h1 className="font-bold text-gray-900">Best Seller</h1>
                  <h2 className="text-[13px] text-gray-500 tracking-normal">
                    Footware
                  </h2>
                </div>
              </div>
              <h1
                className="bg-green-100 text-sm font-semibold rounded-lg 
              px-2 py-2 text-green-500"
              >
                +45
              </h1>
            </div>
            {/* Most Commented  */}
            <div className="flex items-center mb-5 justify-between">
              <div className="flex items-center">
                <svg
                  className="w-10 h-10 me-4  bg-orange-100 rounded-md  px-2 text-orange-500 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className=" "
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  ></path>
                  <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                </svg>
                <div className="flex-wrap leading-6 items-center justify-center">
                  <h1 className="font-bold text-gray-900">Most Commented</h1>
                  <h2 className="text-[13px] text-gray-500 tracking-normal">
                    Fashionware
                  </h2>
                </div>
              </div>
              <h1
                className="bg-orange-100 text-sm font-semibold rounded-lg 
              px-2 py-2 text-orange-500"
              >
                +14
              </h1>
            </div>
          </div>
          {/* grid 2  */}
          <div className="col-span-8  border border-slate-200  md:pe-0 lg:pe-0 shadow-md">
            {/* grid 2 foot header */}
            <div className="flex mt-5 mb-6 px-4 items-center justify-between">
              <div>
                <h1 className="font-bold  text-lg tracking-wide">
                  Top Projects
                </h1>
                <h2 className="text-slate-700">Best Products</h2>
              </div>
              <div>
                <select
                  className="pointer-events-auto cursor-pointer rounded-md border-slate-200 px-4
               hover:border-slate-700 focus:border-2 focus:border-blue-500"
                >
                  <option value>March 2023</option>
                  <option value>April 2023</option>
                  <option value="month">June 2023</option>
                </select>
              </div>
            </div>
            {/* Table  */}
            <div className="relative py-1 overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 py-4 rtl:text-right ">
                <thead className="text-sm   text-gray-700">
                  <tr className="border-b">
                    <th scope="col" className="px-6 py-4">
                      Assigned
                    </th>
                    <th scope="col" className="ps-14 md:ps-14 lg:-px-6 py-6">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-6 ps-14 md:ps-14">
                      Priority
                    </th>
                    <th scope="col" className="px-6 py-6">
                      Budget
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap py-4 font-medium text-gray-900"
                    >
                      <div className="flex items-center">
                        <img
                          className="w-11 h-11 rounded-full mx-3 "
                          src="https://modernize-angular-main.netlify.app/assets/images/profile/user-1.jpg"
                        />
                        <div className="flex-wrap leading-6 items-center justify-center">
                          <h1 className="font-bold text-gray-900">
                            Sunil Joshi
                          </h1>
                          <h2 className="text-[13px] text-gray-500 tracking-normal">
                            Web Designer
                          </h2>
                        </div>
                      </div>
                    </th>
                    <td className=" ps-14 md:ps-14lg:-px-6 py-4">
                      {" "}
                      Elite Admin
                    </td>
                    <td className="ps-14 md:ps-14lg:-px-6 py-4">
                      <span className="px-2 py-1 text-xs font-semibold text-[#59a2c9] bg-[#e8f7ff] rounded-md">
                        Low
                      </span>
                    </td>
                    <td className="ps-14 md:ps-14lg:-px-6 py-4">$3.9k</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap py-4 font-medium text-gray-900"
                    >
                      <div className="flex items-center">
                        <img
                          className="w-11 h-11 rounded-full mx-3 "
                          src="https://modernize-angular-main.netlify.app/assets/images/profile/user-2.jpg"
                        />
                        <div className="flex-wrap  block leading-6 items-center justify-center">
                          <h1 className="font-bold text-gray-900">
                            Andrew McDownland
                          </h1>
                          <h2 className="text-[13px] text-gray-500 tracking-normal">
                            Project Manager
                          </h2>
                        </div>
                      </div>
                    </th>
                    <td className=" text-nowrap ps-14 md:ps-14lg:-px-6 py-4">
                      Real Homes Theme
                    </td>
                    <td className="ps-14 md:ps-14lg:-px-6    py-4">
                      <span className="px-2 py-1 font-semibold text-xs text-blue-500 bg-blue-100 rounded-md">
                        Medium
                      </span>
                    </td>
                    <td className="ps-14 md:ps-14lg:-px-6 py-4">$24.5k</td>
                  </tr>
                  <tr className="border-b bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap py-4 font-medium text-gray-900"
                    >
                      <div className="flex items-center">
                        <img
                          className="w-11 h-11 rounded-full mx-3 "
                          src="https://modernize-angular-main.netlify.app/assets/images/profile/user-3.jpg"
                        />

                        <div className="flex-wrap  block leading-6 items-center justify-center">
                          <h1 className="font-bold text-gray-900">
                            Christopher Jamil
                          </h1>
                          <h2 className="text-[13px] text-gray-500 tracking-normal">
                            Project Manager
                          </h2>
                        </div>
                      </div>
                    </th>
                    <td className="ps-14 md:ps-14lg:-px-6 py-4">
                      MedicalPro Theme
                    </td>
                    <td className="ps-14 md:ps-14lg:-px-6 py-4">
                      <span className="px-2 py-1 text-xs font-semibold text-orange-400 bg-orange-100 rounded-md">
                        High
                      </span>
                    </td>
                    <td className="ps-14 md:ps-14lg:-px-6 py-4">$12.8k</td>
                  </tr>
                  <tr className=" bg-white">
                    <th
                      scope="row"
                      className="whitespace-nowrap py-4 font-medium text-gray-900"
                    >
                      <div className="flex items-center">
                        <img
                          className="w-11 h-11 rounded-full mx-3 "
                          src="https://modernize-angular-main.netlify.app/assets/images/profile/user-4.jpg"
                        />
                        <div className="flex-wrap  block leading-6 items-center justify-center">
                          <h1 className="font-bold text-gray-900">
                            Nirav Joshi
                          </h1>
                          <h2 className="text-[13px] text-gray-500 tracking-normal">
                            Frontend Engineer
                          </h2>
                        </div>
                      </div>
                    </th>
                    <td className="text-nowrap ps-14 md:ps-14lg:-px-6 py-4">
                      Hosting Press HTML
                    </td>
                    <td className="ps-14 md:ps-14lg:-px-6 py-4">
                      <span className="px-2 py-1 text-xs font-semibold text-[#fa896b] bg-[#fdede8] rounded-md">
                        Critical
                      </span>
                    </td>
                    <td className="ps-14 md:ps-14lg:-px-6 py-4">$2.4k</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weekly;
