const { initAirlinesAsync } = require('../dataAccessLayer/airportsDao');
const {Airport} = require('../persistence/mongo/entities/airport');
const {Flight} = require('../persistence/mongo/entities/flight');

const initalizeAsync = async () => {
    const result =  await initAirlinesAsync();
    return {
        data:result
    }
}

// https://studio3t.com/knowledge-base/articles/mongodb-aggregation-framework/
const oneAsync = async () => {
    //aeropuerto con mayor movimiento durante el año
    const result = await Flight.aggregate([
        { $group : { 
                _id : '$id_airport', 
                airport_flights : { $sum : 1 },
            } 
        },
        { $sort: { airport_flights: 1 } },
        // { $max: { airport_flights: 1, } }, no soportado por mi version de mongo cluster :'(
        { $lookup: {
            from: "airports",
            localField: "_id",
            foreignField: "id_airport",
            as: "airport"
        }},
        {
            $unwind: '$airport'
        },
        { $project: { _id:0, id:"$_id" , name: "$airport.name", flights:"$airport_flights" }},
    ]);
    console.log("AIRPORTS:LOGIC:ONE-ASYNC:RESULT: ", result);

    //como mi version del cluster de mongo no soporta $max
    //obtendremos los maximos a manita
    const total_values = result.map(airport => {
        return airport.flights;
    });
    const max_value = Math.max.apply(null, total_values);
    const max_airports = result.filter(airport => airport.flights === max_value);

    return {
        data: max_airports
    }
}

module.exports.initalizeAsync = initalizeAsync;
module.exports.oneAsync = oneAsync;