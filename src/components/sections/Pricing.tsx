import { useState } from "react";
import { pricingPlans, priceList } from "../../data/pricing";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import styles from "./Pricing.module.css";

type Tab = "plans" | "services";

function formatPrice(n: number) {
  return n.toLocaleString("ru-RU");
}

function formatServicePrice(price: number) {
  return price === 0 ? "Бесплатно" : `${formatPrice(price)} ₽`;
}

export function Pricing() {
  const [tab, setTab] = useState<Tab>("plans");
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
          subtitle="Абонементы и разовые услуги — без скрытых доплат"
        >
          Стоимость
        </SectionTitle>

        <div className={styles.mainTabs}>
          <button
            type="button"
            className={`${styles.tab} ${tab === "plans" ? styles.tabActive : ""}`}
            onClick={() => setTab("plans")}
          >
            Абонементы
          </button>
          <button
            type="button"
            className={`${styles.tab} ${tab === "services" ? styles.tabActive : ""}`}
            onClick={() => setTab("services")}
          >
            Прайс
          </button>
        </div>

        {tab === "plans" ? (
          <>
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
          </>
        ) : (
          <ul className={styles.priceList}>
            {priceList.map((item) => (
              <li key={item.name} className={styles.priceRow}>
                <span>{item.name}</span>
                <span className={styles.servicePrice}>{formatServicePrice(item.price)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
