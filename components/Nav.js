import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={`container flex justify-between items-center h-16`}>
        <ul className={`flex items-center`}>
          <li className={`mr-20`}>
            <Link href="/">
              <a>
                <Image src="/fapplylogo.svg" width={100} height={20} />
              </a>
            </Link>
          </li>
          <li>
            <ul className={`lg:flex hidden gap-9`}>
              <li>
                <Link href="/">
                  <a className={navStyles.navSpan}>채용공고</a>
                </Link>
              </li>
              <li>
                <Link href="/career">
                  <a className={navStyles.navSpan}>커리어</a>
                </Link>
              </li>
              <li>
                <Link href="/works">
                  <a className={navStyles.navSpan}>채용달력</a>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <a className={navStyles.navSpan}>이력서</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        {/* Utility links */}
        <ul className={`flex items-center`}>
          <li>
            <Link href="/signin">
              <a className={navStyles.navSpan}>로그인/회원가입</a>
            </Link>
          </li>
          <li className={`hidden`}>
            <Link href="/mypage">
              <a className={navStyles.navSpan}>마이페이지</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
