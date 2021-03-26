import Nav from './Nav';
import Meta from './Meta';
import Footer from './Footer/Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={`${styles.container}`}>
        <main className={styles.main}>
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
