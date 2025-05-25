import Display from "@/components/display";
import ListData from "@/components/list-data";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Display />
        <ListData />
      </main>
    </div>
  );
}
