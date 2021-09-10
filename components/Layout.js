import Nav from './Nav';
import Meta from './Meta';
import Footer from './Footer/Footer';
import styles from '../styles/Layout.module.css';
import Home from '../components/Home/Home';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
