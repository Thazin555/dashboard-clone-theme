import React from "react";

const TopProject = () => {
  return (
    <div className=" px-5 pt-7 py-3 border rounded-md mb-10">
      <h1 className="text-xl text-gray-700 font-semibold">Top Projects</h1>
      <h3 className="text-gray-700 font-normal text-sm">top new products</h3>

      
        {/* <div className=" pt-4  relative overflow-x-auto">
          
            <table className="w-full  leading-normal">
              <thead className="text-sm font-semibold text-gray-700">
                <tr>
                  <th
                    scope="col"
                    className=" py-3 text-left bg-white border-b border-gray-200"
                  >
                    Assigned
                  </th>
                  <th
                    scope="col"
                    className=" py-3 text-left bg-white border-b border-gray-200"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className=" py-3 text-left bg-white border-b border-gray-200"
                  >
                    Priority
                  </th>
                  <th
                    scope="col"
                    className=" py-3 text-left bg-white border-b border-gray-200"
                  >
                    Budget
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" py-5 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profile"
                            src="https://modernize-angular-main.netlify.app/assets/images/profile/user-1.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-semibold whitespace-no-wrap">
                          Sunil Joshi
                        </p>
                        <p className="text-gray-500 text-xs whitespace-no-wrap">
                          Web Designer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className=" py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-500 whitespace-no-wrap">
                      Elite Admin
                    </p>
                  </td>

                  <td className=" py-5 text-xs bg-white border-b border-gray-200">
                    <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#13deb9]">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#d4eaf5] rounded-md opacity-50"
                      ></span>
                      <span className="relative">Low</span>
                    </span>
                  </td>
                  <td className=" py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-500 whitespace-no-wrap">$3.9k</p>
                  </td>
                </tr>
                <tr>
                  <td className=" py-5 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profile"
                            src="https://modernize-angular-main.netlify.app/assets/images/profile/user-2.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-semibold whitespace-no-wrap">
                          Andrew McDownland
                        </p>
                        <p className="text-gray-500 text-xs whitespace-no-wrap">
                          Project Manager
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className=" py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-500 whitespace-no-wrap">
                      Real Homes Theme
                    </p>
                  </td>

                  <td className=" py-5 text-xs bg-white border-b border-gray-200">
                    <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#5d87ff]">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#d7e8f1] rounded-md opacity-50"
                      ></span>
                      <span className="relative">Medium</span>
                    </span>
                  </td>
                  <td className=" py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-500 whitespace-no-wrap">$24.5k</p>
                  </td>
                </tr>
                <tr>
                  <td className=" py-5 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profile"
                            src="https://modernize-angular-main.netlify.app/assets/images/profile/user-3.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-semibold whitespace-no-wrap">
                          Christopher Jamil
                        </p>
                        <p className="text-gray-500 text-xs whitespace-no-wrap">
                          Project Manager
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className=" py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-500 whitespace-no-wrap">
                      MedicalPro Theme
                    </p>
                  </td>

                  <td className=" py-5 text-xs bg-white border-b border-gray-200">
                    <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#ffae1f]">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#fae0b4] rounded-md opacity-50"
                      ></span>
                      <span className="relative">High</span>
                    </span>
                  </td>
                  <td className=" py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-500 whitespace-no-wrap">$12.8k</p>
                  </td>
                </tr>
                <tr>
                  <td className=" py-5 text-sm bg-white">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profile"
                            src="https://modernize-angular-main.netlify.app/assets/images/profile/user-4.jpg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-semibold whitespace-no-wrap">
                          Nirav Joshi
                        </p>
                        <p className="text-gray-500 text-xs whitespace-no-wrap">
                          Frontend Engineer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className=" py-5 text-sm bg-white">
                    <p className="text-gray-500 whitespace-no-wrap">
                      Hosting Press HTML
                    </p>
                  </td>

                  <td className=" py-5 text-xs bg-white">
                    <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#fa896b]">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#ebbeb1] rounded-md opacity-50"
                      ></span>
                      <span className="relative">Critical</span>
                    </span>
                  </td>
                  <td className=" py-5 text-sm bg-white">
                    <p className="text-gray-500 whitespace-no-wrap">$2.4k</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}
           <div className="relative py-1 overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 py-4 rtl:text-right ">
              <thead className="text-sm  font-semibold text-gray-600">
                <tr className="border-b">
                  <th scope="col" className=" py-4">
                    Assigned
                  </th>
                  <th scope="col" className="ps-14 md:ps-0 py-6">
                    Name
                  </th>
                  <th scope="col" className="ps-14 md:ps-0 py-6  ">
                    Priority
                  </th>
                  <th scope="col" className="ps-14 md:ps-0 py-6">
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
                        className="w-11 h-11 rounded-full mr-4 "
                        src="https://modernize-angular-main.netlify.app/assets/images/profile/user-1.jpg"
                      />
                      <div className="flex-wrap leading-6 items-center justify-center">
                        <h1 className="font-bold text-gray-700">Sunil Joshi</h1>
                        <h2 className="text-[13px] text-gray-500 tracking-normal">
                          Web Designer
                        </h2>
                      </div>
                    </div>
                  </th>
                  <td className="   ps-14 md:ps-0 py-4">Elite Admin</td>
                  <td className="  ps-14 md:ps-0 py-4">
                    <span className="px-2 py-1 text-xs font-semibold text-[#13deb9] bg-[#e8f7ff] rounded-md">
                      Low
                    </span>
                  </td>
                  <td className="   ps-14 md:ps-0 py-4">$3.9k</td>
                </tr>
                <tr className="border-b bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 font-medium text-gray-700"
                  >
                    <div className="flex items-center">
                      <img
                        className="w-11 h-11 rounded-full mr-4 "
                        src="https://modernize-angular-main.netlify.app/assets/images/profile/user-2.jpg"
                      />
                      <div className="flex-wrap  block leading-6 items-center justify-center">
                        <h1 className="font-bold text-gray-700">
                          Andrew McDownland
                        </h1>
                        <h2 className="text-[13px] text-gray-500 tracking-normal">
                          Project Manager
                        </h2>
                      </div>
                    </div>
                  </th>
                  <td className=" text-nowrap  ps-14 md:ps-0 py-4">
                    Real Homes Theme
                  </td>
                  <td className="    ps-14 md:ps-0 py-4">
                    <span className="px-2 py-1 font-semibold text-xs text-blue-500 bg-blue-100 rounded-md">
                      Medium
                    </span>
                  </td>
                  <td className="ps-14 md:ps-0 py-4">$24.5k</td>
                </tr>
                <tr className="border-b bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 font-medium text-gray-700"
                  >
                    <div className="flex items-center">
                      <img
                        className="w-11 h-11 rounded-full mr-4 "
                        src="https://modernize-angular-main.netlify.app/assets/images/profile/user-3.jpg"
                      />

                      <div className="flex-wrap  block leading-6 items-center justify-center">
                        <h1 className="font-bold text-gray-700">
                          Christopher Jamil
                        </h1>
                        <h2 className="text-[13px] text-gray-500 tracking-normal">
                          Project Manager
                        </h2>
                      </div>
                    </div>
                  </th>
                  <td className="ps-14 md:ps-0 text-nowrap py-4">
                    MedicalPro Theme
                  </td>
                  <td className="ps-14 md:ps-0 py-4">
                    <span className="px-2 py-1 text-xs font-semibold text-[#ffae1f] bg-orange-100 rounded-md">
                      High
                    </span>
                  </td>
                  <td className="ps-14 md:ps-0 py-4">$12.8k</td>
                </tr>
                <tr className=" bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap py-4 font-medium text-gray-700"
                  >
                    <div className="flex items-center">
                      <img
                        className="w-11 h-11 rounded-full mr-4 "
                        src="https://modernize-angular-main.netlify.app/assets/images/profile/user-4.jpg"
                      />
                      <div className="flex-wrap  block leading-6 items-center justify-center">
                        <h1 className="font-bold text-gray-700">Nirav Joshi</h1>
                        <h2 className="text-[13px] text-gray-500 tracking-normal">
                          Frontend Engineer
                        </h2>
                      </div>
                    </div>
                  </th>
                  <td className="text-nowrap  ps-14 md:ps-0 py-4">
                    Hosting Press HTML
                  </td>
                  <td className=" ps-14 md:ps-0 py-4">
                    <span className="px-2 py-1 text-xs font-semibold text-[#fa896b] bg-[#fdede8] rounded-md">
                      Critical
                    </span>
                  </td>
                  <td className=" ps-14 md:ps-0 py-4">$2.4k</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
     
  
  );
};

export default TopProject;
