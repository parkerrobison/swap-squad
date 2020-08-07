const { Object } = require("../models");

const objectData = [
  {
    name: "Table",
    description:
      "4ft x 4ft coffee table with glass counter-top. Has some scratches. black legs with some scratches on those too.",
    user_id: 1,
    quantity: 1,
    condition: "Moderately Used",
  },
  {
    name: "Vinyl Records",
    description:
      "A ton of 80s vinyl records. The wife doesn't want me to have them anymore. Never been used before since I am a collector.",
    user_id: 2,
    quantity: 200,
    condition: "Near Mint",
  },
  {
    name: "MTG cards",
    description:
      "A collection of 4000 Magic: The Gathering cards. Has all types of rarities, I just need to get rid of them.",
    user_id: 3,
    quantity: 4000,
    condition: "Lightly Used",
  },
  {
    name: "Jace, The Mind Sculptor",
    description: "This is definitely real, id: 9875962",
    user_id: 4,
    quantity: 1,
    condition: "Near Mint",
  },
];

const seedObjects = () => Object.bulkCreate(objectData);

module.exports = seedObjects;
