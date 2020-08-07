const { User } = require("../models");

const userData = [
  {
    username: "pumbaabatmanbegins",
    email: "pumbaabatmanbegins@fake.com",
    password: "particletiecigaretteinflation",
  },
  {
    username: "snowstormcedarfrog",
    email: "snowstormcedarfrog@fake.com",
    password: "debtcrystaladoptquarrel",
  },
  {
    username: "aceventuraleoitracks",
    email: "aceventuraleoitracks@fake.com",
    password: "colorworldpublicationmutation",
  },
  {
    username: "star-lordmaryandmax",
    email: "star-lordmaryandmax@fake.com",
    password: "distantdesignarticledetail",
  },
  {
    username: "potatochipstigerleia",
    email: "potatochipstigerleia@fake.com",
    password: "insidegodcruelfare",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
