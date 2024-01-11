const User = require("../models/User");



const userData = [
  {
    name: "Anna Turner",
    email: "anna@email.com",
    password: "password12345",
  },
  {
    name: "Timbir Middlebrooks",
    email: "timbir@email.com",
    password: "password12345",
  },
  {
    name: "Travis Shanhun",
    email: "travis@email.com",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
