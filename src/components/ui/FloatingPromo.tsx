import { useState } from "react";
import { floatingOffer } from "../../data/offers";
import styles from "./FloatingPromo.module.css";

const STORAGE_KEY = "promo-annual-311-dismissed";

export function FloatingPromo() {
  const [visible, setVisible] = useState(
    () => localStorage.getItem(STORAGE_KEY) !== "1",
  );

  if (!visible) return null;

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <aside className={styles.wrap} aria-label="Акция: годовой абонемент">
      <a href={floatingOffer.href} className={styles.card}>
        <span className={styles.label}>{floatingOffer.label}</span>
        <span className={styles.price}>
          {floatingOffer.price}
          <span className={styles.rub}>руб</span>*
        </span>
        <span className={styles.unit}>{floatingOffer.unit}</span>
      </a>

      <button
        type="button"
        className={styles.close}
        onClick={dismiss}
        aria-label="Закрыть акцию"
      >
        ×
      </button>

      <p className={styles.footnote}>
        * {floatingOffer.footnote}
        <span className={styles.detail}> ({floatingOffer.detail})</span>
      </p>
    </aside>
  );
}
