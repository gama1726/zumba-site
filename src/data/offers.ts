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
    id: "summer",
    badge: "АКЦИЯ",
    title: "Летний абонемент 1+1 = 3 месяца",
    text: "Действует только на групповые занятия.",
    until: "летом",
    cta: "Выбрать тариф",
    href: "#pricing",
  },
  {
    id: "friend-promo",
    badge: "ВМЕСТЕ",
    title: "Дружеская скидка от −10%",
    text: "Зависит от количества друзей. Скидка действует при единовременной записи.",
    until: "пока действует предложение",
    cta: "Записаться",
    href: "#trial",
  },
  {
    id: "birthday",
    badge: "ДР",
    title: "Скидка на день рождения −25%",
    text: "Подарок имениннику — скидка 25% в день рождения. Уточните условия при записи.",
    until: "в день рождения",
    cta: "Записаться",
    href: "#trial",
  },
  {
    id: "large-family",
    badge: "СЕМЬЯ",
    title: "Многодетным мамам от −20%",
    text: "Скидка от −20% для мам с тремя и более детьми. Уточните условия при записи.",
    until: "пока действует предложение",
    cta: "Записаться",
    href: "#trial",
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
    title: "Дружеская скидка от −10%",
    text: "Зависит от количества друзей. Скидка действует при единовременной записи.",
  },
  {
    id: "morning",
    title: "Утренние группы",
    text: "−10% на абонемент при посещении занятий до 11:00.",
  },
];

export const heroSlides = promotions;
