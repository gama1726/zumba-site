import { scheduleBlocks } from "../../data/schedule";
import { SectionTitle } from "../ui/SectionTitle";
import styles from "./Schedule.module.css";

export function Schedule() {
  return (
    <section className="section" id="schedule">
      <div className="container">
        <SectionTitle
          align="center"
          subtitle="Групповые занятия по расписанию. Индивидуальные — в свободные часы по записи"
        >
          Расписание
        </SectionTitle>

        <ul className={styles.blocks}>
          {scheduleBlocks.map((block) => (
            <li key={block.id} className={styles.block}>
              <h3 className={styles.days}>{block.daysLabel}</h3>

              <ul className={styles.classes}>
                {block.classes.map((item) => (
                  <li key={`${block.id}-${item.time}`} className={styles.row}>
                    <span className={styles.time}>{item.time}</span>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.badgeGroup}>Группа</span>
                  </li>
                ))}
              </ul>

              <p className={styles.individual}>
                <span className={styles.badgeIndividual}>Индивидуально</span>
                {block.individualNote}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
