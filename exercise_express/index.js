var express=require('express')
var mongoose=require('mongoose')
var bodyparser=require('body-parser')
var travel=require('./model/travel')
var cors=require('cors')

var app=express()
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
mongoose.set('debug',true)

mongoose.connect('mongodb://localhost:27017/reactfriend')
var db=mongoose.connection
db.on('error',function(){
console.log('error in connection')

})

db.once('open',function(){
console.log('connected')

})
app.get("/all",function(req,res){
travel.find({},function(err,data){
if(err){
res.send(err)

}else{
res.json(data)
}
})
})

app.listen(6789) 