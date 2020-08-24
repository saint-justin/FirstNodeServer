const Polygon = require('./polygon.js');
const _ = require('underscore');
const http = require('http');


for (let i = 0; i < 3; i++)
  console.log("Hello world!");

const myPolygon = new Polygon(10, 15);
console.log(myPolygon.height);
console.log(`Keys in myPolygon: ${Object.keys(myPolygon).length}`)

for (let item in Object.keys(myPolygon))
  console.log(item)

const arr = [1, 2, 3, 4, 5];
const found = _.contains(arr, 3);
console.log(found);

let getMessage = _ => { console.log("Hello world") };


const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  if (request.url === '/favicon.ico') {
    console.log('favicon request');
  }

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log('request recieved');

  response.write("Hello world...");
  response.end();
};

http.createServer(onRequest).listen(port);