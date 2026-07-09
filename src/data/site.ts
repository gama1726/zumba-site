export const site = {
  name: "Энергия",
  tagline: "танцуй, сияй, будь собой",
  phone: "+7 (928) 553-96-00",
  phoneHref: "tel:+79285539600",
  whatsapp: "79285539600",
  email: "ismik1@yandex.ru",
  address: "Махачкала, ул. Бейбулатова, 53(Бейбулатова 31)",
  social: {
    telegram: "https://t.me/+79285539600",
    instagram: "https://instagram.com/gracia_dance",
  },
} as const;

export const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Расписание", href: "#schedule" },
  { label: "Абонементы", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
] as const;
