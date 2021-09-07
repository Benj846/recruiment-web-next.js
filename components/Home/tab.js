import React from 'react';

function Tabs({ amount, name }) {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center mt-4 w-40 h-24 `}>
        <span className={`text-lg`}>{amount}</span>
        <span className={`text-sm`}>{name}</span>
      </div>
    </>
  );
}

export default Tabs;
