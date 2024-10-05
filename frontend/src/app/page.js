import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>Home Page</main>
      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          &copy; Copyright {new Date().getFullYear()} Vichola Pvt Ltd. All
          rights reserved.
        </a>
      </footer>
    </div>
  );
}
