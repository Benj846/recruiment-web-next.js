import React from "react";

function Tabs(props) {
  return (
    <>
      <div className={`flex flex-col justify-center items-center w-40 h-24 `}>
        <span>{props.amount}</span>
        <span>{props.name}</span>
      </div>
    </>
  );
}

export default Tabs;
