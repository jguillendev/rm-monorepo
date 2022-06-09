const { initalizeAsync } = require('../applicationLogic/airportsLogic');

const initialize = async (args, context, info)=>{
    // Cargar datos iniciales en la base de datos  
    console.log(args, context, info);
    const { data } = await initalizeAsync();
    console.log("logic:result ", data);
    return {
        data: data,
        error: false,
    };
}

module.exports.initialize = initialize;