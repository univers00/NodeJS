"use strict"; //Strict mode makes it easier to write "secure" JavaScript. ==> ECMA5
const express =require("express");
const app = express();


//equest Verbs


// app.get("/",(req,res)=>{});
// app.post("/",(req,res)=>{});
// app.put("/",(req,res)=>{});
// app.delete("/",(req,res)=>{});
//...
/*

app.get("/",(req,res)=>{})
.app.post("/",(req,res)=>{});
.app.put("/",(req,res)=>{});// Basically an UPDATE but we could also do an INSERT if the id is available
.app.patch("/",(req,res)=>{});edit
.app.head("/",(req,res)=>{});//return same headers as get. no content. to check that endpoint is functional
.app.options("/",(req,res)=>{});////return headers including ALLOW to say what methods are allowed

*/




app.get("/",(req,res)=>{

    console.log(req.url);
    res.send("<h1>home</h1>"); //defiend automatically the content type and ...., of what i send to browser
})


app.get("/univers00",(req,res)=>{
    
    console.log(req.url);
    res.send("<h1>00</h1>");
})


app.get("/univers01",(req,res)=>{
    
    console.log(req.url);
    res.send("<h1>01</h1>");
})


app.get("/univers02",(req,res)=>{
    
    console.log(req.url);
    res.send("<h1>02</h1>");
})

app.get("/new",()=>{
    res.redirect(301,'/');

})


app.listen(1000,"localhost",function(err){

    if(err){
        console.group("you have a poblem");
    }
        console.log("server is running in post 1000");

})