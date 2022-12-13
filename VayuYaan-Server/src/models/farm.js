const Joi = require('joi');
const mongoose = require('mongoose');

const driverLicenseSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: false
    },
    licenseid: {
        type: Number,
        trim: false
    },
});

const utilityBillSchema = new mongoose.Schema({
    agreementId: {
        type: String,
        trim: false
    },
    dateofsettlement: {
        type: Date,
        required: false
    }
});

const farmSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    zipcode: {
        type: Number,
        trim: true
    },
    area: {
        type: Number,
        trim: true
    },
    dateofissue: {
        type: Date,
        trim: true
    },
    utilitybill: utilityBillSchema,
    driverlicense: driverLicenseSchema
})

const Farm = mongoose.model('Farm', farmSchema);

function validateFarm(farm) {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
    });

    return schema.validate(farm)
}
    
module.exports = {
    farmSchema,
    Farm,
    validateFarm
}