const router = require('express').Router();
const dogRoutes = require('./dogRoutes');
const ownerRoutes = require('./ownerRoutes');

router.use('/dogs', dogRoutes);
router.use('/owners', ownerRoutes);

module.exports = router;
