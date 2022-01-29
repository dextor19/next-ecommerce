import { FC } from 'react';
import ProductCard from '@components/product/ProductCard';
import styles from '../styles/ShopPage.module.css';
import { getProducts } from './api/products/index';

interface ShopPageProps {
    products: any;
}
const ShopPage: FC<ShopPageProps> = ({ products }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Results</h1>
      <div className={styles.cards}>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}