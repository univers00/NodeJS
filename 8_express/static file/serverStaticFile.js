const express = require("express");
const app = express();


//https://expressjs.com/en/5x/api.html#express.static

let options = {
    dotfiles:"ignore",
    etag:false,
    extensions:["html","htm"],
    index: false, //to disable directory indexing
    maxAge: "1d",
    redirect: false,
    setheaders:(res,path,static)=>{//there is more
        //this header will set in all static files
        
    }

}    //app.use(express.static("public",options))
app.use("/access",express.static("public",options))


app.get('/' , (req , res)=>{


   res.send('<a href="/.htaccess">secret</a>');

})



app.listen(1000,"localhost",()=>{

console.log("Start server in post 1000");

});