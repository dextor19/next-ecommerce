import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  getCartSelector
} from '@redux/cart.slice';
import styles from './CartPage.module.scss';

const CartPage = () => {
  const cart = useSelector(getCartSelector);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.cartReducer.reduce(
      (accumulator: any, item: any) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.cartReducer.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </div>
          {cart.cartReducer.map((item: any, index: any) => (
            <div className={styles.body} key={index}>
              <div className={styles.image}>
                <Image src={item.image} height="90" width="65" alt="" />
              </div>
              <p>{item.product}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Grand Total: $ {getTotalPrice()}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;