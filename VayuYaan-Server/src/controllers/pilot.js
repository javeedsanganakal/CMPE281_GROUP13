const { Pilot } = require('../models/pilot');

async function createPilot(req, res) {
    const { name, phone, email, birthday, gender, certificate, billingInformation, driverlicense } = req.body;

    let pilot = new Pilot({
        name,
        phone,
        email,
        birthday,
        gender,
        certificate,
        billingInformation,
        driverlicense
    })

    pilot = await pilot.save();

    return res.status(200).json({
        success: true,
        data: pilot,
        message: 'Pilot created successfully'
    })
}

async function viewPilots(req, res) {
    const pilots = await Pilot.find().exec();

    return res.status(200).json({
        success: true,
        data: pilots,
    });
}

async function viewPilot(req, res) {
    const id = req.params.id;
    const pilot = await Pilot.findById(id).exec();

    return res.status(200).json({
        success: true,
        data: pilot,
    });
}

async function viewPilotByEmail(req, res) {
    const email = req.params.email;
    const pilot = await Pilot.find({ "email": email}).exec();

    // console.log(email, pilot)

    return res.status(200).json({
        success: true,
        data: pilot,
    });
}

async function deletePilot(req, res) {
    const id = req.params.id;
    const pilot = await Pilot.deleteOne({ _id: id }).exec();

    return res.status(200).json({
        success: true,
        data: pilot,
        message: "Deleted successfully"
    });
}

async function editPilot(req, res) {

    const { name, phone, email, birthday, gender, certificate, billingInformation, driverlicense } = req.body;

    const id = req.params.id;
    const pilot = await Pilot.updateOne({ _id: id }, {
        $set: {
            name,
            phone,
            email,
            birthday,
            gender,
            certificate,
            billingInformation,
            driverlicense
        }
    }).exec();

    return res.status(200).json({
        success: true,
        data: pilot,
        message: "Edited successfully"
    });
}

module.exports = {
    createPilot,
    viewPilots,
    viewPilot,
    viewPilotByEmail,
    deletePilot,
    editPilot
}