import React, { useEffect, useRef, useState } from "react";

const DropdownTest = () => {
  const [openApp, setOpenApp] = useState(false);
  const dropdownRef = useRef(null);

  const handleApp = () => {
    setOpenApp(!openApp);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpenApp(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); 

  return (
    <div ref={dropdownRef} className="">
      <button className="bg-gray-500 px-4 py-2" onClick={handleApp}>Toggle Dropdown</button>
      {openApp && (
        <div className="dropdown-content">
          {/* Dropdown content goes here */}
          <p>Dropdown Content</p>
        </div>
      )}
    </div>
  );
};

export default DropdownTest;
