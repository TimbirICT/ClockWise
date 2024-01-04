const seedTimeCards = require("./time-card-seed");
const seedUsers = require("./user-seed");
const seedTimeEvents = require("./time-event-seed");
const sequelize = require("../config/connections");
const { User, TimeCard, TimeEvent } = require("../models");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n ----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n ----- USERS SEEDED -----\n");

  await seedTimeCards();
  console.log("\n ----- TIMECARDS SEEDED -----\n");

  await seedTimeEvents();
  console.log("\n -----TIME EVENTS SEEDED-----\n");
};

seedAll();
