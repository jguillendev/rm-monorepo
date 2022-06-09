//const { InitMongoDb, InitMongoDbAsync } = require('../src/persistence/mongo/base/mongoRoot');
//import { Schema, model, connect } from 'mongoose';
//const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');

jest.setTimeout(8000)

describe('insert', () => {
    
    const connString = "mongodb+srv://user_dev:s4YDLwExGsQmibMK@freecluster.9td3h.mongodb.net/xaldigital?retryWrites=true&w=majority";
    let connection;
    let db;
  
    beforeAll(async () => {
        connection = await MongoClient.connect(connString, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        db = await connection.db();
    });

    afterAll(async () => {
      await connection.close();
    });
  
    it('should insert a doc into collection', async () => {
      const airlines = db.collection('airlines');
  
      await airlines.insertOne({
          _id: false,
          id:2,
          name:'interject'
      });
      const insertedAirline = await airlines.findOne({id:2});
      console.log("insertedAirline: ", insertedAirline);
      expect(insertedAirline.name).toEqual('interject');
    });
  });