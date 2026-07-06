export type ClassSlot = {
  day: string;
  time: string;
  title: string;
  instructor: string;
  level: "начальный" | "средний" | "все уровни";
};

export const schedule: ClassSlot[] = [
  { day: "Пн", time: "19:00", title: "Zumba Fitness", instructor: "Алина", level: "все уровни" },
  { day: "Вт", time: "10:00", title: "Zumba Toning", instructor: "Мария", level: "средний" },
  { day: "Ср", time: "19:30", title: "Zumba Fitness", instructor: "Алина", level: "все уровни" },
  { day: "Чт", time: "18:00", title: "Zumba Gold", instructor: "Ольга", level: "начальный" },
  { day: "Пт", time: "20:00", title: "Zumba Party", instructor: "Мария", level: "все уровни" },
  { day: "Сб", time: "11:00", title: "Zumba Fitness", instructor: "Алина", level: "все уровни" },
  { day: "Вс", time: "12:00", title: "Семейная Zumba", instructor: "Ольга", level: "начальный" },
];
