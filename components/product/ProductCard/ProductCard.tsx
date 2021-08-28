import { FC } from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
    product: any;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <Image src={product.image} height={300} width={220} alt="" />
      <h4 className={styles.title}>{product.product}</h4>
      <h5 className={styles.category}>{product.category}</h5>
      <p>$ {product.price}</p>
      <button className={styles.button}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;