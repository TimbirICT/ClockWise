const TimeEvent = require("../models/TimeEvent");

const timeEventData = [
  {
    date: new Date(),
    clock_in: "09:00",
    clock_out: "15:00",
    time_card_id: 1,
  },
  {
    date: new Date(),
    clock_in: "09:00",
    clock_out: "15:00",
    time_card_id: 2,
  },
  {
    date: new Date(),
    clock_in: "09:00",
    clock_out: "15:00",
    time_card_id: 3,
  },
  {
    date: new Date(),
    clock_in: "09:00",
    clock_out: "15:00",
    time_card_id: 1,
  },
  {
    date: new Date(),
    clock_in: "09:00",
    clock_out: "15:00",
    time_card_id: 2,
  },
  {
    date: new Date(),
    clock_in: "09:00",
    clock_out: "15:00",
    time_card_id: 3,
  },
];

const seedTimeEvents = () => TimeEvent.bulkCreate(timeEventData);

module.exports = seedTimeEvents;
