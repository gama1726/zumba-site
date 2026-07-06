import { useState, type FormEvent } from "react";
import { schedule } from "../../data/schedule";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import styles from "./TrialForm.module.css";

type FormData = {
  name: string;
  phone: string;
  email: string;
  slot: string;
};

const emptyForm: FormData = {
  name: "",
  phone: "",
  email: "",
  slot: "",
};

const slotOptions = schedule.map((s) => ({
  value: `${s.day} ${s.time} — ${s.title}`,
  label: `${s.day}, ${s.time} — ${s.title}`,
}));

export function TrialForm() {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // пока без бэкенда — просто показываем подтверждение
    setSent(true);
  }

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  if (sent) {
    return (
      <section className={`section ${styles.section}`} id="trial">
        <div className="container">
          <div className={styles.success}>
            <h2 className={styles.successTitle}>Заявка отправлена</h2>
            <p>
              Мы перезвоним в течение дня и подтвердим время. До встречи на
              танцполе!
            </p>
            <Button
              onClick={() => {
                setSent(false);
                setForm(emptyForm);
              }}
            >
              Отправить ещё одну
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`section ${styles.section}`} id="trial">
      <div className="container">
        <div className={styles.layout}>
          <SectionTitle subtitle="Оставь контакты — мы перезвоним и подберём удобное время">
            Запись на пробное занятие
          </SectionTitle>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <span>Имя</span>
              <input
                type="text"
                required
                placeholder="Как к вам обращаться"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </label>

            <label className={styles.field}>
              <span>Телефон</span>
              <input
                type="tel"
                required
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </label>

            <label className={styles.field}>
              <span>Email</span>
              <input
                type="email"
                placeholder="для подтверждения записи"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </label>

            <label className={styles.field}>
              <span>Желаемое занятие</span>
              <select
                required
                value={form.slot}
                onChange={(e) => update("slot", e.target.value)}
              >
                <option value="" disabled>
                  Выберите из расписания
                </option>
                {slotOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.check}>
              <input type="checkbox" required />
              <span>
                Согласен на обработку персональных данных
              </span>
            </label>

            <Button type="submit" size="lg">
              Отправить заявку
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
