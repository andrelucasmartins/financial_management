import { getTransactions } from '@/libs/apis';
import { TransactionProps } from '@/types/transaction';
import { Suspense } from 'react';
import Container from '../container';
import { List } from './List';
import styles from './ListData.module.scss';

export interface ListDataProps extends TransactionProps {
    id: number;
    description: string;
    price: number;
    category: string;
} 


async function ListData() {
    const list = await getTransactions()

    if(list.length === 0) {
      return (
        <div className={styles.listData} id="empty-list">
          <Container>
            Nenhum data foi encontra.
          </Container>
        </div>
      )
    }
  
  return (
    <div className={styles.listData}>
      <Container> 
        <Suspense fallback={<p>Loading Lista...</p>}></Suspense>     
      <table>
        <thead className={styles.table_head}>
          <tr>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          <List items={list.reverse()} />     
        </tbody>
      </table>
      </Container>
    </div>
  );
}
export default ListData;