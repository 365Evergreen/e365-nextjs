'use client';

import { useEffect, useState } from 'react';
import  Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const navigation = [
  { href: "/", label: "Home" },
  { href: "/blog/", label: "Blog" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false); const siteName =
    process.env.NEXT_PUBLIC_SITE_NAME ?? "365 Evergreen";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   <header className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.branding}>
          <Link href="/">
            <Image
              className={styles.siteLogo}
              src="/icon.svg" alt={siteName}
              width={50}
              height={50} >
            </Image>
          </Link>
          <Link
            className={styles.brand}
            href="/">
            {siteName}
          </Link>
        </div>
        <div className={styles.navigationContainer}>
          <nav aria-label="Primary navigation">
            <ul className={styles.navigation}>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
