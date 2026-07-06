import { useState, useEffect, useCallback } from "react";
import { promoSlides } from "../../data/promotions";
import { site } from "../../data/site";
import { Button } from "../ui/Button";
import styles from "./Hero.module.css";

const INTERVAL_MS = 6000;

export function Hero() {
  const [active, setActive] = useState(0);
  const slide = promoSlides[active];

  const next = useCallback(() => {
    setActive((i) => (i + 1) % promoSlides.length);
  }, []);

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + promoSlides.length) % promoSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden />

      <div className={`container ${styles.content}`}>
        <div className={styles.heading}>
          <p className={styles.city}>Москва</p>
          <h1 className={styles.title}>
            Групповые танцевальные тренировки
          </h1>
          <p className={styles.lead}>{site.tagline}</p>
        </div>

        <div className={styles.promo}>
          <div className={styles.dots}>
            {promoSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                aria-label={`Слайд ${i + 1}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>

          <div className={styles.arrows}>
            <button type="button" className={styles.arrow} onClick={prev} aria-label="Назад" />
            <button type="button" className={styles.arrow} onClick={next} aria-label="Вперёд" />
          </div>

          <div className={styles.card} key={slide.id}>
            <span className={styles.badge}>{slide.badge}</span>
            <h2 className={styles.promoTitle}>{slide.title}</h2>
            <p className={styles.promoText}>{slide.text}</p>
            <Button href={slide.href} size="lg">
              {slide.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
