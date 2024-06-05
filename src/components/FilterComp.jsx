import React, { useState } from "react";

const FilterComp = ({ dropDownData, buttonName }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropDown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <button onClick={handleDropDown} className="bg-yellow-500 px-4 py-2">
        {buttonName}
      </button>

      {showDropdown &&
        dropDownData.map((item, index) => {
          return (
            <div key={index} className="text-black">
              <select className="w-44" id="">
                <option value={item.label}>{item.label}</option>
              </select>
            </div>
          );
        })}
    </>
  );
};

export default FilterComp;
