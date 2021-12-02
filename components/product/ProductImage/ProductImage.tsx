import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@redux/cart.slice';
import styles from './ProductImage.module.scss';

interface ProductImageProps {
    image: string;

}

const ProductCard: FC<ProductImageProps> = ({ image }) => {
    const dispatch = useDispatch();
    return (
    <div className={styles.container}>
        <Image src={image} height={1000} width={850} alt="" />
    </div>
    );
};

export default ProductCard;