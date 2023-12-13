const db = require('../config/connection');
const { User, Owner, Dog, Feeding, Vacs, Room } = require('../models');
const userSeeds = require('./roomSeed.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Room', 'rooms');

    await User.create(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
