import React from "react";

const EmployeeOfTheYear = () => {
  return (
    <div className="px-5 pt-7 py-3 border rounded-md mb-10">
      <h1 className="text-xl text-gray-700 font-semibold">
        Employee of the Year
      </h1>
      <h3 className="text-gray-700 font-normal text-sm">great work</h3>

      <div className="relative py-1 overflow-x-auto ">
        <table className="w-full text-left text-sm text-gray-500 py-4 rtl:text-right ">
          <thead className="text-base font-semibold text-gray-700">
            <tr className="border-b">
              <th scope="col" className=" py-6 ">
                Users
              </th>
              <th scope="col" className=" ps-16 md:ps-0 text-nowrap py-6">
                Project Name
              </th>
              <th scope="col" className=" ps-16 md:ps-0 py-6">
                Status
              </th>
              <th scope="col" className=" text-right ps-16 md:ps-0 py-6">
                Budget
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className=" py-6 ">
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
                    <p className="text-gray-700 text-nowrap font-semibold whitespace-no-wrap">
                      Micheal Doe
                    </p>
                    <p className="text-gray-500 text-nowrap text-xs whitespace-no-wrap">
                      Web Designer
                    </p>
                  </div>
                </div>
              </td>
              <td className="ps-16 md:ps-0 py-6 ">
                <p className="text-gray-500 text-nowrap whitespace-no-wrap">
                  Elite Admin
                </p>
              </td>

              <td className="ps-16 md:ps-0 py-6  text-xs ">
                <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#13deb9]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#daffe3] rounded-full opacity-50"
                  ></span>
                  <span className="relative">Active</span>
                </span>
              </td>
              <td className="ps-16 md:ps-0 py-6 text-base text-right ">
                <p className="text-gray-700 font-semibold whitespace-no-wrap">
                  $3.9k
                </p>
              </td>
            </tr>
            <tr className="border-b">
              <td className=" py-6">
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
                    <p className="text-gray-700 text-nowrap font-semibold whitespace-no-wrap">
                      Andrew McDownland
                    </p>
                    <p className="text-gray-500 text-nowrap text-xs whitespace-no-wrap">
                      Project Manager
                    </p>
                  </div>
                </div>
              </td>
              <td className="ps-16 md:ps-0 py-6">
                <p className="text-gray-500 text-nowrap whitespace-no-wrap">
                  Real Homes WP Theme
                </p>
              </td>

              <td className="  text-xs ps-16 md:ps-0 py-6">
                <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#ffae1f]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#fae0b4] rounded-full opacity-50"
                  ></span>
                  <span className="relative">Pending</span>
                </span>
              </td>
              <td className=" py-5 text-base text-right font-semibold bg-white border-b border-gray-200">
                <p className="text-gray-700 whitespace-no-wrap">$3.9k</p>
              </td>
            </tr>
            <tr className="border-b">
              <td className="  py-6">
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
                    <p className="text-gray-700 text-nowrap font-semibold whitespace-no-wrap">
                      Christopher Jamil
                    </p>
                    <p className="text-gray-500  text-nowrap text-xs whitespace-no-wrap">
                      Frontend Engineer
                    </p>
                  </div>
                </div>
              </td>
              <td className=" ps-16 md:ps-0 py-6">
                <p className="text-gray-500 text-nowrap whitespace-no-wrap">
                  MedicalPro WP Theme
                </p>
              </td>

              <td className="  text-xs ps-16 md:ps-0 py-6">
                <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#fa896b]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#fad9cf] rounded-full opacity-50"
                  ></span>
                  <span className="relative">Cancel</span>
                </span>
              </td>
              <td className="  text-base text-right ps-16 md:ps-0 py-6">
                <p className="text-gray-700 font-semibold whitespace-no-wrap">
                  $3.9k
                </p>
              </td>
            </tr>
            <tr className="border-b">
              <td className=" py-6">
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
                    <p className="text-gray-700 text-nowrap font-semibold whitespace-no-wrap">
                      Mathew Anderson
                    </p>
                    <p className="text-gray-500 text-nowrap text-xs whitespace-no-wrap">
                      Content Writer
                    </p>
                  </div>
                </div>
              </td>
              <td className="ps-16 md:ps-0 py-6">
                <p className="text-gray-500 whitespace-no-wrap">
                  Hosting Press HTML
                </p>
              </td>

              <td className="  text-xs ps-16 md:ps-0 py-6">
                <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#5d87ff]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#e4f2fa] rounded-full opacity-50"
                  ></span>
                  <span className="relative">Completed</span>
                </span>
              </td>
              <td className="  text-base text-right ps-16 md:ps-0 py-6">
                <p className="text-gray-700 whitespace-no-wrap">$3.9k</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeOfTheYear;
