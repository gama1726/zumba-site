import { useState } from "react";
import { pricingPlans } from "../../data/pricing";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import styles from "./Pricing.module.css";

function formatPrice(n: number) {
  return n.toLocaleString("ru-RU");
}

export function Pricing() {
  const [activeId, setActiveId] = useState(
    pricingPlans.find((p) => p.highlighted)?.id ?? pricingPlans[0].id,
  );
  const plan = pricingPlans.find((p) => p.id === activeId)!;

  return (
    <section className={`section ${styles.section}`} id="pricing">
      <div className="container">
        <SectionTitle
          light
          align="center"
          subtitle="Без скрытых платежей — в абонемент уже входит раздевалка и вода"
        >
          Абонементы
        </SectionTitle>

        <div className={styles.tabs}>
          {pricingPlans.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`${styles.tab} ${p.id === activeId ? styles.tabActive : ""}`}
              onClick={() => setActiveId(p.id)}
            >
              {p.name}
            </button>
          ))}
        </div>

        <article className={`${styles.card} ${plan.highlighted ? styles.cardHit : ""}`}>
          {plan.badge && <span className={styles.badge}>{plan.badge}</span>}

          <div className={styles.cardHead}>
            <div>
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planSub}>{plan.subtitle}</p>
            </div>
            <div className={styles.priceBlock}>
              {plan.oldPrice && (
                <span className={styles.oldPrice}>{formatPrice(plan.oldPrice)} ₽</span>
              )}
              <span className={styles.price}>{formatPrice(plan.price)} ₽</span>
              <span className={styles.period}>{plan.period}</span>
            </div>
          </div>

          <ul className={styles.features}>
            {plan.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <Button href="#trial" size="lg">
            Купить тариф
          </Button>
        </article>
      </div>
    </section>
  );
}
