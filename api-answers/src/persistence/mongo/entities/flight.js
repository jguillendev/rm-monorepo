const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    _id: Schema.Types.ObjectId,
    airline:{
        type: Types.ObjectId,
        ref: 'airline',
        required: true
    },
    airport:{
        type: Schema.Types.ObjectId,
        ref: 'airport',
        required: true
    },
    landing:{
        type: Schema.Types.ObjectId,
        ref: 'landing',
        required: true
    },
    day: {
        type:String,
        required:true
    }
});

const flight = mongoose.model('flight', flightSchema, 'flights');
module.exports.flight = flight;