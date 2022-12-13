const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const farmerRouter = require('./routes/farmer');
const pilotRouter = require('./routes/pilot');
const farmRouter = require('./routes/farm');
const droneRouter = require('./routes/drone');

const PORT = process.env.PORT || 3001;

const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))

const uri = 'mongodb+srv://user:admin@cluster0.ekmppyu.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Connectection established with database ' + uri))
    .catch(err => console.error('Something went wrong connecting', err))



app.use(express.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// api routes
app.use('/api/user', userRouter);
app.use('/api/farmer', farmerRouter);
app.use('/api/pilot', pilotRouter);
app.use('/api/farm', farmRouter);
app.use('/api/drone', droneRouter);
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});