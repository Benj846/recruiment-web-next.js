import Link from "next/link";
import Image from "next/image";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navInner}>
        <ul>
          <li>
            <Link href='/'>
              <Image src='/fapply_logo.svg' width='100' height='20' className={navStyles.fapplyLogo} />
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className={navStyles.navSpan}>채용공고d</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className={navStyles.navSpan}>커리어</a>
            </Link>
          </li>
          <li>
            <Link href='/works'>
              <a className={navStyles.navSpan}>채용달력</a>
            </Link>
          </li>
          <li>
            <Link href='/works'>
              <a className={navStyles.navSpan}>이력서</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href='/works'>
              <a className={navStyles.navSpan}>login</a>
            </Link>
          </li>
          <Link href='/works'>
            <a className={navStyles.navSpan}>mypage</a>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
