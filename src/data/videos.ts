export type VideoCategory = "zumba" | "group-fitness" | "strength" | "active-longevity";

export type StudioVideo = {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: VideoCategory;
};

/** Видео с занятий — подписи по кадрам из роликов */
export const studioVideos: StudioVideo[] = [
  {
    id: "zumba-01",
    src: "/videos/zumba/zumba-01.mp4",
    title: "Zumba® Fitness — большая группа",
    caption: "Большая группа Zumba",
    category: "zumba",
  },
  {
    id: "zumba-02",
    src: "/videos/zumba/zumba-02.mp4",
    title: "Групповой танцевальный фитнес",
    caption: "Групповой танец",
    category: "zumba",
  },
  {
    id: "zumba-03",
    src: "/videos/zumba/zumba-03.mp4",
    title: "Укрепление кор — планка",
    caption: "Планка и кор",
    category: "group-fitness",
  },
  {
    id: "zumba-04",
    src: "/videos/zumba/zumba-04.mp4",
    title: "Занятие на фитболах",
    caption: "Растяжка на фитболах",
    category: "group-fitness",
  },
  {
    id: "zumba-05",
    src: "/videos/zumba/zumba-05.mp4",
    title: "Zumba — хореография с инструктором",
    caption: "Хореография с инструктором",
    category: "zumba",
  },
  {
    id: "zumba-06",
    src: "/videos/zumba/zumba-06.mp4",
    title: "Силовая тренировка",
    caption: "Силовая с гантелями",
    category: "strength",
  },
  {
    id: "zumba-07",
    src: "/videos/zumba/zumba-07.mp4",
    title: "75+ — занятие с инструктором",
    caption: "Активное долголетие",
    category: "active-longevity",
  },
  {
    id: "zumba-08",
    src: "/videos/zumba/zumba-08.mp4",
    title: "Zumba® Fitness — групповое занятие",
    caption: "Группа в зале",
    category: "zumba",
  },
];

export const videoGroups: {
  id: VideoCategory;
  anchor: string;
  title: string;
}[] = [
  { id: "zumba", anchor: "video-zumba", title: "Zumba® Fitness" },
  { id: "group-fitness", anchor: "video-group-fitness", title: "Групповой фитнес" },
  { id: "strength", anchor: "video-strength", title: "Силовые тренировки" },
  {
    id: "active-longevity",
    anchor: "video-active-longevity",
    title: "75+ и особенные люди",
  },
];

/** Якорь видео для карточки направления */
export const directionVideoAnchors: Partial<Record<string, string>> = {
  "zumba-fitness": "#video-zumba",
  "zumba-gold": "#video-zumba",
  "beautiful-body": "#video-group-fitness",
  "yoga-callanetics": "#video-group-fitness",
  "bodyflex": "#video-group-fitness",
  functional: "#video-strength",
  "therapeutic-gym": "#video-active-longevity",
  "active-longevity-special": "#video-active-longevity",
};
