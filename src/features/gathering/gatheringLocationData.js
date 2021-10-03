import rarity from "../../enums/rarity";

const data = [
  {
    id: 0,
    name: "Fields",
    herbsAvailable: [
      {
        herbId: 0,
        rarity: rarity.COMMON,
      },
      {
        herbId: 1,
        rarity: rarity.UNCOMMON,
      },
      {
        herbId: 2,
        rarity: rarity.RARE,
      },
    ],
  },
  {
    id: 1,
    name: "Forest",
    herbsAvailable: [
      {
        herbId: 1,
        rarity: rarity.COMMON,
      },
      {
        herbId: 0,
        rarity: rarity.UNCOMMON,
      },
      {
        herbId: 2,
        rarity: rarity.RARE,
      },
    ],
  },
];

export default data;
