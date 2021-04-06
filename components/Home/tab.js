import React from "react";

function Tabs(props) {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center mt-4 w-40 h-24 `}>
        <span className={`text-lg`}>{props.amount}</span>
        <span className={`text-sm`}>{props.name}</span>
      </div>
    </>
  );
}

export default Tabs;
