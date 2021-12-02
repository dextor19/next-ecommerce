import styles from '../styles/Home.module.css'
import CategoryCard from '@components/category/CategoryCard';
import Hero from '@components/common/Hero';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <Hero 
          image="https://images.unsplash.com/photo-1601484993548-6b0e300c0a5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
          name="Suave" 
        />
      <div className={styles.grid}>
        <CategoryCard 
          image="https://images.unsplash.com/photo-1576417677416-6ca3adfb5435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          name="T-Shirts" 
        />
        <CategoryCard 
          image="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
          name="Shirts" 
        />
        <CategoryCard 
          image="https://images.unsplash.com/photo-1529635229076-82fefed713c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
          name="Suits" 
        />
        <CategoryCard 
          image="https://images.unsplash.com/photo-1625357165350-bdbcb6d7d524?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
          name="Shoes" 
        />
        <CategoryCard
          image="https://images.unsplash.com/photo-1594438499712-bfd8b9f34597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80"
          name="Umbrellas"
        />
        <CategoryCard
          image="https://images.unsplash.com/photo-1525103504173-8dc1582c7430?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
          name="Bags"
        />
      </div>
      <div className={styles.bottom_border} />
    </main>
  );
};

export default HomePage;
