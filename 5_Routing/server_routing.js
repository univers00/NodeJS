const http = require("http");
const url  = require("url");


const server = http.createServer((req,res)=>{


let path = url.parse(req.url,true);

let pathName = path.pathname;

pathName = pathName.replace(/^\/+|\/+$/g,"");//reg exp if there is (one or more) / in debut of string or (one or more) / in last of string.

console.log(pathName);
// we use req.on event if routing with post method.......

req.on("data",()=>{

    console.log("in this example there is no data");

});

req.on("end",()=>{

    const rout = typeof routingUrl[pathName] == "undefined"? routingUrl["NotFound"]:routingUrl[pathName];

    let data = {
        'pathName': pathName,
        'qs': path.query,
        'headers' : req.headers,
        'method' : req.method.toLowerCase()  
    }



    rout(data,res);



});



}).listen(1000,"localhost",()=>{

console.log("Start");

});



const routingUrl = {

    "tizgha":function(data, res){
        res.write(JSON.stringify(data));
        res.end();
    },
    "univers00":function(data, res){
        res.write(JSON.stringify(data));
        res.end();
    },
    "uzuki":function(data, res){
        res.write(JSON.stringify(data));
        res.end();
    },
    "NotFound":function(data, res){
        console.log('Not Found')
        res.end();
    },
}