const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const landingSchema = new Schema({
    _id: Schema.Types.ObjectId,
    description:{
      type:String,
      required:true
    }
});

const landing = mongoose.model('landing', landingSchema, 'landings');
module.exports.landing = landing;