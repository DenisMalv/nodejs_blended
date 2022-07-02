// name
// email
// password
// photo
// Team	Red Bull Racing
// Country	Netherlands
// Podiums	67
// Points	1732.5
// World Championships	1

const {Schema,model} = require('mongoose') 

const driverSchema = Schema({
name : String,
email : String,
password:String,
photo:String,
team:String,
country:String,
podiums:Number,
points:Number,
worldChampionships:Number
},{versionKey:false,timestamps:true})

module.exports = model("driver",driverSchema)


// https://documenter.getpostman.com/view/19136080/UzJETzqN