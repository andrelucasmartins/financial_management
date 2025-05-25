import { calculateTotals, FormatCurrency } from '@/libs';
import { getTransactions } from '@/libs/apis';
import Image from 'next/image';
import Container from '../container';
import styles from './Display.module.scss';

async function Display () {
  let list = await getTransactions();
  const { totalBalance, totalEntries, totalExpenses  } = calculateTotals(list);

  return (
    <section>
      <Container>
        <div className={styles.display}>
        <div className={styles.card}>
          <div className={styles.card_content}>
            <div className={styles.card_header}>
              <h2 className={styles.card_title}>Entradas</h2>
              <Image src="/feather-arrow-up-right.svg" alt="Icone Entradas" width="19" height="19"/>
            </div>
            <p className={styles.card_balance}>
              {totalEntries >0 ? FormatCurrency(totalEntries): 'R$ 0,00'}
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_content}>
            <div className={styles.card_header}>
              <h2 className={styles.card_title}>Saídas</h2>
              <Image src="/feather-arrow-down-right.svg" alt="Icone Saídas" width="19" height="19"/>
            </div>
            <p className={styles.card_balance}>
             {totalExpenses >0 ? FormatCurrency(totalExpenses): 'R$ 0,00'}
            </p>
          </div>
        </div>
        <div className={`${styles.card} ${totalBalance >= 0 ?styles.card_green : styles.card_red}`}>
          <div className={styles.card_content}>
            <div className={styles.card_header}>
              <h2 className={styles.card_title}>Saldo 
                Total
              </h2>
            </div>
            <p className={styles.card_balance}>
              {totalBalance  !== null ? FormatCurrency(totalBalance) : 'R$ 0,00'}
            </p>
          </div>
        </div>
        </div>
      </Container>
    </section>
  )
}

export default Display;