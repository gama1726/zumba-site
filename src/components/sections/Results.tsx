import { results } from "../../data/results";
import { SectionTitle } from "../ui/SectionTitle";
import styles from "./Results.module.css";

export function Results() {
  return (
    <section className={`section ${styles.section}`} id="results">
      <div className="container">
        <SectionTitle
          align="center"
          subtitle="Реальные изменения учениц студии — осанка, здоровье и фигура"
        >
          Результаты
        </SectionTitle>

        <ul className={styles.grid}>
          {results.map((item) => (
            <li key={item.id} className={styles.card}>
              <div className={styles.media}>
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
