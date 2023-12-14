const { Schema, model } = require('mongoose');
// const Dogs = require('./Dogs')

const ownerSchema = new Schema(
    {
        first: {
            type: String,
            required: true,
        },
        last: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        dogs: {
            type: Schema.Types.ObjectId,
            ref: 'Dog'

        },
    },
    
);

const Owner = model('owner', ownerSchema);

module.exports = Owner;