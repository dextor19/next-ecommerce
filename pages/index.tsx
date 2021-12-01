import styles from '../styles/Home.module.css'
import CategoryCard from '@components/category/CategoryCard';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard 
          image="https://imgur.com/uKQqsuA.png" 
          name="T-Shirts" 
        />
        <CategoryCard 
          image="https://imgur.com/3Y1DLYC.png" 
          name="Shirts" 
        />
        <CategoryCard 
          image="https://imgur.com/Dm212HS.png" 
          name="Suits" 
        />
      </div>
      <div className={styles.large}>
        <CategoryCard 
          image="https://imgur.com/qb6IW1f.png" 
          name="Shoes" 
        />
        <CategoryCard
          image="https://imgur.com/HsUfuRU.png"
          name="Umbrellas"
        />
        <CategoryCard
          image="https://imgur.com/HsUfuRU.png"
          name="Bags"
        />
      </div>
    </main>
  );
};

export default HomePage;
