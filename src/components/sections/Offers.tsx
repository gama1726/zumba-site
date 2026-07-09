import { useState } from "react";
import { promotions, discounts } from "../../data/offers";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import styles from "./Offers.module.css";

type Tab = "promotions" | "discounts";

export function Offers() {
  const [tab, setTab] = useState<Tab>("promotions");

  return (
    <section className={`section ${styles.section}`} id="offers">
      <div className="container">
        <SectionTitle
          light
          align="center"
          subtitle="Специальные предложения и постоянные скидки студии"
        >
          Акции
        </SectionTitle>

        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${tab === "promotions" ? styles.tabActive : ""}`}
            onClick={() => setTab("promotions")}
          >
            Акции
          </button>
          <button
            type="button"
            className={`${styles.tab} ${tab === "discounts" ? styles.tabActive : ""}`}
            onClick={() => setTab("discounts")}
          >
            Скидки
          </button>
        </div>

        {tab === "promotions" ? (
          <ul className={styles.grid}>
            {promotions.map((item) => (
              <li key={item.id} className={styles.card}>
                <span className={styles.badge}>{item.badge}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
                {item.until && <p className={styles.until}>Действует {item.until}</p>}
                <Button href={item.href} className={styles.cardBtn}>
                  {item.cta}
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <ul className={styles.grid}>
            {discounts.map((item) => (
              <li key={item.id} className={`${styles.card} ${styles.cardPlain}`}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.cta}>
          <Button href="#trial" size="lg">
            Записаться
          </Button>
        </div>
      </div>
    </section>
  );
}
