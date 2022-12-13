const Joi = require('joi');
const mongoose = require('mongoose');

const utilityBillSchema = new mongoose.Schema({
    agreementId: {
        type: String,
        required: true,
        trim: true
    },
    dateofsettlement: {
        type: Date,
        required: false
    }
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
    totalarea: {
        type: Number,
        required: true,
        trim: true
    },
    dateofissue: {
        type: Date,
        required: true,
        trim: true
    },
});

const plotSchema = new mongoose.Schema({
    livestock: {
        type: Boolean,
        default: false,
    },
    crops: {
        type: Boolean,
        default: false,
    },
    fruits: {
        type: Boolean,
        default: false,
    },
    nursery: {
        type: Boolean,
        default: false,
    },
    detail: {
        type: String,
        trim: true,
    },
});

const farmSchema = new mongoose.Schema({
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
    plot: plotSchema,
    certificate: certificateSchema
})

const farmerSchema = new mongoose.Schema({
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
    farm: farmSchema,
    billingInformation: billingInformationSchema,
    utilitybill: utilityBillSchema
})

const Farmer = mongoose.model('Farmer', farmerSchema);

function validateFarmer(farmer) {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
    });

    return schema.validate(farmer)
}
    
module.exports = {
    farmerSchema: farmerSchema,
    Farmer: Farmer,
    validateFarmer: validateFarmer
}