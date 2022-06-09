var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();
const {initialize} = require('../applicationLayer/airportActions');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// middleware para hacer algo, por ejemplo usar el helper de prometheus
// contar cuantas veces hacen llamadas a esta api de answers
router.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
})

//end request middleware
router.use(( err, req, res, next ) => {
    res.on('finish', function() {
        console.log("RESPONSE: ", res);
        trace("RESPONSE");
        trace(res);
    });
})


router.get('/', (req, res) => {
    res.status(200).json({msg:"welcome to airports api"});
})

router.get('/initialize', async (req, res) => {
    try {
        const {error, message, data} = await initialize();
        res.status(200).json(data);
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            error:err,
            type:"Exception",
            message:"Exception in server"
        })
    }
})


module.exports.AirportsRouter = router;