const SeedTimeCards = require("./time-card-seed");
const SeedUsers = require("./user-seed");
const sequelize = require("../config/connections");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n ----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n ----- USERS SEEDED -----\n");

  await seedTimeCards();
  console.log("\n ----- COMMENTS SEEDED -----\n");

  await seedTimeEvents();
  console.log("\n -----TIME EVENTS SYNCED -----\n");
};

seedAll();
