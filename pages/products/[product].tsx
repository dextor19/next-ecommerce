import { FC } from 'react';
import { useRouter } from 'next/router';
import ProductImage from '@components/product/ProductImage';
import styles from '../../styles/ShopPage.module.css';
import { getProductById } from '../api/products/[product]';

interface ProductPageProps {
    product: any;
}

const ProductPage: FC<ProductPageProps> = ({ product }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.product}</h1>
      <div className={styles.cards}>
          <ProductImage image={product.image} />
      </div>
    </div>
  );
};

export default ProductPage;

export async function getServerSideProps(ctx: any) {
  const id = ctx.query.product;
  const response: any = await getProductById(id);
  const product = response[0];
  return { props: { product } };
}