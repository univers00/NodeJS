const http = require("http");
const { StringDecoder } = require("string_decoder");
const url = require("url");
const util = require("util");  // for debugging.
const formidable = require("formidable");



let post = 1000;
let host ="localhost";

const server = http.createServer((req,res)=>{

// Note 1:
            //console.log(http.METHODS); => list of all methods => POST, GET, PUT, DELETE, PATCH, COPY ...
            
            //console.log(http.STATUS_CODES); // => list of all status code ==> 200, 404, 204 ....
            
            //console.log(req.method); => return the request method client use 
            
            //console.log(req.headers); // => give us all information of headers of request client  

            //console.log(req.url);

//Note 2:

            //use module "URL" to handling the "url request"
            //first => require("url") => we need to impost url module

        //let path = url.parse(req.url,true); //param1 => sring = url request
                                                //param2 => boolean = if we want to use parseQueryString module to parse url = true 
            //path.query, path.search, path.host, path.hostname,
            //path.protocol path.auth path.hash = nulls
            //attention some of this => dependie of req.methode (GET? POST? PUT? DELETTE? .....)



            // exemple ==> http://localhost:1000/?name=univer00&email=uzu.ki2140@gmail.com
        //console.log(util.inspect(path.query));
            //console.log(path.query.name);
            //console.log(path.query.email);


//note 3:

            //for "GET" request :  ==> browser use url to send data
            //for "POST" request : ==> browser use Body to send data

                //to get data from body

                    // let buffer = ""
                    // req.on("data",(data)=>{

                    //         buffer += data;

                    // })

                    // req.on("end",()=>{

                    //         console.log(buffer);
                    // })

                    //or

                            //some time we need to decoder body

                    // let decode = new StringDecoder("utf-8");    => utf-8 , binary , base64  ...
                    // let buffer = ""
                    // req.on("data",(data)=>{
    
                    //         buffer += decode.write(data);
    
                    // })
    
                    // req.on("end",()=>{
                    //         buffer += decode.end();
    
                    //         console.log(buffer);
                    // })

                //but we have here allof body type => form-data , x-www-form-urlencoded , raw , binary , GraphQl 
                //we skip this problems we use package "Formidable "  => :> :>


                        let form = formidable({multiples:true});
                        form.parse(req,(err,fields,files)=>{

                            if(err){
                                console.log('error');
                            }
                            let obj = {fields,files};
                            console.log(util.inspect(obj))
                        });

                
                
            







res.end();

}).listen(post,host,()=>{
    console.log("Serve running in ... _n","http://localhost:1000/");

})