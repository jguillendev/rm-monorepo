const { initAirlinesAsync } = require('../dataAccessLayer/airportsDao');

const initalizeAsync = async () => {
    const result =  await initAirlinesAsync();
    return {
        data:result
    }
}
module.exports.initalizeAsync = initalizeAsync;