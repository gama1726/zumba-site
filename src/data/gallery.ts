export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

/** Отобранные фото студии — без селфи, дублей зала и случайных ракурсов */
export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "studio-hall",
    src: "/studio/studio-hall.png",
    alt: "Зал студии Энергия с панорамными окнами",
    caption: "Просторный зал",
  },
  {
    id: "class-fitball",
    src: "/studio/class-fitball.png",
    alt: "Групповое занятие с фитболами",
    caption: "Групповые тренировки",
  },
  {
    id: "class-kids",
    src: "/studio/class-kids.png",
    alt: "Детское занятие с инструктором",
    caption: "Детские занятия",
  },
  {
    id: "studio-zumba",
    src: "/studio/studio-zumba.png",
    alt: "Зал с брендингом Zumba Fitness",
    caption: "Zumba Fitness",
  },
  {
    id: "class-stretch",
    src: "/studio/class-stretch.png",
    alt: "Растяжка и работа с детьми",
    caption: "Растяжка",
  },
  {
    id: "studio-ready",
    src: "/studio/studio-ready.png",
    alt: "Зал готов к занятию: коврики и инвентарь",
    caption: "Готовы к занятию",
  },
  {
    id: "class-kids-bridge",
    src: "/studio/class-kids-bridge.png",
    alt: "Детская гимнастика — мостик",
    caption: "Детская гимнастика",
  },
  {
    id: "reception",
    src: "/studio/reception.png",
    alt: "Ресепшен студии Энергия",
    caption: "Ресепшен",
  },
];

export const aboutPhoto = "/studio/studio-wide.png";
export const heroPhoto = "/studio/class-fitball.png";
