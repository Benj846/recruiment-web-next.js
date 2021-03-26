import Image from 'next/image';
import styles from '../Footer/Footer.module.css';

function Footer(props) {
  return (
    <div className={`${styles.footerContainer} mt-12 w-full`}>
      <div className={`container`}>
        <ul
          className={`${styles.footerMenu} flex py-5 gap-x-7 lg:justify-start justify-center`}
        >
          <li className={`${styles.fmList} pr-7`}>서비스 소개</li>
          <li className={`${styles.fmList} pr-7`}>이용약관</li>
          <li className={`${styles.fmList} pr-7`}>개인정보처리방침</li>
          <li className={`${styles.fmList} pr-7`}>고객센터</li>
        </ul>
      </div>
      <div className={`${styles.footerCopyWrap}`}>
        <div
          className={`${styles.footerInner} container py-12 flex lg:flex-row items-center flex-col `}
        >
          <Image
            src="/Logo.svg"
            width={100}
            height={20}
            className={styles.footerLogo}
          />
          <div className={`${styles.footerTxtWrap} lg:-mt-2 lg:ml-8 mt-8`}>
            <span className={styles.corpName}>제뉴이스트(주) 패플라이</span>
            <p className={styles.txt}>
              고객센터 : (070) 8778-1222 (평일 09:00 ~ 18:00, 주말 및 공휴일
              휴무)
            </p>
            <p className={styles.txt}>
              우21998, 인천시 연수구 하모니로 138번길 11 송도캐슬센트럴파크
              102동 331호 | 대표: 김진규
            </p>
            <p className={styles.txt}>
              사업자등록: 548-59-00430 | 통신판매업 신고번호
              제2020-인천연수-00000호
            </p>
            <span className={`${styles.copyright} mt-6`}>
              Copyright© (주)제뉴이스트, All rights reserved.
            </span>
          </div>
          <div className={`${styles.directWrap} w-full lg:w-64 mt-8 lg:mt-0`}>
            <ul className={styles.directMenu}>
              <li className={`${styles.diList} pl-8 py-8 lg:py-3`}>
                <i className={`bi bi-save mr-8 text-base`}></i>
                <span className={styles.diTxt}>iOS Application</span>
              </li>
              <li className={`${styles.diList} pl-8 py-8 lg:py-3`}>
                <i className={`bi bi-save mr-8 text-base`}></i>
                <span className={styles.diTxt}>Android Application</span>
              </li>
              <li className={`${styles.diList} pl-8 py-8 lg:py-3`}>
                <i className={`bi bi-save mr-8 text-base`}></i>
                <span className={styles.diTxt}>제뉴이스트(주) 소개 PDF</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
