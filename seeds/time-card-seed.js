const TimeCard = require("../models/TimeCard");

const timeCardData = [
  {
    user_id: 1,
    timeEvent_id: 1,
  },
  {
    user_id: 2,
    timeEvent_id: 2,
  },
  {
    user_id: 3,
    timeEvent_id: 3,
  },
];

const seedTimeCards = () => TimeCard.bulkCreate(timeCardData);

module.exports = seedTimeCards;
