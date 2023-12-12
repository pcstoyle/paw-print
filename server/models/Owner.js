const { Schema, model } = require('mongoose');
// const Dogs = require('./Dogs')

const ownerSchema = new Schema(
    {
        fullName: {
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
            ref: 'dogs'

        },
    },
    
);

const Owner = model('owner', ownerSchema);

module.exports = Owner;