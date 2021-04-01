import React from "react";
import homeStyle from "./Home.module.css";
function Home() {
  return (
    <div>
      <div
        className={`${homeStyle.cover} h-60 flex flex-col justify-center items-center`}>
        <i className={`bi bi-card-image ${homeStyle.icon}  `}></i>
        <button className={`w-40 h-10 text-white ${homeStyle.button} `}>
          이미지 등록
        </button>
      </div>
      <div
        className={`${homeStyle.logo} absolute top-64 w-36 h-36 flex justify-center items-center`}>
        <i className={`bi bi-card-image`}></i>
      </div>
      <div
        className={`${homeStyle.text} ml-48 mt-0.5 font-bold flex justify-left items-center`}>
        패플라이
        <button className={`${homeStyle.createButton} rounded-md w-40 h-14`}>
          +채용공고생성
        </button>
      </div>
      <div className={`${homeStyle.category} mt-16 flex border-b-2`}>
        <div className={`flex justify-center items-center w-40 h-10`}>
          채용공고 보기
        </div>
        <div className={`flex justify-center items-center  w-40 h-10`}>
          채용 전형
        </div>
        <div className={`flex justify-center items-center  w-40 h-10`}>
          전형 결과 발표
        </div>
        <div className={`flex justify-center items-center  w-40 h-10`}>
          채용Q&A
        </div>
      </div>
      <div className={`${homeStyle.tabs} flex `}>
        <div className={`flex flex-col justify-center items-center w-40 h-24 `}>
          <span>115</span>
          <span>전체</span>
        </div>
        <div className={`flex flex-col justify-center items-center w-40 h-24 `}>
          <span>115</span>
          <span>전체</span>
        </div>
        <div className={`flex flex-col justify-center items-center w-40 h-24 `}>
          <span>115</span>
          <span>전체</span>
        </div>
        <div className={`flex flex-col justify-center items-center w-40 h-24 `}>
          <span>115</span>
          <span>전체</span>
        </div>
        <div className={`flex flex-col justify-center items-center w-40 h-24 `}>
          <span>115</span>
          <span>전체</span>
        </div>
        <i
          className={`${homeStyle.gear} flex justify-center items-center bi bi-gear-fill `}></i>
      </div>
      <div
        className={`${homeStyle.list} flex justify-center items-center w-123 h-42`}>
        <span className={`${homeStyle.notice}`}>
          등록된 채용공고가 없습니다. 빠르고 효율적인 패플라이 채용공고를 통해
          인재 채용을 진행해보세요.
        </span>
      </div>
    </div>
  );
}

export default Home;
