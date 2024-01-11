import React, { useState } from "react";

const Test = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item === selectedItem ? null : item);
    };
  
    return (
      <ul className="space-y-2">
        <li
          onClick={() => handleItemClick('apple')}
          className={`p-2 cursor-pointer transition ${
            selectedItem === 'apple' ? 'bg-blue-200' : ''
          }`}
        >
          Apple
        </li>
        <li
          onClick={() => handleItemClick('orange')}
          className={`p-2 cursor-pointer transition ${
            selectedItem === 'orange' ? 'bg-blue-200' : ''
          }`}
        >
          Orange
        </li>
        <li
          onClick={() => handleItemClick('mango')}
          className={`p-2 cursor-pointer transition ${
            selectedItem === 'mango' ? 'bg-blue-200' : ''
          }`}
        >
          Mango
        </li>
        <li
          onClick={() => handleItemClick('banana')}
          className={`p-2 cursor-pointer transition ${
            selectedItem === 'banana' ? 'bg-blue-200' : ''
          }`}
        >
          Banana
        </li>
        <li
          onClick={() => handleItemClick('lemon')}
          className={`p-2 cursor-pointer transition ${
            selectedItem === 'lemon' ? 'bg-blue-200' : ''
          }`}
        >
          Lemon
        </li>
      </ul>
    );
};

export default Test;
