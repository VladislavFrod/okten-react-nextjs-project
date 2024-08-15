import styles from "./page.module.css";
import MoviesListComponent from "@/components/movies-list/Movies-List-Component";

export default function Home() {
  return (
      <main className={styles.main}>
        <MoviesListComponent/>
      </main>
  );
}