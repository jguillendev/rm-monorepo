
'use strict';

const express = require('express')
const client = require('prom-client');

const app = express();
const port = 5000;
const products = [{
    id:'54f6d4s65',
    name: 'fideos',
    price: 99.90
}];

//const defaultLabels = { serviceName: 'api-v1' };
//client.register.setDefaultLabels(defaultLabels);
const registry = new client.Registry();

const counter = new client.Counter({
  name: 'aggregated_products',
  help: 'The total de productos agregados',
  labelNames: ['product_add']
});
const apiCallsCounter = new client.Counter({
    name: 'api_calls',
    help: 'Total de peticiones a la api'
});

registry.registerMetric(apiCallsCounter); 
registry.registerMetric(counter); 
registry.setDefaultLabels({
    app: 'api-products'
});
client.collectDefaultMetrics({
    register: registry
});

app.get('/', function (req, res) {
    apiCallsCounter.inc();
    res.send('Tooly Fans Products API');
})

app.get('/list', function (req, res) {
    res.status(200).send(products);
})

app.post('/add', function (req, res) {

    const productAdd = req.body;
    console.log("adding new product");
    counter.inc({
        product_add: productAdd
    });
    res.send({
        id: new Date().getTime(),
        message:"add succesfully"
    })
})

// Metrics endpoint
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType)
    const metrics = await client.register.metrics()
    res.end(metrics);
})

//app.listen(3001)
const server = app.listen(port, () => {
    console.log(`tooly-fans products-api listening on port ${port}!`)
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