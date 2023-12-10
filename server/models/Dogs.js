const { Schema, model } = require('mongoose');
// const Vacs = require('./Vacs');
// const Feeding = require('./Feeding');

// import { schema } from "./User";
// const Owners = require('./Owners');

// const genderSchema = new Schema(
//     {
//         male: {
//             type: Boolean,
//         },
//         female: {
//             type: Boolean,
//         },
//     }
// );



const dogSchema = new Schema(
    {
        dogName: {
            type: String,
            required: true,
        }, 
        breed: {
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
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);








const Dogs = model('dog', dogSchema);

module.exports = Dogs;