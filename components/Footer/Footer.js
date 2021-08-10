import Image from "next/image";
import styles from "../Footer/Footer.module.css";

function Footer(props) {
  return (
    <div className={`${styles.footerContainer} mt-12 w-full`}>
      <div className={`container`}>
        <ul className={`${styles.footerMenu} flex py-5 gap-x-7 lg:justify-start justify-center`}>
          <li className={`${styles.fmList} pr-7`}>intro to service</li>
          <li className={`${styles.fmList} pr-7`}>policy</li>
          <li className={`${styles.fmList} pr-7`}>privaly policy</li>
          <li className={`${styles.fmList} pr-7`}>help</li>
        </ul>
      </div>
      <div className={`${styles.footerCopyWrap}`}>
        <div
          className={`${styles.footerInner} container py-12 flex lg:flex-row items-center flex-col `}>
          <Image
            src='/Logo.svg'
            alt='Fapply'
            width={100}
            height={20}
            className={styles.footerLogo}
          />
          <div className={`${styles.footerTxtWrap} lg:-mt-2 lg:ml-8 mt-8`}>
            <span className={styles.corpName}>words</span>
            <p className={styles.txt}>words</p>
            <p className={styles.txt}>words</p>
            <p className={styles.txt}>words</p>
            <span className={`${styles.copyright} mt-6`}>words</span>
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
                <span className={styles.diTxt}>words</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
