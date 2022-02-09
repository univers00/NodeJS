const http = require("http");


const server = http.createServer((req,res)=>{

        res.setHeader('Content-Type','text/html');
        res.setHeader('acces-control-allow-origin','*');
        res.statusCode = 200;


                res.write("<h1>Univers00</h1>");
                res.write("<h5>https://github.com/unives00</h5>");


        res.end(); //or res.end(" <h1>Univers00</h1>   <h5>https://github.com/unives00</h5>   ")






});

server.listen(1000,"localhost",()=>{
    console.log("Start ... ")
});