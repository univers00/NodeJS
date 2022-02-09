const http = require("http");
const https = require("https");
const stream = require("stream").Transform;
const fs = require("fs");



const server = http.createServer((req,res)=>{

    //graph api facebook
    //Example !!
            //me/posts
            //post_id?fields=name,id
            //...

    let accessToken ="";
    https.get("https://graph.facebook.com/v12.0/3173749136177230_2179310592287761?fields=full_picture&access_token="+accessToken,(resp)=>{

        res.write(JSON.stringify(resp.headers));
        res.write(resp.headers["content-type"]);
        


                        let buffer = ""
                        resp.on("data",(chrunk)=>{

                                    buffer += chrunk;

                        });

                        resp.on("err",()=>{
                                    console.log('error')
                        })

                        resp.on("end",()=>{
                            
                                    //res.write(JSON.stringify(buffer));
                                    let img = JSON.parse(buffer).full_picture;
                                    
                                         https.get(img,(res)=>{

                                            console.log("Image post "+ res.statusCode);
                                            console.log("Image post "+ res.headers["content-length"]);
                                            console.log("Image post "+ res.headers["content-type"]);

                                            if(res.statusCode == 200 && res.headers["content-type"] == "image/jpeg")
                                            {

                                                let dataImg = new stream();

                                                res.on("data",(data)=>{dataImg.push(data)});
    
                                                res.on("err",()=>{ console.log('error image');})
    
                                                res.on("end",()=>{
                                                    let pathName = __dirname+"/imagepost.jpg";
                                                    fs.writeFileSync(pathName,dataImg.read());
                                                })


                                            }

                                            
                                        })

                        res.end();
                        })

    });




}).listen(1000,"localhost",()=>{

console.log("Start");

});