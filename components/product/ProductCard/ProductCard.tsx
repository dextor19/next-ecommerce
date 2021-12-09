import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { 
    addToFavourite, 
    removeFromFavourite, 
    getFavouriteSelector 
} from '@redux/favourite.slice';
import styles from './ProductCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

interface Product {
    id: number;
    product: string;
    category: string;
    image: string;
    price: number;
    inStock: boolean;
}
interface ProductCardProps {
    product: Product;

}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch();
    const favourite = useSelector(getFavouriteSelector);
    const favouriteProducts = () => {
        return favourite.favouriteReducer.map(
            (products: any) => products.id
        );
    };
    let favouriteStatus = () => {
        let status:boolean = false;
        favouriteProducts().forEach((id: number) => {
            if (id === product.id){
                return status = true;
            }
        })
        return status;
    }

    const addedOrRemoveFavourite = () => {
        if (favouriteStatus() == false) {
            dispatch(addToFavourite({
                id: product.id,
                product: product.product,
                category: product.category,
                image: product.image,
                price: product.price,
                inStock: product.inStock,
                favourite: true
            }))
        } else {
            dispatch(removeFromFavourite({
                id: product.id,
                product: product.product,
                category: product.category,
                image: product.image,
                price: product.price,
                inStock: product.inStock,
                favourite: true
            }))
        }
    }

    return (
    <div className={styles.card}>
        <Link href={`/products/${product.id}`} passHref>
            <Image src={product.image} height={584} width={304} alt="" />
        </Link>
        <div className={styles.row}>
            <div className={styles.column}>
                <h4 className={styles.title}>{product.product}</h4>
                <p className={styles.price}>$ {product.price}</p>
            </div>
            {product.inStock ? 
            <div className={styles.heart_icon} onClick={() => addedOrRemoveFavourite()}>
                {favouriteStatus() ? 
                <FontAwesomeIcon icon={faHeart} color='red' /> 
                : 
                <FontAwesomeIcon icon={faHeart} />
                }
            </div>
            :
            <div className={styles.sold_out}>
                sold out
            </div>
            }
        </div>
    </div>
    );
};

export default ProductCard;