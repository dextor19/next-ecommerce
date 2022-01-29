import { FC } from 'react';
import Image from 'next/image';
import styles from './ProductImage.module.scss';

interface ProductImageProps {
    image: string;

}

const ProductImage: FC<ProductImageProps> = ({ image }) => {
    return (
    <div className={styles.container}>
        <Image src={image} height={1000} width={850} alt="" />
    </div>
    );
};

export default ProductImage;