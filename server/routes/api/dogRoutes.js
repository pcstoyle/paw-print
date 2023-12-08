const router = require('express').Router();
const {
    getDogs, 
    getSingleDog,
    createDog,
    updateDog,
    deleteDog,
} = require('../../controllers/dogControllers');

// /api/dogs
router.route('/').get(getDogs).post(createDog);

// /api/dogs/:dogId
router 
    .route(':dogId')
    .get(getSingleDog)
    .put(updateDog)
    delete(deleteDog);

module.exports = router;
