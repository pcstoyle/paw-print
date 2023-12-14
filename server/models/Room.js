const { Schema, model } = require('mongoose');


const roomSchema = new Schema(
    {
        roomNum: {
            type: Number,
            required: true,
            unique: true,
        },
        amOnly: {
            type: Boolean,
        },
        pmOnly: {
            type: Boolean,
        },
        amAndPm: {
            type: Boolean,
        },
        savedDogs: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Dog',
            }
        ],
    },
);

const Room = model('Room', roomSchema);

module.exports = Room;