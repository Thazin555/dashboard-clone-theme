import React from 'react'
import BarChart from './BarChart';
import HomeMonthSelectBox from './HomeMonthSelectBox';
import HomeUpperPie from './HomeUpperPie';
import HomeUpperArea from './HomeUpperArea';
import HomeRevenueStatus from './HomeRevenueStatus';

const HomeUpperPart = () => {
  return (
    <div>
      <div className=" grid md:grid-cols-12 gap-7">
        <div className=" lg:col-span-8 md:col-span-12 border shadow-md rounded-md">
          <div className="p-[24px]">
            <div className="flex justify-between items-start mb-3">
              <div className="">
                <h1 className=" font-semibold text-[18px] text-[#2a3547] ">
                  Revenue Updates
                </h1>
                <p className="text-[#2a3547] text-[14px]">Overview of Profit</p>
              </div>
              <HomeRevenueStatus />
            </div>
            <div className="grid grid-cols-12">
              <div className=" md:col-span-8 col-span-full px-[15px]">
                <div className="!h-[380px]">
                  <BarChart />
                </div>
              </div>
              <div className=" md:col-span-4 col-span-full px-[15px] ">
                <HomeMonthSelectBox />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-full md:gap-7 md:grid-cols-12 md:grid">
          <HomeUpperPie />
          <HomeUpperArea />
        </div>
      </div>
    </div>
  );
}

export default HomeUpperPart