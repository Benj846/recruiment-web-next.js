import Image from "next/image";
import styles from "../Footer/Footer.module.css";

function Footer(props) {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInner}>
        <ul className={styles.footerMenu}>
          <li className={styles.fmList}>서비스 소개</li>
          <li className={styles.fmList}>이용약관</li>
          <li className={styles.fmList}>개인정보처리방침</li>
          <li className={styles.fmList}>고객센터</li>
        </ul>
      </div>
      <div className={styles.footerCopyWrap}>
        <div className={styles.footerInner}>
          <Image
            src='/Logo.svg'
            width={100}
            height={20}
            className={styles.footerLogo}
          />
          <div className={styles.footerTxtWrap}>
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
            <span className={styles.copyright}>
              Copyright© (주)제뉴이스트, All rights reserved.
            </span>
          </div>
          <div className={styles.directWrap}>
            <ul className={styles.directMenu}>
              <li className={styles.diList}>
                {/* <Image
                  src='/icondownload.png'
                  alt='icon'
                  height={19}
                  width={19}
                  className={styles.diIco}
                /> */}
                <span className={styles.diList}>iOS Application</span>
              </li>
              <li className={styles.diList}>
                {/* <Image
                  src='/icondownload.png'
                  height={19}
                  width={19}
                  className={styles.diIco}
                /> */}
                <span className={styles.diTxt}>Android Application</span>
              </li>
              <li className={styles.diList}>
                {/* <Image
                  src='/icon_download.png'
                  height={19}
                  width={19}
                  className={styles.diIco}
                /> */}
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
