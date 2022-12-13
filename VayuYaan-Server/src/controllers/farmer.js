const { Farmer } = require('../models/farmer');
const { Farm } = require('../models/farm');

async function createFarmer(req, res) {
    const { name, phone, email, birthday, gender, farm, billingInformation, utilitybill } = req.body;

    console.log(req.body)

    let farmer = new Farmer({
        name,
        phone,
        email,
        birthday,
        gender,
        farm,
        billingInformation,
        utilitybill,
    })

    farmer = await farmer.save();



    let farmCol = new Farm({
        name: farm.name,
        address: farm.address,
        city: farm.city,
        country: farm.country,
        zipcode: farm.zipcode,
        utilitybill: {},
        driverlicense: {},
    })

    farmCol = await farmCol.save();

    return res.status(200).json({
        success: true,
        data: farmer,
        farm: farmCol,
        message: 'Farmer created successfully'
    })
}

async function viewFarmers(req, res) {
    const farmers = await Farmer.find().exec();

    return res.status(200).json({
        success: true,
        data: farmers,
    });
}

async function viewFarmer(req, res) {
    const id = req.params.id;
    const farmer = await Farmer.findById(id).exec();

    return res.status(200).json({
        success: true,
        data: farmer,
    });
}

async function viewFarmerByEmail(req, res) {
    const email = req.params.email;
    const farmer = await Farmer.find({ "email": email}).exec();

    return res.status(200).json({
        success: true,
        data: farmer,
    });
}

async function deleteFarmer(req, res) {
    const id = req.params.id;
    const farmer = await Farmer.deleteOne({ _id: id }).exec();

    return res.status(200).json({
        success: true,
        data: farmer,
        message: "Deleted successfully"
    });
}

async function editFarmer(req, res) {

    const { name, phone, email, birthday, gender, farm, billingInformation, utilitybill } = req.body;

    const id = req.params.id;
    const farmer = await Farmer.updateOne({ _id: id }, {
        $set: {
            name,
            phone,
            email,
            birthday,
            gender,
            farm,
            billingInformation,
            utilitybill,
        }
    }).exec();

    return res.status(200).json({
        success: true,
        data: farmer,
        message: "Edited successfully"
    });
}

module.exports = {
    createFarmer,
    viewFarmers,
    viewFarmer,
    deleteFarmer,
    editFarmer,
    viewFarmerByEmail
}