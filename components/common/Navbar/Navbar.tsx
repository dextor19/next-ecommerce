import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
      <>
      <nav className={styles.navbar}>
        <h6 className={styles.logo}>
          <Link href="/">Suave</Link>
        </h6>
        <ul className={styles.links}>
          <li className={styles.navlink}>
            <Link href="/shop">Shop</Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.bottom_border} />
      </>
    );
  };
  
  export default Navbar;