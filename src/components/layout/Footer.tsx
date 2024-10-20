import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 Planetas. Todos los derechos reservados.</p>
        <p>Desarrollado con ❤️ por Jose Quiñones</p>
      </div>
    </footer>
  );
};

export default Footer;
