import React from "react";

const TopProject = () => {
  return (
    <div className="px-5 pt-7 py-3 border rounded-md mb-10">
      <h1 className="text-xl text-gray-700 font-semibold">Top Projects</h1>
      <h3 className="text-gray-700 font-normal text-sm">top new products</h3>

      <div className=" max-w-full">
        <div className=" pt-4  overflow-x-auto">
          <div className="inline-block min-w-full overflow-hidden">
            <table className="min-w-full leading-normal">
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
                    <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#49beff]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProject;
