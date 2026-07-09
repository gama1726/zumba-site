export type Benefit = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const benefits: Benefit[] = [
  {
    id: "energy",
    title: "Заряд на весь день",
    description: "45–60 минут движения под латино-ритмы — и настроение уже другое.",
    href: "#directions",
  },
  {
    id: "any-level",
    title: "Подходит любому уровню",
    description: "Не нужен опыт в танцах. Главное — двигаться в своём темпе и получать удовольствие.",
    href: "#directions",
  },
  {
    id: "community",
    title: "Живое комьюнити",
    description: "Группы до 20 человек, дружелюбная атмосфера и общие челленджи.",
    href: "#reviews",
  },
  {
    id: "burn",
    title: "До 600 ккал за занятие",
    description: "Кардио, координация и сила — всё в одной тренировке без скуки.",
    href: "#schedule",
  },
  {
    id: "music",
    title: "Свежие плейлисты",
    description: "Реггаетон, сальса, меренге и хиты — каждую неделю обновляем подборку.",
    href: "#schedule",
  },
  {
    id: "flex",
    title: "Гибкое расписание",
    description: "Утро, вечер, выходные — выбирай слот, который вписывается в жизнь.",
    href: "#schedule",
  },
];
