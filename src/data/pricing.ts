export type PricingPlan = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  period: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "single",
    name: "Разовое",
    subtitle: "Попробовать или зайти между делом",
    price: 900,
    period: "за занятие",
    features: [
      "Одно групповое занятие",
      "Доступ в раздевалку и душ",
      "Без заморозки",
    ],
  },
  {
    id: "month",
    name: "Месяц",
    subtitle: "Самый популярный вариант",
    price: 4500,
    oldPrice: 5400,
    period: "8 занятий",
    highlighted: true,
    badge: "Хит",
    features: [
      "8 занятий в течение 30 дней",
      "Любые группы по расписанию",
      "Заморозка 5 дней",
      "Скидка 10% на мерч",
    ],
  },
  {
    id: "season",
    name: "Сезон",
    subtitle: "Для тех, кто вошёл в ритм",
    price: 11000,
    oldPrice: 13500,
    period: "24 занятия",
    features: [
      "24 занятия за 90 дней",
      "Приоритетная запись",
      "Заморозка 14 дней",
      "1 персональная консультация",
    ],
  },
];

export type PriceItem = {
  name: string;
  price: number;
};

export const priceList: PriceItem[] = [
  { name: "Разовое групповое занятие", price: 900 },
  { name: "Персональная тренировка", price: 2500 },
  { name: "Сплит-тренировка (2 человека)", price: 3500 },
  { name: "Аренда зала (1 час)", price: 4000 },
  { name: "Пробное занятие", price: 0 },
];
