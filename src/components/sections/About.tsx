import { benefits } from "../../data/benefits";
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
              subtitle="Фитнес‑центр «Энергия»: раскрываем вашу внутреннюю идеальность. В «Энергии» мы верим: каждый человек уже идеален — мы просто помогаем раскрыть эту идеальность в движении. Работаем с 2011 года."
            >
              О студии
            </SectionTitle>

            <p>
              У нас есть направления фитнеса и танца — для женщин и детей.
              Возраст не важен: важен ваш личный шаг навстречу себе.
              На занятиях вы бережно укрепляете здоровье,
              выравниваете осанку, развиваете гибкость
              и пластичность — и с каждым движением становитесь увереннее.
            </p>
            <p>
            Приходите туда,
            где вас поддержат
            и помогут найти свой ритм.
            Здесь движение — это забота о себе и путь к внутренней энергии,
            </p>

            <Button href="#trial" size="lg">
              Записаться
            </Button>
          </div>
        </div>

        <div className={styles.benefits}>
          <h3 className={styles.benefitsTitle}>Почему выбирают нас</h3>
          <ul className={styles.benefitsGrid}>
            {benefits.map((item, index) => (
              <li key={item.id} className={styles.benefitCard}>
                <span className={styles.num}>{String(index + 1).padStart(2, "0")}</span>
                <h4 className={styles.benefitTitle}>{item.title}</h4>
                <p className={styles.benefitText}>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
