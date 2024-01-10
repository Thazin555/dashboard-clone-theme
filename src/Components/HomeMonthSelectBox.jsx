import React, { useState } from 'react'
const HomeMonthSelectBox = () => {
  
  return (
    <div>
      <div className="flex md:mt-0 mt-[24px]">
        <div className="me-[12px] border w-[40px] h-[40px] flex justify-center rounded-md bg-[#ecf2ff]">
          <div className="flex justify-center !items-center">
            <div className="inline-flex gap-[2px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="4"
                className=" fill-[#668eff]"
                viewBox="0 0 128 512"
              >
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="4"
                className=" fill-[#668eff]"
                viewBox="0 0 128 512"
              >
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="4"
                className=" fill-[#668eff]"
                viewBox="0 0 128 512"
              >
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="">
          <h1 className=" text-[24px] font-bold leading-[30px] text-[#2a3547]">
            $63,489.50
          </h1>
          <p className="text-[#2a3547] text-[14px]">Total Earnings</p>
        </div>
      </div>
      <div className="flex items-start mt-[32px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" !fill-[#7699ff] w-[10px] pt-[5px] "
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
        </svg>
        <div className="ml-[12px]">
          <p className="text-[#2a3547] text-[14px]">Earnings this month</p>
          <p className="text-[18px] font-semibold leading-[26px] text-[#2a3547]">
            $48,820
          </p>
        </div>
      </div>
      <div className="flex items-start mt-[32px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" !fill-[#69c8ff] w-[10px] pt-[5px] "
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
        </svg>
        <div className="ml-[12px]">
          <p className="text-[#2a3547] text-[14px]">Expense this month</p>
          <p className="text-[18px] font-semibold leading-[26px] text-[#2a3547]">
            $26,498
          </p>
        </div>
      </div>
      <div className="mt-[32px]">
        <button className=" bg-[#5d87ff] text-white w-full py-2 rounded-md">View Full Report</button>
      </div>
    </div>
  );
};

export default HomeMonthSelectBox