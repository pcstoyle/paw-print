const { Dogs, Owners } = require('../models');

module.exports = {
        async getDogs(req, res) {
            try {
                const dogs = await Dogs.find();
                res.json(dogs);
            } catch (err) {
                res.status(500).json(err);
            }
        },

        async getSingleDog(req, res) {
            try {
                const dog = await Dogs.findOne({ _id: req.params.dogId })

                if (!dog) {
                    return res.status(404).json({ message: 'No dog with that name' });
                }
                res.json(dog);
            } catch (err) {
                res.status(500).json(err);
            }
        },

        async createDog(req, res) {
            try {
                const dog = await Dogs.create(req.body);
                const owner = await Owners.findOneandUpdate(
                    { _id: req.body.ownerId },
                    { $addToSet: { dogs: dog._id } },
                    { new: true }
                );

                if (!owner) {
                    return res.status(404).json({
                        message: 'Dog added, but found no owner with that name',
                    });
                }
                res.json('Welcome to PawPrints! 🐾');
            } catch (err) {
                console.log(err);
                res.status(500).json(err);
            }
        },

        async updateDog(req, res) {
            try {
                const dog = await Dogs.findOneandUpdate(
                    { _id: req.params.dogId },
                    { $set: req.body },
                    { runValidators: true, new: true }
                );

                if (!dog) {
                    return res.status(404).json({ message: 'No dog with that name' });
                }

                res.json(dog);
            } catch (err) {
                res.status(500).json(err);
            }
        },
        async deleteDog(req, res) {
            try {
                const dog = await Dogs.findOneAndRemove({ _id: req.params.dogId });

                if (!dog) {
                    return res.status(404).json({ message: 'No dog with that name' });
                }

                const owner = await Owners.findOneandUpdate(
                    { dogs: req.params.dogId },
                    { $pull: { dogs: req.params.dogId } },
                    { new: true }
                );

                if (!owner) {
                    return res.status(404).json({ message: 'No owner with that name' });
                }

                res.json({ message: 'Dog successfully removed' });
            } catch (err) {
                res.status(500).json(err);
            }
        },
    };