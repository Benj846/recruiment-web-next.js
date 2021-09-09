import Link from 'next/link';
import Image from 'next/image';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={`navStyles.nav fixed w-screen bg-white`}>
      <div className={`container flex justify-between items-center h-16`}>
        <ul className={`${navStyles.liWrapper} flex items-center`}>
          <li className={``}>
            <Link href="/">
              <a className={`w-40`}>
                <Image
                  src="/ben_logo.png"
                  alt="Ben_Logo"
                  width={600}
                  height={600}
                />
              </a>
            </Link>
          </li>
          <li>
            <ul className={`lg:flex hidden gap-9`}>
              <li>
                <Link href="/custom">
                  <a className={navStyles.navSpan}>Custom</a>
                </Link>
              </li>
              <li>
                <Link href="/phonecase">
                  <a className={navStyles.navSpan}>Phone case</a>
                </Link>
              </li>
              <li>
                <Link href="/review">
                  <a className={navStyles.navSpan}>Review</a>
                </Link>
              </li>
              <li>
                <Link href="/help">
                  <a className={navStyles.navSpan}>Help</a>
                </Link>
              </li>
              <li>
                <Link href="/works">
                  <a className={navStyles.navSpan}>works</a>
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
