import { benefits } from "../../data/benefits";
import { SectionTitle } from "../ui/SectionTitle";
import styles from "./Benefits.module.css";

export function Benefits() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <SectionTitle subtitle="Коротко о том, зачем приходят к нам каждую неделю">
          Почему Zumba
        </SectionTitle>

        <ul className={styles.grid}>
          {benefits.map((item, index) => (
            <li key={item.id} className={styles.card}>
              <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.description}</p>
              <a href={item.href} className={styles.link}>
                Подробнее →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
