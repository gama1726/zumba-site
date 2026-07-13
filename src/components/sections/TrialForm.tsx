import { useState, type FormEvent } from "react";
import { groupSchedule } from "../../data/schedule";
import { site } from "../../data/site";
import { buildTrialMessage, openWhatsApp } from "../../lib/whatsapp";
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

const slotOptions = groupSchedule.map((s) => ({
  value: `${s.daysLabel}, ${s.time} — ${s.title}`,
  label: `${s.daysLabel}, ${s.time} — ${s.title}`,
}));

export function TrialForm() {
  const [form, setForm] = useState<FormData>(emptyForm);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const message = buildTrialMessage({
      name: form.name,
      slot: form.slot,
      phone: form.phone || undefined,
      email: form.email || undefined,
    });

    openWhatsApp(site.whatsapp, message);
  }

  function update(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <section className={`section ${styles.section}`} id="trial">
      <div className="container">
        <div className={styles.layout}>
          <SectionTitle subtitle="Заполни форму — откроется WhatsApp с готовым сообщением, останется только отправить">
            Запись на занятие
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
              <span>Согласен на обработку персональных данных</span>
            </label>

            <Button type="submit" size="lg">
              Записаться в WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
