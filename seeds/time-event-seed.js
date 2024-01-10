const TimeEvent = require("../models/TimeEvent");

const timeEventData = [
  {
    time_card_id: 1,
  },
  {
    time_card_id: 2,
  },
  {
    time_card_id: 3,
  },
  {
    time_card_id: 1,
  },
  {
    time_card_id: 2,
  },
  {
    time_card_id: 3,
  },
];

const seedTimeEvents = () => TimeEvent.bulkCreate(timeEventData);

module.exports = seedTimeEvents;
