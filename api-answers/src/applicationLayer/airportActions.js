const { initalizeAsync, oneAsync } = require('../applicationLogic/airportsLogic');

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

const actionOne = async (args, context, info)=>{
    // Cargar datos iniciales en la base de datos  
    console.log(args, context, info);
    const { data } = await oneAsync();
    console.log("logic:result ", data);
    return {
        data: data,
        error: false,
    };
}

module.exports.initialize = initialize;
module.exports.actionOne = actionOne;