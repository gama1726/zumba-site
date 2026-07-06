import { schedule } from "../../data/schedule";
import { SectionTitle } from "../ui/SectionTitle";
import styles from "./Schedule.module.css";

const levelClass: Record<string, string> = {
  начальный: styles.levelEasy,
  средний: styles.levelMid,
  "все уровни": styles.levelAll,
};

export function Schedule() {
  return (
    <section className="section" id="schedule">
      <div className="container">
        <SectionTitle
          align="center"
          subtitle="Выбирай удобный день — запись открыта на две недели вперёд"
        >
          Расписание
        </SectionTitle>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>День</th>
                <th>Время</th>
                <th>Занятие</th>
                <th>Инструктор</th>
                <th>Уровень</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((slot) => (
                <tr key={`${slot.day}-${slot.time}`}>
                  <td data-label="День">{slot.day}</td>
                  <td data-label="Время">{slot.time}</td>
                  <td data-label="Занятие">{slot.title}</td>
                  <td data-label="Инструктор">{slot.instructor}</td>
                  <td data-label="Уровень">
                    <span className={levelClass[slot.level]}>{slot.level}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
