import { FC } from 'react';
import { useRouter } from 'next/router';
import ProductCard from '@components/product/ProductCard';
import styles from '../../styles/ShopPage.module.css';
import { getProductsByCategory } from '../api/products/[category]';

interface CategoryPageProps {
    products: any;
}

const CategoryPage: FC<CategoryPageProps> = ({ products }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Results for {router.query.category}</h1>
      <div className={styles.cards}>
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx: any) {
  const category = ctx.query.category;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}