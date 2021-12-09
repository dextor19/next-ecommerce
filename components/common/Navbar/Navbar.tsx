import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { getCartSelector } from '@redux/cart.slice';
import { getFavouriteSelector } from '@redux/favourite.slice';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const cart = useSelector(getCartSelector);
  const favourite = useSelector(getFavouriteSelector);
  return (
    <>
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>
        <Link href="/">Suave</Link>
      </h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/shop">Shop All</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/favourite">Favourites</Link>
        </li>
        <li className={styles.navlink}>
          <div>( {favourite.favouriteReducer.length} )</div>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">Cart</Link>
        </li>
        <li className={styles.navlink}>
          <div> ( {cart.cartReducer.length} )</div>
        </li>
      </ul>
    </nav>
    </>
  );
};
  
  export default Navbar;