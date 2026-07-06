export const site = {
  name: "Zumba",
  tagline: "танцуй, гори, будь собой",
  phone: "+7 (495) 123-45-67",
  phoneHref: "tel:+74951234567",
  email: "hello@zumba-studio.ru",
  address: "Москва, ул. Танцевальная, 12",
  social: {
    vk: "https://vk.com",
    telegram: "https://t.me",
    instagram: "https://instagram.com",
  },
} as const;

export const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Расписание", href: "#schedule" },
  { label: "Абонементы", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
] as const;
