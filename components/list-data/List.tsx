"use client";

import { FormatCurrency } from "@/libs";
import { deleteTransaction } from "@/libs/apis";
import Image from "next/image";
import { ListDataProps } from ".";
import { FormattedDate } from "../formatted-date";
import styles from "./ListData.module.scss";


export type ListProps = { items: ListDataProps[]; };


export function List({ items }: ListProps) {

  function deleteItem(id: number) {
    deleteTransaction(id);
  }

  return  items.map((item) => (
              <tr key={item.id}>
                <td className={styles.truncateCell}>{item.description}</td>
                <td className={ item.status === "earnings" ? styles.positive : styles.negative}>{FormatCurrency(item.price)}</td>
                <td>{item.category}</td>
                <td className={styles.truncateCell}><FormattedDate data={item.createdAt} /> </td>
                <td><Image src="/feather-trash.svg" alt="Excluir" onClick={() => deleteItem(item.id)}  width={21} height={21} className={styles.delete}/></td>
              </tr>
            ))
  }