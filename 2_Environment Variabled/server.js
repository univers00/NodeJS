// npm i dotenv to manage ENV variables

const { write } = require("fs");
const http = require("http");
require('dotenv').config();     //default => .env and server.js in the some path
                                // reuire('dotenv).config({path:path/filename});





//to call any variable in .env file use => process.env.

const server = http.createServer((req,res)=>{

        res.setHeader('Content-Type','text/html');
        res.setHeader('acces-control-allow-origin','*');
        res.statusCode = 200;

                res.write(`<h1>${process.env.name}</h1>`);
                res.write(`<h2>${process.env.url}</h2>`);


        res.end(); 




});

server.listen(1000,"localhost",()=>{
    console.log("Start ... ")
});