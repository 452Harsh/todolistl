const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");


const app = express();
app.set("view engine","ejs");

var items = ["Buy food","Cook food","Eat food"];
var workItems = [];


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    let day = date();
    res.render("list",{ListTittle: day, newListItems : items});

});

app.post("/",function(req,res){
    let item = req.body.newItem;
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(req.body.newItem)
        res.redirect("/");}

})
app.get("/work",function(req,res){
    res.render("list",{ListTittle: "Work", newListItems : workItems});
})

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(){
    console.log("Server is running on 3000");
});