import React from 'react'

const FormHeading = () => {
  return (
      <div className="relative overflow-hidden py-[30px] bg-[#ecf2ff] px-[24px] rounded-md">
        <div>
          <h1 className=" font-semibold text-[20px] mb-[16px]">Form Wizard</h1>
          <div className="flex items-center gap-3">
            <a href="" className=" hover:text-[#5d87ff] duration-200">
              Dashboard
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-2 h-2 mt-2"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
            </svg>
            <p>Form Wizard</p>
          </div>
        </div>
        <div className="absolute md:top-3 top-[55%] md:right-6 right-3">
          <img
            className=" w-44 aspect-square"
            src="https://modernize-angular-main.netlify.app/assets/images/breadcrumb/ChatBc.png"
            alt=""
          />
        </div>
      </div>
  );
}

export default FormHeading