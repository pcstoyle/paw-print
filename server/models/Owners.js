const { Schema, model } = require('mongoose');
// const Dogs = require('./Dogs')

const ownerSchema = new Schema(
    {
        first: String,
        last: String,
        dogs: [
            {
                type: Schema.Types.ObjectId,
                ref: 'dogs'
            }
        ],
    },
    {
    toJSON: {
        virtuals: true,
    },
    id: false,
    }
);






const Owner = model('owner', ownerSchema);

module.exports = Owner;