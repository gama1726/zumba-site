import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={`section ${styles.section}`} id="about">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.visual} aria-hidden>
            <div className={styles.photo} />
          </div>

          <div className={styles.text}>
            <SectionTitle
              light
              subtitle="Фитнес‑центр «Энергия»: раскрываем вашу внутреннюю идеальность.В «Энергии» мы верим: каждый человек уже идеален — мы просто помогаем раскрыть эту идеальность в движении. Работаем с 2011 года и знаем: самый ценный результат — это не цифры, а тихое, но такое важное ощущение: «Я справляюсь»."
            >
              О студии
            </SectionTitle>

            <p>
              Zumba — это групповые тренировки под латиноамериканские ритмы.
              Здесь не смотрят на ошибки: ходи в своём темпе, улыбайся и
              постепенно чувствуй тело увереннее.
            </p>
            <p>
              У нас два зала, сертифицированные инструкторы и группы до 20
              человек — чтобы каждому хватило внимания, но при этом сохранялась
              энергия большой вечеринки.
            </p>

            <Button href="#trial" size="lg">
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
