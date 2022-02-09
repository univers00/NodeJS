const express = require("express");
const app = express();

//we set a variable 
app.set("views","./static"); // ==> app.locals.settings.views = "./static"
app.set("view engine","pug");// ==> app.locals.settings.["view engine"] = "pug"



//we can add variable in request
//we can do the some think for response

app.use(function(req,res,next){

req.myName = "univers00";
    next();
});

//set variable in other location
//lifetime of application
app.locals.myVariable1 = "hello";
app.locals.myVariable2 = "server";
app.locals.myVariable3 = "post";

app.locals.myName = "univers00"

app.get("/",(req,res)=>{



    let data = {
        title:"use Egine template ",
        obj:"pug",
        body:"bla bla bla "
    }
    res.render("index",data);
})






app.listen(1000,"localhost",function(){
    console.log("hello i'm Starting .... you have some request ....")
})