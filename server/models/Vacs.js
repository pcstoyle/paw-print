const { Schema, model } = require('mongoose');

const vacsSchema = new Schema(
    {
        rabies: {
            type: Boolean,
            expiration: Date,
            format: MM-YY,
        },
        bordetella: {
            type: Boolean,
            expiration: Date,
            format: MM-YY,
        },
        distemper: {
            type: Boolean,
            expiration: Date,
            format: MM-YY,
        },
    },
);

const Vacs = model('vacs', vacsSchema);

module.exports = Vacs;