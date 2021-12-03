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
    sizes: any;
    description: string;
    inStock: boolean;
}
interface ProducMenuProps {
    product: Product;

}

const ProducMenu: FC<ProducMenuProps> = ({ product }) => {
    const dispatch = useDispatch();
    return (
    <div className={styles.container}>
        <h1 className={styles.title}>{product.product}</h1>
        <p className={styles.price}>$ {product.price}</p>
        <div className={styles.bottom_border} />
        {product.inStock ? 
        <button
        onClick={() => dispatch(addToCart(product))}
        className={styles.button}
        >
        Add to Cart
        </button>
        :
        <button
        className={styles.sold_out_button}
        >
        Sold Out
        </button>
        }
        <p className={styles.description}>{product.description}</p>
        <p className={styles.instock}>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>
    );
};

export default ProducMenu;