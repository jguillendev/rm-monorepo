const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name:{
      type:String,
      required:true
    }
});

const airport = mongoose.model('airport', airportSchema, 'airports');
module.exports.airport = airport;