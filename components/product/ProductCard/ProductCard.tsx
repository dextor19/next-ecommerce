import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@redux/cart.slice';
import styles from './ProductCard.module.scss';

interface Product {
    id: number;
    product: string;
    category: string;
    image: string;
    price: number;
}
interface ProductCardProps {
    product: Product;

}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();
    return (
    <div className={styles.card}>
        <Link href={`/products/${product.id}`} passHref>
            <Image src={product.image} height={584} width={304} alt="" />
        </Link>
        <div className={styles.row}>
            <h4 className={styles.title}>{product.product}</h4>
            <p className={styles.price}>$ {product.price}</p>
        </div>
        {/* <button
        onClick={() => dispatch(addToCart(product))}
        className={styles.button}
        >
        Add to Cart
        </button> */}
    </div>
    );
};

export default ProductCard;