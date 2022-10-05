const mongoose = require("mongoose");
const Schema =  mongoose.Schema;
const userSchema = new Schema({
    customerId:{type: Number,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    orders:[
        {
            list:Number,
            amount:Number,
            date:Date
        }
    ]
});
const spotuser = new mongoose.model("Spotuser",userSchema);
const spu = {'Spot':spotuser}; //for multiple schemas to export
module.exports = spu;