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
    name: "Катя",
    text: "Пришла «просто попробовать» и осталась на полгода. Алина заряжает так, что забываешь про усталость после работы.",
    rating: 5,
    source: "Яндекс",
  },
  {
    id: "2",
    name: "Ирина",
    text: "Думала, что не смогу танцевать — оказалось, никто не смотрит и не оценивает. Атмосфера очень тёплая.",
    rating: 5,
    source: "2ГИС",
  },
  {
    id: "3",
    name: "Даша",
    text: "Минус 4 кг за два месяца без диет-диет. Просто хожу 3 раза в неделю и кайфую от музыки.",
    rating: 5,
    source: "Яндекс",
  },
  {
    id: "4",
    name: "Настя",
    text: "Zumba Party по пятницам — лучшее завершение недели. Уже тащу сюда подруг.",
    rating: 4,
    source: "Google",
  },
];
