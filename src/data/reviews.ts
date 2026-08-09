export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
  source: string;
};

export const reviews: Review[] = [
  {
    id: "1",
    name: "Амина",
    text: "Пришла «просто попробовать» и осталась на полгода. Роза заряжает так, что забываешь про усталость после работы.",
    rating: 5,
    source: "Яндекс",
  },
  {
    id: "2",
    name: "Патя",
    text: "Думала, что не смогу танцевать — оказалось, никто не смотрит и не оценивает. Атмосфера очень тёплая.",
    rating: 5,
    source: "2ГИС",
  },
  {
    id: "3",
    name: "Раисат",
    text: "Минус 4 кг за два месяца без диет-диет. Просто хожу 3 раза в неделю и кайфую от музыки.",
    rating: 5,
    source: "Яндекс",
  },
  {
    id: "4",
    name: "Зарема",
    text: "Zumba Party по пятницам — лучшее завершение недели. Уже тащу сюда подруг.",
    rating: 4,
    source: "Google",
  },
];
