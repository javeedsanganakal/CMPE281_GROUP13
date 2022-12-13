const Joi = require('joi');
const mongoose = require('mongoose');

const driverLicenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    licenseid: {
        type: Number,
        required: true,
        trim: true
    },
});

const billingInformationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    cardnumber: {
        type: Number,
        required: true,
        trim: true
    },
    expiration: {
        type: Date,
        required: true,
        trim: true
    },
    cvv: {
        type: Number,
        required: true,
        trim: true
    },
});

const certificateSchema = new mongoose.Schema({
    idnumber: {
        type: Number,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
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
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    height: {
        type: String,
        required: true,
        trim: true
    },
    weight: {
        type: String,
        required: true,
        trim: true
    },
});

const pilotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    birthday: {
        type: Date,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    certificate: certificateSchema,
    billingInformation: billingInformationSchema,
    driverlicense: driverLicenseSchema
})

const Pilot = mongoose.model('Pilot', pilotSchema);

function validatePilot(pilot) {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
    });

    return schema.validate(pilot)
}
    
module.exports = {
    pilotSchema: pilotSchema,
    Pilot: Pilot,
    validatePilot: validatePilot
}