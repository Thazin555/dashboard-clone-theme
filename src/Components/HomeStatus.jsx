import React from 'react'

const HomeStatus = () => {
  return (
    <div className=" grid grid-cols-12 gap-[30px] mb-[30px] font-semibold">
      <div className=" lg:col-span-2 md:col-span-4 col-span-6 text-center p-[32px] bg-[#ecf2ff] ">
        <img
          src="src/img/icon-user-male.svg"
          className=" mx-auto w-[40px]"
          alt=""
        />
        <p className=" mt-[8px] text-[#5d87ff]">Employees</p>
        <p className="mt-[8px] text-[#5d87ff] text-[21px]">96</p>
      </div>
      <div className=" lg:col-span-2 md:col-span-4 col-span-6 text-center p-[32px] bg-[#fef5e5] ">
        <img
          src="src/img/icon-briefcase.svg"
          className=" mx-auto w-[40px]"
          alt=""
        />
        <p className=" mt-[8px] text-[#ffae1f]">Clients</p>
        <p className="mt-[8px] text-[#ffae1f] text-[21px]">3,650</p>
      </div>
      <div className=" lg:col-span-2 md:col-span-4 col-span-6 text-center p-[32px] bg-[#e8f7ff] ">
        <img
          src="src/img/icon-mailbox.svg"
          className=" mx-auto w-[40px]"
          alt=""
        />
        <p className=" mt-[8px] text-[#49beff]">Projects</p>
        <p className="mt-[8px] text-[#49beff] text-[21px]">356</p>
      </div>
      <div className=" lg:col-span-2 md:col-span-4 col-span-6 text-center p-[32px] bg-[#fdede8] ">
        <img
          src="src/img/icon-favorites.svg"
          className=" mx-auto w-[40px]"
          alt=""
        />
        <p className=" mt-[8px] text-[#fa896b]">Events</p>
        <p className="mt-[8px] text-[#fa896b] text-[21px]">696</p>
      </div>
      <div className=" lg:col-span-2 md:col-span-4 col-span-6 text-center p-[32px] bg-[#e6fffa] ">
        <img
          src="src/img/icon-speech-bubble.svg"
          className=" mx-auto w-[40px]"
          alt=""
        />
        <p className=" mt-[8px] text-[#13deb9]">Payroll</p>
        <p className="mt-[8px] text-[#13deb9] text-[21px]">$96k</p>
      </div>
      <div className=" lg:col-span-2 md:col-span-4 col-span-6 text-center p-[32px] bg-[#e8f7ff] ">
        <img
          src="src/img/icon-connect.svg"
          className=" mx-auto w-[40px]"
          alt=""
        />
        <p className=" mt-[8px] text-[#49beff]">Reports</p>
        <p className="mt-[8px] text-[#49beff] text-[21px]">59</p>
      </div>
    </div>
  );
}

export default HomeStatus