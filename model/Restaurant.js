const { ObjectId } = require('bson');
const { timeStamp } = require('console');
const mongoose = require('mongoose');


const RestaurantSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    price: {
        type: Number,
	      required: true
    },

    taste: {
        type: Number,
        required: true
    },

    ambiente: {
        type: Number,
        required: true
    },

    service: {
        type: Number,
        required: true
    },

    impression: {
        type: Number,
        required: true
    },

    price_quality: {
        type: Number,
        required: true
    },

    carpark: {
        type: Boolean,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    last_modify: {
        type: Date
    },

    created: {
        type: Date
    }
}, {timestamps: true});

module.exports = mongoose.model('restaurant', RestaurantSchema);