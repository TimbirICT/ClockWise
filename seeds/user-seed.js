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
    password: "$2b$10$9flml..pBjzo49kHodATCecLu/0uJnBcaXSB2TEsCvCIV71gTh5Lq",
  },
  {
    name: "Travis Shanhun",
    email: "travis@email.com",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
