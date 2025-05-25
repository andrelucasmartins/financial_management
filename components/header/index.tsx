"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Button from '../button';
import Container from '../container';
import Modal from '../modal';
import styles from './Header.module.scss';


function Header() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('show') === 'true';

  return (
    <header className={styles.header}>
      <Container>
      <div className={styles.logo}>
        <Image src="/logo.svg" alt="Logo TICTO" className={styles.logoImage} width="34" height="100" />
      </div>
      <Link href="/?show=true" className={styles.logoText}>
      <Button className={styles.button}>
        Nova Transação
      </Button>
      </Link>
      { search && <Modal />}
      </Container>
    </header>
  );
}

export default Header;