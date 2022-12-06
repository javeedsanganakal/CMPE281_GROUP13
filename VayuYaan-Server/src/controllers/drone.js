const { Drone } = require('../models/drone');

async function createDrone(req, res) {
    const { model, service, country, zipcode, status, farmerId, pilotId } = req.body;

    let drone = new Drone({
        model,
        service,
        country,
        zipcode,
        status,
        farmerId,
        pilotId,
    })

    drone = await drone.save();

    return res.send({
        success: true,
        data: drone,
        message: 'Drone created successfully'
    })
}

async function viewDrones(req, res) {
    const drones = await Drone.find().exec();

    return res.send({
        success: true,
        data: drones,
    });
}

async function viewDrone(req, res) {
    const id = req.params.id;
    const drone = await Drone.findById(id).exec();

    return res.status(200).json({
        success: true,
        data: drone,
    });
}

async function deleteDrone(req, res) {
    const id = req.params.id;
    const drone = await Drone.deleteOne({ _id: id }).exec();

    return res.status(200).json({
        success: true,
        data: drone,
        message: "Deleted successfully"
    });
}

async function editDrone(req, res) {

    const { model, service, country, zipcode, status, farmerId, pilotId } = req.body;

    const id = req.params.id;
    const drone = await Drone.updateOne({ _id: id }, {
        $set: {
            model,
            service,
            country,
            zipcode,
            status,
            farmerId,
            pilotId,
        }
    }).exec();

    return res.status(200).json({
        success: true,
        data: drone,
        message: "Edited successfully"
    });
}

module.exports = {
    createDrone,
    viewDrones,
    viewDrone,
    deleteDrone,
    editDrone
}