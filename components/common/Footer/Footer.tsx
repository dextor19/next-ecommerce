import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright <span className={styles.brand}>Suave</span>{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;