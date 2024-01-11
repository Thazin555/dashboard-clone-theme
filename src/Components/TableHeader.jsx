import React from "react";

const TableHeader = () => {
  return (
    <div className="py-8 relative rounded-md overflow-hidden bg-[#e5f2f9] flex flex-col gap-4 px-7 mb-10">
      <h1 className="text-xl text-gray-600 font-semibold">Basic Table</h1>
      <div className="flex gap-3 items-baseline">
        <a className="text-gray-700 font-light text-sm cursor-pointer hover:text-blue-400">Dashboard</a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
            strokeWidth={0}
            fill="currentColor"
          />
        </svg>
        <h3 className="text-gray-700 font-light text-sm">Basic Table</h3>
      </div>
      <img src="https://modernize-angular-main.netlify.app/assets/images/breadcrumb/ChatBc.png" className="w-44 absolute top-20 right-0 md:top-3 md:right-7" alt="" />
    </div>
  );
};

export default TableHeader;
