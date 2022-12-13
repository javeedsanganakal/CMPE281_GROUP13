const { Farm } = require('../models/farm');

async function createFarm(req, res) {
    const { name, address, city, country, zipcode, area, dateofissue, utilitybill, driverlicense } = req.body;

    let farm = new Farm({
        name,
        address,
        city,
        country,
        zipcode,
        area,
        dateofissue,
        utilitybill,
        driverlicense
    })

    farm = await farm.save();

    return res.status(200).json({
        success: true,
        data: farm,
        message: 'Farm created successfully'
    })
}

async function viewFarms(req, res) {
    const farms = await Farm.find().exec();

    return res.status(200).json({
        success: true,
        data: farms,
    });
}

async function viewFarm(req, res) {
    const id = req.params.id;
    const farm = await Farm.findById(id).exec();

    return res.status(200).json({
        success: true,
        data: farm,
    });
}

async function deleteFarm(req, res) {
    const id = req.params.id;
    const farm = await Farm.deleteOne({ _id: id }).exec();

    return res.status(200).json({
        success: true,
        data: farm,
        message: "Deleted successfully"
    });
}

async function editFarm(req, res) {

    const { name, address, city, country, zipcode, area, dateofissue, utilitybill, driverlicense } = req.body;

    const id = req.params.id;
    const farm = await Farm.updateOne({ _id: id }, {
        $set: {
            name,
            address,
            city,
            country,
            zipcode,
            area,
            dateofissue,
            utilitybill,
            driverlicense
        }
    }).exec();

    return res.status(200).json({
        success: true,
        data: farm,
        message: "Edited successfully"
    });
}

module.exports = {
    createFarm,
    viewFarms,
    viewFarm,
    deleteFarm,
    editFarm
}