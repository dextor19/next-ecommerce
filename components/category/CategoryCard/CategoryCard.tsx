import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CategoryCard.module.scss';

interface CategoryCardProps {
    image: string;
    name: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ image, name }) => {
  return (
    <div className={styles.card}>
      <Link href={`/category/${name.toLowerCase()}`} passHref>
        <Image className={styles.image} src={image} height={700} width={1300} alt="" />
      </Link>
      <Link href={`/category/${name.toLowerCase()}`} passHref>
        <div className={styles.info}>
          <h3>{name}</h3>
        </div>
      </Link>
    </div>
  );
};
export default CategoryCard;