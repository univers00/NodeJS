const express = require("express");
const app = express();
const posts = require("./nested");

//midalleware

app.use((req,res,next)=>{
    console.log("welcome ==> "+req.url);
    next();
})





//app.get("/posts",(req,res)=>{//code})
//app.get("/posts",(req,res)=>{//code})

//or

// app.route("posts")
// .get((req,res)=>{})
// .post((req,res)=>{});

//or

/**
 * "/facebook" - handles /facebook
 * "/b?ook" - handles /ook or /book
 * "/ab+cd" - handles /abcd, /abbbcd, /abbbbbbbcd, etc
 * "/ab*cd" - "/ab" + anything + "cd"
 * /a/ - RegExp: anything that contains "a"
 * /.*man$/ - RegExp: anything that ends with "man"
 * ^ - starts with
 */

//or

app.use("/user",posts);






app.listen(1000,"localhost",function(){

    console.log("start ****");
})