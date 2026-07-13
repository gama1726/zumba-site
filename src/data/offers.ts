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

export const floatingOffer = {
  id: "annual-311",
  label: "Годовой абонемент",
  price: 311,
  unit: "одно занятие",
  footnote: "при оплате 44 900 ₽ за год",
  detail: "44 900 ₽ ÷ 12 мес ÷ 12 занятий",
  href: "#pricing",
};

export const promotions: Promotion[] = [
  {
    id: "annual-311",
    badge: "ХИТ",
    title: "Годовой абонемент — 311 ₽ за занятие",
    text: "При оплате 44 900 ₽ за год выходит около 311 ₽ за одно занятие — заметно выгоднее разового визита за 1 000 ₽.",
    until: "пока действует предложение",
    cta: "Смотреть тариф",
    href: "#pricing",
  },
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
