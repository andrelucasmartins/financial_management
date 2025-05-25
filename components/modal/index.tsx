"use client"

import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import { TransactionForm } from "../form-transactions";
import styles from "./Modal.module.scss";

function Modal () {

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles['modal-wrapper']}>
        <div className={styles.modal}>
          <div className={styles['modal-header']}>
            <Link
              href="/"
            >
              <span className={styles['close-icon']}><MdOutlineClose /></span>
            </Link>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Cadastrar Transação</h3>
          
          <div className={styles['modal-body']}>
            <TransactionForm  />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;