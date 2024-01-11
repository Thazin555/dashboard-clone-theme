import React from 'react'
import UpperPieChart from './UpperPieChart';

const HomeUpperPie = () => {
  return (
    <div className=" lg:col-span-full md:col-span-6 border shadow-md rounded-md p-[24px]">
      <h3 className="font-semibold text-[18px] text-[#2a3547]">
        Yearly Breakup
      </h3>
      <div className="mt-[24px] grid grid-cols-12">
        <div className=" col-span-7">
          <p className="text-[24px] font-bold leading-[30px] text-[#2a3547]">
            $36,358
          </p>
          <div className="mt-[16px]">
            <div className="flex">
              <div className="w-6 h-6 p-[3px] border rounded-full bg-[#E6FFFA] border-[#e6fffa]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="text-[#13DEB9]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className=" ml-[12px] text-[14px]">
                <span className=" font-semibold">+9%</span>
                <span className="text-[#2a3547] ms-1">last year</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex mt-[32px] items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" !fill-[#7699ff] w-[10px] pt-[5px]"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                </svg>
                <p className="text-[#2a3547] text-[14px]">2023</p>
              </div>
              <div className="flex mt-[32px] items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" !fill-[#ecf2ff] w-[10px] pt-[5px]"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                </svg>
                <p className="text-[#2a3547] text-[14px]">2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <UpperPieChart />
        </div>
      </div>
    </div>
  );
}

export default HomeUpperPie