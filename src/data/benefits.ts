export type Benefit = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const benefits: Benefit[] = [
  {
    id: "energy",
    title: "Заряд и здоровье",
    description:
      "50–60 минут тренировки в нашей студии улучшат ваше здоровье и зарядят мощной энергией!",
    href: "#directions",
  },
  {
    id: "any-level",
    title: "Для всех",
    description:
      "Благодаря адаптируемой программе и персональному вниманию к каждому ученику.",
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
    title: "До 1 000 ккал",
    description: "Вы можете сжечь до 1 000 калорий в нашей студии.",
    href: "#schedule",
  },
  {
    id: "music",
    title: "Свежие плейлисты",
    description:
      "Плейлисты нашей студии заставят вас забыть об усталости и тренироваться на пределе возможностей!",
    href: "#schedule",
  },
  {
    id: "flex",
    title: "Гибкое расписание",
    description: "Утро, вечер, выходные — выбирай слот, который вписывается в жизнь.",
    href: "#schedule",
  },
];
