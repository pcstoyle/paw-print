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
            type: String,
            required: true,
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




const Dog = model('dogs', dogSchema);

module.exports = Dog;