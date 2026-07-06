export type PromoSlide = {
  id: string;
  badge: string;
  title: string;
  text: string;
  cta: string;
  href: string;
};

export const promoSlides: PromoSlide[] = [
  {
    id: "trial",
    badge: "СТАРТ",
    title: "Первое занятие — бесплатно",
    text: "Приходи попробовать Zumba без обязательств. Просто возьми удобную форму и хорошее настроение.",
    cta: "Записаться",
    href: "#trial",
  },
  {
    id: "summer",
    badge: "АКЦИЯ",
    title: "Летний абонемент −30%",
    text: "8 занятий по цене 6 — только до конца июля. Идеально, чтобы войти в ритм.",
    cta: "Выбрать тариф",
    href: "#pricing",
  },
  {
    id: "friend",
    badge: "ВМЕСТЕ",
    title: "Приведи подругу — занятие в подарок",
    text: "Два билета веселее одного. При покупке абонемента друг получает разовое занятие бесплатно.",
    cta: "Подробнее",
    href: "#pricing",
  },
];
