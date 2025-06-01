"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Button from "../button"

import { createTransaction } from "@/libs/apis"
import styles from './TransactionForm.module.scss'

export function TransactionForm() {
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await createTransaction(formData);
      const result = await response;
      router.push('/');
    }
    catch (error) {
      console.error('Error creating transaction:', error);
      throw error instanceof Error ? error : new Error('Unknown fetch error');
    }
  }

  return (
    <form action="" method="post" onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formField}>
        <input type="text" placeholder="Nome" name="description" id="description" required/>
      </div>
      <div className={styles.formField}>
      <input type="text" placeholder="Preço" name="price" id="price" 
      required />
      </div>
      <div className={`${styles.formField} ${styles['formField-divider']}`}>
        <input type="radio" name="status" id="earnings" value="earnings" required />
        <label htmlFor="earnings" className={`${styles.outline}`}><Image src="/feather-arrow-up-circle.svg" width="28" height="28" alt="Entrada"/> Entrada</label>
        <input type="radio" name="status" id="looses" value="looses" required />
        <label htmlFor="looses" className={`${styles.outline}`}><Image src="/feather-arrow-down-circle.svg" width="28" height="28" alt="Entrada"/> Saída</label>
      </div>
      <div className={styles.formField}>
        <input type="text" placeholder="Categoria" name="category" id="category" required />
      </div>
      <Button type="submit" className={styles.button} id="btnSubmit">Cadastrar</Button>
    </form>
  )
}