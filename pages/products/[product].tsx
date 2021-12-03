import { FC } from 'react';
import { useRouter } from 'next/router';
import ProductImage from '@components/product/ProductImage';
import ProductMenu from '@components/product/ProductMenu';
import ProductCard from '@components/product/ProductCard';
import styles from '../../styles/ShopPage.module.css';
import { getProductById, getRecommendedProducts } from '../api/products/[product]';

interface ProductPageProps {
    product: any;
    recommendedProducts: any;
}

const ProductPage: FC<ProductPageProps> = ({ product, recommendedProducts }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
          <ProductImage image={product.image} />
          <ProductMenu key={product.id} product={product} />
      </div>
      <div className={styles.bottom_border} />
      <h3 className={styles.title}>Recommended</h3>
      <div className={styles.cards}>
        {recommendedProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps(ctx: any) {
  const id = ctx.query.product;
  const response: any = await getProductById(id);
  const product = response[0];
  const recommended = product.recommended;
  const responses: any = await getRecommendedProducts(recommended);
  const recommendedProducts = responses;
  return { props: { product, recommendedProducts } };
}