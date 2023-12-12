const { Schema, model } = require('mongoose');

const dogSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        breed: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
            get: (value) => format(value, 'MM-yy'), 
            set: (value) => new Date(value),
        },
        gender: {
            type: String,
            required: true,
        },
        vacs: [
            {
                type: Schema.Types.ObjectId,
                ref: 'vacs',
            }
        ],
        feeding: [
            {
                type: Schema.Types.ObjectId,
                ref: 'feeding',
            }
        ],
        checkedIn:
        {
            type: Boolean,
        },
        owner: [
            {
                type: Schema.Types.ObjectId,
                ref: 'owner',
            }
        ]

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);




const Dogs = model('dogs', dogSchema);

module.exports = Dogs;