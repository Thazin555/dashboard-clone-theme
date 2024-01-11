import React from "react";

const BestProjects = () => {
  return (
    <div className="block lg:grid grid-cols-12 gap-10 mb-10">
      <div className="w-full block overflow-x-scroll lg:overflow-hidden lg:col-span-8">
        <div className="px-5 pt-7 py-3 border rounded-md">
          <h1 className="text-xl text-gray-700 font-semibold">Best Products</h1>
          <h3 className="text-gray-700 font-normal text-sm">
            Sell new products
          </h3>

          <div className="relative py-1 overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 py-4 rtl:text-right">
              <thead className="text-sm font-semibold text-gray-700">
                <tr className=" border-b">
                  <th scope="col" className=" py-6">
                    Product
                  </th>
                  <th scope="col" className=" ps-16 md:ps-0 py-6">
                    Progress
                  </th>
                  <th scope="col" className=" ps-16 md:ps-0 py-6">
                    Status
                  </th>
                  <th scope="col" className=" ps-16 md:ps-0 py-6">
                    Sales
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="  py-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profile"
                            src="https://modernize-angular-main.netlify.app/assets/images/products/s6.jpg"
                            className="mx-auto object-cover rounded-md   h-12 w-12 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-semibold text-nowrap whitespace-no-wrap">
                          Gaming Console
                        </p>
                        <p className="text-gray-500 text-xs whitespace-no-wrap">
                          Electronics
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="  ps-16 md:ps-0 py-6">
                    <p className="text-gray-500 whitespace-no-wrap">78.5%</p>
                  </td>

                  <td className="ps-16 md:ps-0 py-6  text-xs ">
                    <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#13deb9]">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#d4eaf5] rounded-md opacity-50"
                      ></span>
                      <span className="relative">Low</span>
                    </span>
                  </td>
                  <td className=" ps-16 md:ps-0 py-6 ">
                    <p className="text-gray-500 whitespace-no-wrap">$3.9k</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="   py-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profile"
                            src="https://modernize-angular-main.netlify.app/assets/images/products/s9.jpg"
                            className="mx-auto object-cover rounded-md   h-12 w-12 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-semibold text-nowrap whitespace-no-wrap">
                          Leather Purse
                        </p>
                        <p className="text-gray-500 text-xs whitespace-no-wrap">
                          Fashion
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="  ps-16 md:ps-0 py-6">
                    <p className="text-gray-500 whitespace-no-wrap">58.6%</p>
                  </td>

                  <td className=" ps-16 text-sm md:ps-0 py-6">
                    <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#ffae1f]">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#fae0b4] rounded-md opacity-50"
                      ></span>
                      <span className="relative">Medium</span>
                    </span>
                  </td>
                  <td className="  ps-16 md:ps-0 py-6">
                    <p className="text-gray-500 whitespace-no-wrap">$24.5k</p>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="  py-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profile"
                            src="https://modernize-angular-main.netlify.app/assets/images/products/s7.jpg"
                            className="mx-auto object-cover rounded-md   h-12 w-12 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-semibold text-nowrap whitespace-no-wrap">
                          Red Velvate Dress
                        </p>
                        <p className="text-gray-500 text-xs whitespace-no-wrap">
                          Womens Fashion
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="ps-16  md:ps-0 py-6 ">
                    <p className="text-gray-500 whitespace-no-wrap">25%</p>
                  </td>

                  <td className=" ps-16 text-sm md:ps-0 py-6">
                    <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#5d87ff]">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#d9ecf8] rounded-md opacity-50"
                      ></span>
                      <span className="relative">High</span>
                    </span>
                  </td>
                  <td className="ps-16  md:ps-0 py-6 ">
                    <p className="text-gray-500 whitespace-no-wrap">$3.8k</p>
                  </td>
                </tr>
                <tr className="">
                  <td className=" py-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profile"
                            src="https://modernize-angular-main.netlify.app/assets/images/products/s4.jpg"
                            className="mx-auto object-cover rounded-md   h-12 w-12 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700 font-semibold text-nowrap whitespace-no-wrap">
                          Headphone Boat
                        </p>
                        <p className="text-gray-500 text-xs whitespace-no-wrap">
                          Electronics
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className=" ps-16  md:ps-0 py-6">
                    <p className="text-gray-500 whitespace-no-wrap">96.3%</p>
                  </td>

                  <td className=" ps-16 text-sm md:ps-0 py-6">
                    <span className="relative inline-block px-2 py-1 font-semibold leading-tight text-[#fa896b]">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-[#fcded5] rounded-md opacity-50"
                      ></span>
                      <span className="relative">Critical</span>
                    </span>
                  </td>
                  <td className="ps-16  md:ps-0 py-6 ">
                    <p className="text-gray-500 whitespace-no-wrap">$3.54k</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-full block overflow-x-scroll lg:overflow-hidden lg:col-span-4">
        <div className="px-5 pt-7 py-3 border rounded-md">
          <h1 className="text-xl text-gray-700 font-semibold">
            Payment Gateways
          </h1>
          <h3 className="text-gray-700 font-normal text-sm">
            Platform For Income
          </h3>

          <div className=" max-w-full">
            <div className="   overflow-x-auto">
              <div className="inline-block min-w-full overflow-hidden">
                <table className="min-w-full text-left text-sm leading-normal">
                  <thead className=" font-semibold text-gray-700">
                    <tr className="border-b">
                      <th scope="col" className=" py-[27px]  ">
                        Product
                      </th>
                      <th scope="col" className=" py-[27px]  ">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=" border-b">
                      <td className=" py-7 ">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a
                              href="#"
                              className="relative block bg-[#e4f2fa] p-2 rounded-md"
                            >
                              <img
                                alt="profile"
                                src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-paypal.svg"
                                className="mx-auto object-cover rounded-md   h-6 w-6 "
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700 font-semibold whitespace-no-wrap">
                              Paypal
                            </p>
                            <p className="text-gray-500 text-xs whitespace-no-wrap">
                              Big Brands
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className=" py-7 ">
                        <p className="text-gray-500 whitespace-no-wrap">
                          +$6235
                        </p>
                      </td>
                    </tr>
                    <tr className=" border-b">
                      <td className=" py-7 ">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a
                              href="#"
                              className="relative block bg-[#e3f1f9] p-2 rounded-md"
                            >
                              <img
                                alt="profile"
                                src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-office-bag.svg"
                                className="mx-auto object-cover rounded-md   h-6 w-6 "
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700 font-semibold whitespace-no-wrap">
                              Wallet
                            </p>
                            <p className="text-gray-500 text-xs whitespace-no-wrap">
                              Bill payment
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className=" py-7 ">
                        <p className="text-gray-500 whitespace-no-wrap">
                          +$345
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className=" py-7">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a
                              href="#"
                              className="relative block bg-[#fef5e6] p-2 rounded-md"
                            >
                              <img
                                alt="profile"
                                src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-master-card.svg"
                                className="mx-auto object-cover rounded-md   h-6 w-6 "
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700 font-semibold whitespace-no-wrap">
                              Credit Card
                            </p>
                            <p className="text-gray-500 text-xs whitespace-no-wrap">
                              Money reversed
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className=" py-7">
                        <p className="text-gray-500 whitespace-no-wrap">
                          +$2235
                        </p>
                      </td>
                    </tr>
                    <tr className="">
                      <td className=" py-6 ">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a
                              href="#"
                              className="relative block bg-[#fae6e0] p-2 rounded-md"
                            >
                              <img
                                alt="profile"
                                src="https://modernize-angular-main.netlify.app/assets/images/svgs/icon-pie.svg"
                                className="mx-auto object-cover rounded-md   h-6 w-6 "
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700 font-semibold whitespace-no-wrap">
                              Refund
                            </p>
                            <p className="text-gray-500 text-xs whitespace-no-wrap">
                              Bill Payment
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className=" py-6 ">
                        <p className="text-gray-500 whitespace-no-wrap">+$32</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProjects;
