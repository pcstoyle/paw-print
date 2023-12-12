const { Schema, model } = require('mongoose');
const { format } = require('date-fns');

const vacsSchema = new Schema(
    {
        rabies: {
            type: Boolean,
            expiration: Date,
            get: (value) => format(value, 'MM-yy'), 
            set: (value) => new Date(value),
        },
        bordetella: {
            type: Boolean,
            expiration: Date,
            get: (value) => format(value, 'MM-yy'), 
            set: (value) => new Date(value),
        },
        distemper: {
            type: Boolean,
            expiration: Date,
            get: (value) => format(value, 'MM-yy'), 
            set: (value) => new Date(value),
        },
    },
);

const Vacs = model('vacs', vacsSchema);

module.exports = Vacs;