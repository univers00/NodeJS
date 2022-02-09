const http = require("http");


const server = http.createServer((req,res)=>{

        res.setHeader('Content-Type','application/json');
        res.setHeader('acces-control-allow-origin','*');
        res.statusCode = 200;

                dataObj = {
                        name :"univers00",
                        url:"https://github.com/univers00"
                };

                data = JSON.stringify(dataObj);


        res.end(data) // end(param) Accept string params

        




});

server.listen(1000,"localhost",()=>{
    console.log("Start ... ")
});