const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    const file = __dirname + "/imagepost.jpg";
  
fs.access(file,fs.constants.F_ok,(err)=>{

 console.log(err?"Not found":"Found");

});

fs.readFile(file,(err,data)=>{
    console.log("readfile");

    if(err){
        res.writeHead(404,{"Content-type":"text/plain"})
        res.write("File not exists");
        res.end();
    }

    res.writeHead(200,{"Content-type":"image/jpg"})
    res.write(data);
    res.end();

});




}).listen(1000,"localhost",()=>{
    console.log("Server is running")
})