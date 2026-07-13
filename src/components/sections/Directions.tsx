import { useState } from "react";
import { directions, studioNote } from "../../data/directions";
import { SectionTitle } from "../ui/SectionTitle";
import styles from "./Directions.module.css";

export function Directions() {
  const [activeId, setActiveId] = useState(directions[0].id);
  const current = directions.find((d) => d.id === activeId)!;

  return (
    <section className={`section ${styles.section}`} id="directions">
      <div className="container">
        <SectionTitle
          align="center"
          subtitle="Студия фитнеса и танца — выбери направление и запишись на занятие"
        >
          Направления
        </SectionTitle>

        <div className={styles.tabs}>
          {directions.map((d) => (
            <button
              key={d.id}
              type="button"
              className={`${styles.tab} ${d.id === activeId ? styles.tabActive : ""}`}
              onClick={() => setActiveId(d.id)}
            >
              {d.title}
            </button>
          ))}
        </div>

        <p className={styles.directionSubtitle}>{current.subtitle}</p>

        <ul className={styles.grid}>
          {current.programs.map((item) => (
            <li key={item.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </li>
          ))}
        </ul>

        {activeId !== "active-longevity" && (
          <p className={styles.note}>{studioNote}</p>
        )}
      </div>
    </section>
  );
}
