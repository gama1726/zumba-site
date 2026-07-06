import { reviews } from "../../data/reviews";
import { SectionTitle } from "../ui/SectionTitle";
import styles from "./Reviews.module.css";

export function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <SectionTitle align="center" subtitle="Реальные отзывы наших учениц">
          Что говорят после занятий
        </SectionTitle>

        <ul className={styles.grid}>
          {reviews.map((review) => (
            <li key={review.id} className={styles.card}>
              <div className={styles.top}>
                <span className={styles.avatar}>{review.name[0]}</span>
                <div>
                  <p className={styles.name}>{review.name}</p>
                  <p className={styles.source}>{review.source}</p>
                </div>
                <span className={styles.rating}>{review.rating}.0</span>
              </div>
              <p className={styles.text}>{review.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
