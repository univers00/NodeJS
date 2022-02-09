const http = require("http");
const url = require("url");
const util = require("util");
const formidable = require("formidable");







const server =  http.createServer((request,response)=>{

    let methode = request.method.toLocaleUpperCase();

    if(methode == "GET")
    {
        let path = url.parse(request.url,true);

        response.writeHead(200,"ok",{
            'Content-Type':'text/plain'
        });
        response.write(util.inspect(path.query));
        console.log(util.inspect(path.query));
        response.end();


    }else if(methode == "POST")
    {
        let form = formidable({multiples:true});
        form.parse(request,(err,fields,files)=>{

            if(err){
                console.log("err");
                response.end("sorry try again");

            }

            let obj = {fields,files};
            response.write(util.inspect(obj));
            console.log(util.inspect(obj));
            response.end();

        })
    }else
    {
            console.log("sorry this method not add :) \n\n    see you later")
            response.end("sorry this method not add :) \n\n   see you later");
    }






}).listen(1000,"localhost",()=>{
    console.log("Start");
})