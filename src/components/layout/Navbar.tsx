import Link from 'next/link';

import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => (
  <header className={styles.navbar}>
    <div className={styles.logo}>
      <Link href="/">
        <Image
          src="/image/logo.avif"
          alt="Logo"
          width={180}
          height={50}
        />
      </Link>
    </div>
  </header>
);

export default Navbar;
