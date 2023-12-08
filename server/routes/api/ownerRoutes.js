const router = require('express').Router();
const {
    getOwners,
    getSingleOwner, 
    createOwner,
} = require('../../controllers/ownerControllers');

// /api/owners
router.route('/').get(getOwners).post(createOwner);

// /api/owners/:ownerId
router.route('/:ownerId').get(getSingleOwner);

module.exports = router;