const Joi = require('joi');
const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
    model: {
        type: String,
        required: true,
        trim: true
    },
    service: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    zipcode: {
        type: Number,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        trim: true
    },
    farmerId: {
        type: String,
        trim: true,
        default: null
    },
    pilotId: {
        type: String,
        trim: true,
        default: null
    },
    farmId: {
        type: String,
        trim: true,
        default: null
    }
})

const Drone = mongoose.model('Drone', droneSchema);

function validateDrone(drone) {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
    });

    return schema.validate(drone)
}
    
module.exports = {
    droneSchema,
    Drone,
    validateDrone
}