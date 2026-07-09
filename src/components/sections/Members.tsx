import { membersInfo } from "../../data/members";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import styles from "./Members.module.css";

export function Members() {
  return (
    <section className={`section ${styles.section}`} id="members">
      <div className="container">
        <div className={styles.layout}>
          <SectionTitle subtitle={membersInfo.intro}>
            {membersInfo.title}
          </SectionTitle>

          <ul className={styles.list}>
            {membersInfo.perks.map((perk) => (
              <li key={perk}>{perk}</li>
            ))}
          </ul>

          <Button href="#trial" size="lg">
            Записаться на занятие
          </Button>
        </div>
      </div>
    </section>
  );
}
