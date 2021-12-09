import Image from 'next/image';
import { useSelector } from 'react-redux';
import { getFavouriteSelector } from '@redux/favourite.slice';
import styles from './FavouritePage.module.scss';
import ProductCard from '@components/product/ProductCard';

const FavouritePage = () => {
  const favourite = useSelector(getFavouriteSelector);
  console.log(favourite.favouriteReducer.length)
  return (
    <div className={styles.container}>
      {favourite.favouriteReducer.length === 0 ? (
        <h1>No Favourites</h1>
      ) : (
        <>
          <h1 className={styles.title}>Favourites</h1>
          <div className={styles.cards}>
            {favourite.favouriteReducer.map((item: any, index: number) => (
              <div key={index}>
                  <ProductCard key={item.id} product={{
                    id: item.id,
                    product: item.product,
                    category: item.category,
                    image: item.image,
                    price: item.price,
                    inStock: item.inStock
                  }} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FavouritePage;
