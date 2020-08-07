const seedComments = require('./comment-seeds');
const seedObjects = require('./object-seeds');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedComments();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedObjects();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedUsers();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();