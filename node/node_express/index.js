//do all imports
var express = require('express')
var ejs =require('ejs')
var bp =require('body-parser')

//initialize the express app
var app=express()

//set the view engine
app.set('view engine', 'ejs')

//set the folder where all the apps are set
app.set('views',__dirname + '/template')

app.use(bp.json())

var urlencodeparser = bp.urlencoded({extended:false})

app.get("/",function(req,res){
    res.send("Hello from Express!!!")
})
app.get("/about",function(req,res){
    res.send("Hello from Express About!!!")
})


app.get("/home",function(req,res){
res.render('home')
})
app.get("/about",function(req,res){
res.render('about')
})
app.post("/about", urlencodeparser, function(req,res){
    console.log(req.body)
    res.send("Received Information:"+ JSON.stringify(req.body))
})
app.post('/contact/:name', function(req,res){
    console.log("Get in touch with: " + req.params.name)
    console.log(req.body)
    //res.send("received")
    res.render('profile', {
        name:releaseEvents.params.name,
        profile:req.body
    })
})
app.listen(8888)