import React, { useState } from 'react'
import RecordMonth from "./RecordMonth";

const HomeRevenueStatus = () => {
    const [selectOpen, setSelect] = useState(false);
    const selectHandler = () => {
      setSelect(!selectOpen);
    };

    const [selectMonth, setSelectMonth] = useState([
      {
        id: 1,
        monthName: "March 2023",
        isOpen: true,
      },
      {
        id: 2,
        monthName: "April 2023",
        isOpen: false,
      },
      {
        id: 3,
        monthName: "June 2023",
        isOpen: false,
      },
    ]);
    const openMonth = (id) => {
      setSelectMonth(
        selectMonth.map((el) =>
          el.id === id ? { ...el, isOpen: true } : { ...el, isOpen: false }
        )
      );
    };
    const selectedMonthName = selectMonth.find(
      (month) => month.isOpen
    )?.monthName;
  return (
    <div className="" onClick={selectHandler}>
      <button
        className={`text-[14px] border border-[#bababa] w-[130px] hover:border-black  ${
          selectOpen && "!border-[#5d87ff]"
        } focus:outline-none rounded-md px-[10px] py-[5px] text-center inline-flex items-center justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
      >
        {selectedMonthName}
        <svg
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          aria-hidden="true"
          className="ng-tns-c2400438669-303 "
        >
          <path d="M7 10l5 5 5-5z" className="ng-tns-c2400438669-303" />
        </svg>
      </button>
      <div
        id="dropdown"
        className={`z-10 ${
          !selectOpen && "hidden"
        } absolute shadow-lg bg-white divide-y divide-gray-100 rounded-md w-[128px] dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {selectMonth.map(({ id, monthName, isOpen }) => (
            <RecordMonth
              key={id}
              id={id}
              openMonth={openMonth}
              isOpen={isOpen}
              monthName={monthName}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomeRevenueStatus