const { User } = require('../models/user');
const sqlConfig = require('../config-sql.js');

async function signUpController(req, res) {
    const { name, phone, email, password, role } = req.body;

    let user = new User({name, phone, email, password, role});
    user.save();
    // sqlConfig.query("INSERT INTO users (name, email, phone, password) VALUES (?,?,?)",[name, email, phone, password], (err,result)=>{
        // if(err) {
        //     console.log(err)
        //     } 
        //     console.log(result)
        //  });

    return res.status(200).json({
        success: true,
        data: name,
        message: `${name} is successfully signed up. Please login now!`
    })
}
const logInController = async (req,res) =>{
    const { email, password } = req.body;


    let user = await User.find({ "email": email })


    // sqlConfig.query("SELECT * FROM users WHERE email=? AND password=?",[email, password], (err,result)=>{
    //     if(err) {
    //         console.log(err)
    //         }          

    //     if (result.length == 0)  {

    //         return res.status(200).json({
    //         success: false,
    //         message: "No such user exists",
    //     });
    // } else {
    //     res.status(200).json({
    //         success: true,
    //         message: `Welcome back ${result.name}`,
    //     });
    // }



    // });

    return res.status(200).json({
        success: true,
        data: user,
        message: `${req.body.email} is successfully Logged in!`
    })

}

// async function logInController(req, res)  {
//     const { email, password } = req.body;


//     let user = await User.find({ "email": email})


//     // sqlConfig.query("SELECT * FROM users WHERE email=? AND password=?",[email, password], (err,result)=>{
//     //     if(err) {
//     //         console.log(err)
//     //         }          

//     //     if (result.length == 0)  {
      
//     //         return res.status(200).json({
//     //         success: false,
//     //         message: "No such user exists",
//     //     });
//     // } else {
//     //     res.status(200).json({
//     //         success: true,
//     //         message: `Welcome back ${result.name}`,
//     //     });
//     // }
    


// // });

//     return res.status(200).json({
//         success: true,
//         data: user,
//         message: `${user[0].email} is successfully signed up. Please login now!`
//     })
// }

module.exports = {
    signUpController,
    logInController
}