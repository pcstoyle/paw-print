const Owner = require('../models/Owners');

module.exports = {
    async getOwners(req, res) {
        try {
            const owners = await Owner.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleOwner(req, res) {
        try {
            const owner = await Owner.findOne({ _id: req.params.ownerId })
                .select('-__v');

            if (!owner) {
                return res.status(404).json({ message: 'No owner with that name' });
            }
            res.json(owner);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createOwner(req, res) {
        try {
            const dbOwnerData = await Owner.create(req.body);
            res.json(dbOwnerData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
