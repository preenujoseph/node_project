var mongoose=require('mongoose')
var mongoSchema=mongoose.Schema
var friendSchema=new mongoSchema(
{
"name":String,
"description":String,
"image":String,
},{collection:'travelblog'}
)
module.exports=mongoose.model("travelblog",friendSchema)  