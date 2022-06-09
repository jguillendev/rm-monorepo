
const sum = (a, b) => a+b;

// beforeAll(() => {
//     const {InitMongoDbAsync} = require('../src/persistence/mongo/base/mongoRoot');
//     const connString = "mongodb+srv://user_dev:PodcbMnYxaBj4aC7@freecluster.9td3h.mongodb.net/xaldigital?retryWrites=true&w=majority";
//     return InitMongoDbAsync(connString).then((success)=>{
//         expect(success).toEqual(true);
//     });
// });
  
// afterAll(() => {
//     return clearCityDatabase();
// });

test('adds 1 + 2 to equal 3', async () => {
    const {InitMongoDbAsync} = require('../src/persistence/mongo/base/mongoRoot');
    const connString = "mongodb+srv://user_dev:PodcbMnYxaBj4aC7@freecluster.9td3h.mongodb.net/xaldigital?retryWrites=true&w=majority";
    const connected = await InitMongoDbAsync(connString);
    expect.assertions(2);
    expect(sum(1, 2)).toBe(3);
    expect(connected).toEqual(true);
});