import React from 'react'

const RecordMonth = ({monthName,isOpen,id,openMonth}) => {
  return (
    <li className="" onClick={() => openMonth(id)}>
      <a
        href="#"
        className={`flex justify-between px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isOpen && "text-[#96b0fd]"}`}
      >
        {monthName}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-5 h-5 ${isOpen ? "block text-[#96b0fd]" : "hidden"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </a>
    </li>
  );
}

export default RecordMonth