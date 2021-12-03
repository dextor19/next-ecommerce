import { FC, useState, useEffect} from 'react';
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
interface ProductWithSize extends Product {
    size: string;
}
interface ProducMenuProps {
    product: ProductWithSize;

}

const ProducMenu: FC<ProducMenuProps> = ({ product }) => {
    const dispatch = useDispatch();
    const [productInState, setProduct] = useState(product);
    const [size, setSize] = useState('')

    useEffect(() => {
        setProduct( prev => ({ ...productInState, size: size}))
    }, [size, productInState]);

    return (
    <div className={styles.container}>
        <h1 className={styles.title}>{product.product}</h1>
        <p className={styles.price}>$ {product.price}</p>
        <div className={styles.bottom_border} />
        <div className={styles.select_container}>
            <p>SIZE:</p>
            <select 
            className={styles.select}
            onChange={(event) => setSize(event.target.value)}
            >
                {product.sizes.map((sizeItem: any) => (
                <option key={product.id} value={sizeItem}>{sizeItem.toUpperCase()}</option>
                ))}
            </select>
        </div>
        {product.inStock ? 
        <button
        onClick={() => dispatch(addToCart(productInState))}
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