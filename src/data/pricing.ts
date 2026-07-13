export type PricingPlan = {
  id: string;
  name: string;
  subtitle: string;
  price?: number;
  priceFrom?: number;
  priceTo?: number;
  period: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "one-direction",
    name: "1 направление",
    subtitle: "Абонемент на одно выбранное направление",
    priceFrom: 5800,
    priceTo: 6700,
    period: "в месяц",
    features: [
      "Посещение занятий по одному направлению",
      "Групповые тренировки по расписанию",
      "Подходит для регулярных занятий",
    ],
  },
  {
    id: "two-directions",
    name: "2 направления",
    subtitle: "Абонемент на два направления",
    price: 7500,
    period: "в месяц",
    features: [
      "Два направления на выбор",
      "Групповые занятия по расписанию",
      "Удобно совмещать фитнес и танцы",
    ],
  },
  {
    id: "mix12",
    name: "Микс 12",
    subtitle: "Абонемент на смешанные занятия",
    price: 6900,
    period: "12 занятий",
    features: [
      "12 занятий в разных направлениях",
      "Гибкий выбор групп по расписанию",
      "Подходит, если хочется разнообразия",
    ],
  },
  {
    id: "personal",
    name: "Персональный",
    subtitle: "Абонемент на индивидуальные занятия",
    priceFrom: 15000,
    priceTo: 25000,
    period: "абонемент",
    features: [
      "Индивидуальные занятия с тренером",
      "Программа под ваши цели",
      "Стоимость зависит от формата и количества занятий",
    ],
  },
  {
    id: "annual",
    name: "Годовой",
    subtitle: "Долгосрочный абонемент",
    priceFrom: 39900,
    priceTo: 44900,
    period: "на год",
    highlighted: true,
    badge: "311 ₽/зан",
    features: [
      "Выгодные условия при оплате за год",
      "От 311 ₽ за занятие при оплате 44 900 ₽",
      "Подходит для тех, кто занимается постоянно",
    ],
  },
];

export type PriceItem = {
  name: string;
  price?: number;
  priceFrom?: number;
  priceTo?: number;
};

export const priceList: PriceItem[] = [
  { name: "Разовое групповое занятие", price: 1000 },
  { name: "Разовое индивидуальное занятие", priceFrom: 2000, priceTo: 2500 },
];
