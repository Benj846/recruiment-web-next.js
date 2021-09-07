import React, { useState } from 'react';
import Tabs from './tab';
import homeStyle from './Home.module.css';
import Image from 'next/image';
import classNames from 'classnames';
function Home() {
  const [click, setClick] = useState(false);

  // const conditionalClasses = classNames("flex", "justify-center", "items-center", "w-40 ", "h-10", {
  //   isActive: click === true,
  // });
  return (
    <div>
      <div
        className={` ${homeStyle.cover} h-60 flex flex-col justify-center items-center`}
        // onClick={() => setClick(!click)}
      >
        <i className={`bi bi-card-image ${homeStyle.icon}  `}></i>
        <button
          className={`w-40 h-10 text-white ${homeStyle.button} `}
          // onClick={() => console.log("object")}
        >
          이미지 등록
        </button>
      </div>
      <div
        className={`${homeStyle.logo} absolute top-64 w-36 h-36 flex justify-center items-center`}>
        <i className={`bi bi-card-image`}></i>
      </div>
      <div className={`flex justify-between mt-4`}>
        <div
          className={`${homeStyle.text} ml-40 mt-0.5 font-bold flex justify-left items-center `}>
          Home page
        </div>
        <button className={`${homeStyle.createButton} rounded-md w-48 h-16`}>
          +Create
        </button>
      </div>
      <div
        className={`${homeStyle.category} mt-12 flex border-b border-gray-700`}>
        <div
          className={` 
          // prettier-ignore
          ${click ? '' : homeStyle.isActive} 
          flex justify-center items-center  w-40 h-10`}
          onClick={() => setClick(!click)}>
          Tab1
        </div>
        <div className={`flex justify-center items-center  w-40 h-10`}>
          Tab2
        </div>
        <div className={`flex justify-center items-center  w-40 h-10`}>
          Tab3
        </div>
        <div className={`flex justify-center items-center  w-40 h-10`}>
          Tab4
        </div>
      </div>
      <div
        className={`${homeStyle.tabs} flex  justify-between border-b border-gray-300`}>
        <div className={`flex`}>
          <Tabs name="dynamic" amount="115" />
          <Tabs name="dynamic" amount="115" />
          <Tabs name="dynamic" amount="115" />
          <Tabs name="dynamic" amount="115" />
          <Tabs name="dynamic" amount="115" />
        </div>
        <i
          className={`${homeStyle.gear} flex justify-center items-center mr-3 bi bi-gear-fill `}></i>
      </div>
      <div
        className={`${homeStyle.list} flex flex-col justify-center items-center w-123 h-42 pb-2`}>
        <Image
          src="/undraw-empty-xct-9-1_1.webp"
          width={240}
          height={180}
          className={`${homeStyle.image}`}
        />
        {/* <span className={`${homeStyle.notice} mt-10`}>등록된 채용공고가 없습니다.</span>
        <span className={`${homeStyle.notice} `}>
          빠르고 효율적인 패플라이 채용공고를 통해 인재 채용을 진행해보세요.
        </span> */}
      </div>
    </div>
  );
}

export default Home;
