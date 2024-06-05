import React from "react";
import FilterComp from "./FilterComp";
const ParentComp = () => {
  const dropDownData = [
    {
      label: "Date of Registration",
      type: "Number",
      name: "Date of Registration",
    },
    {
      label: "Vendor Score",
      type: "Number",
    },
    {
      label: "Rating",
      type: "Number",
    },
    {
      label: "Status",
      type: "boolean",
    },
  ];
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center gap-5">
      <h1>My Filter App</h1>

      <FilterComp buttonName="Filter" dropDownData={dropDownData} />
    </div>
  );
};

export default ParentComp;
