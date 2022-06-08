
'use strict';

//OBTIENES DEPENDENCIAS NECESARIAS PARA EJECUTAR TODO LO QUE HACE ESTE ARCHIVO
const express = require('express');
const path = require('path');
const {registryMetrics, apiCallsCounter} = require('./server-metrics');


//CREAS UNA APP DE EXPRESS
const app = express();

// DEFINES UN PUERTO
const port = process.env.PORT || 5000;


// ## USANDO NUESTRO SERVER DE EXPRESS
//Usando Express
const { ExpressApp } = require('./servers/express/server');
ExpressApp.use(express.static(path.join(__dirname, 'public')));
ExpressApp.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
}); 

// Metrics endpoint
ExpressApp.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType)
  const metrics = await registryMetrics();
  res.end(metrics);
})

//Extendiendo el backend
const { AnswersRouter } = require('./routers/AnswersRouter');
ExpressApp.use('/api/answers', AnswersRouter);

const server = ExpressApp.listen(port, () => {
    console.log(`server-api listening on port ${port}!`);
    console.log('Press Ctrl+C to quit.');
  })
  
  process.on('SIGTERM', () => {

    server.close((err) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
  
      process.exit(0)
    })
  })