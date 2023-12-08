const { Schema, model } = require('mongoose');

const feedingSchema = new Schema(
    {
        onceDaily: {
            type: Boolean,
        },
        twiceDaily: {
            type: Boolean,
        },
        addInstc: {
            type: String,
            maxLength: 200,
        },
    },
);

const Feeding = model('feeding', feedingSchema);

module.exports = Feeding;