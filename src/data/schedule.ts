export type ScheduleClass = {
  time: string;
  title: string;
  format: "group";
};

export type ScheduleBlock = {
  id: string;
  daysLabel: string;
  classes: ScheduleClass[];
  individualNote: string;
};

export const scheduleBlocks: ScheduleBlock[] = [
  {
    id: "mon-wed-fri",
    daysLabel: "Понедельник, среда, пятница",
    classes: [
      {
        time: "17:30",
        title: "Функциональный тренинг + Zumba® Fitness",
        format: "group",
      },
      {
        time: "19:00",
        title: "Йога-калланетика и стретчинг",
        format: "group",
      },
      {
        time: "20:15",
        title: "Zumba® Fitness",
        format: "group",
      },
    ],
    individualNote: "В остальные свободные часы в эти дни — индивидуальные занятия",
  },
  {
    id: "tue-thu",
    daysLabel: "Вторник, четверг",
    classes: [
      {
        time: "08:00",
        title: "«Твоя здоровая спина и красивая осанка»",
        format: "group",
      },
      {
        time: "19:00",
        title: "Восточные танцы",
        format: "group",
      },
    ],
    individualNote: "В остальные часы в эти дни — индивидуальные занятия",
  },
  {
    id: "sat",
    daysLabel: "Суббота",
    classes: [
      {
        time: "08:00",
        title: "«Твоя здоровая спина и красивая осанка»",
        format: "group",
      },
    ],
    individualNote: "В остальные часы — индивидуальные занятия",
  },
];

/** Плоский список групповых занятий — для формы записи */
export const groupSchedule = scheduleBlocks.flatMap((block) =>
  block.classes.map((item) => {
    const shortDay = block.daysLabel.split(",")[0].trim();
    return {
      day: shortDay,
      daysLabel: block.daysLabel,
      time: item.time,
      title: item.title,
    };
  }),
);
