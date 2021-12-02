import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.scss';

interface HeroProps {
    image: string;
    name: string;
}

const Hero: FC<HeroProps> = ({ image, name }) => {
    return (
      <div className={styles.hero}>
        <Image className={styles.image} src={image} height={1920} width={2700} alt="" />
        <div className={styles.info}>
          <h3>{name}</h3>
        </div>
      </div>
    );
  };
  
  export default Hero;