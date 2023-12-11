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
        roomDogs: [
            {
                type: Schema.Types.ObjectId,
                ref: 'dogs',
            }
        ],
    },
);

const Room = model('room', roomSchema);

module.exports = Room;