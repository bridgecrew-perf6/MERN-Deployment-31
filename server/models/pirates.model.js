const mongoose = require('mongoose');
 
const PirateSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: [true, "name is required"],
        minlength: [3, 'name must be 2 characters long']

    },

    url: {
        type: String,
        required: [true, "image is required"]
    },

    chests: {
        type: Number,
        required: [true, "number of chests are required"]
    },

    phrase: {
        type: String,
        required: [true, "catch phrases are required"]
    },

    pegLeg: {
        type: Boolean
        
    },

    eyePatch: {
        type: Boolean
    },

    hookHand: {
        type: Boolean
    },

    crewPosition: {
        type: String,
        required: [true, "crew position is required"]
    }

},{timestamps:true});
 
const Pirate = mongoose.model('Pirate', PirateSchema);
 
module.exports = Pirate;
