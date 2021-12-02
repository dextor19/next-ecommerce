import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@redux/cart.slice';
import styles from './ProductMenu.module.scss';

interface Product {
    id: number;
    product: string;
    category: string;
    image: string;
    price: number;
}
interface ProducMenuProps {
    product: Product;

}

const ProducMenu: FC<ProducMenuProps> = ({ product }) => {
    const dispatch = useDispatch();
    return (
    <div className={styles.container}>
        <button
        onClick={() => dispatch(addToCart(product))}
        className={styles.button}
        >
        Add to Cart
        </button>
    </div>
    );
};

export default ProducMenu;