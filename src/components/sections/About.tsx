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
              subtitle="Мы не фитнес-клуб с тренажёрами — мы студия, где главное движение и музыка"
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
              Прийти на пробное
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
