export type Promotion = {
  id: string;
  badge: string;
  title: string;
  text: string;
  until?: string;
  cta: string;
  href: string;
};

export type Discount = {
  id: string;
  title: string;
  text: string;
};

export const promotions: Promotion[] = [
  {
    id: "trial",
    badge: "СТАРТ",
    title: "Первое занятие — бесплатно",
    text: "Приходи попробовать без обязательств. Просто возьми удобную форму и хорошее настроение.",
    until: "бессрочно",
    cta: "Записаться",
    href: "#trial",
  },
  {
    id: "summer",
    badge: "АКЦИЯ",
    title: "Летний абонемент −30%",
    text: "8 занятий по цене 6 — только до конца июля. Идеально, чтобы войти в ритм.",
    until: "до 31 июля",
    cta: "Выбрать тариф",
    href: "#pricing",
  },
  {
    id: "friend-promo",
    badge: "ВМЕСТЕ",
    title: "Приведи подругу — занятие в подарок",
    text: "Два билета веселее одного. При покупке абонемента друг получает разовое занятие бесплатно.",
    until: "до 31 августа",
    cta: "Подробнее",
    href: "#offers",
  },
];

export const discounts: Discount[] = [
  {
    id: "new-client",
    title: "Новому клиенту — 5%",
    text: "Скидка 5% при первом обращении в студию.",
  },
  {
    id: "youth",
    title: "Молодёжная скидка",
    text: "Скидка 15% на абонемент для студентов при предъявлении студенческого.",
  },
  {
    id: "friend",
    title: "Приведи подругу",
    text: "Разовое занятие в подарок другу при покупке месячного абонемента.",
  },
  {
    id: "morning",
    title: "Утренние группы",
    text: "−10% на абонемент при посещении занятий до 11:00.",
  },
];

export const heroSlides = promotions;
