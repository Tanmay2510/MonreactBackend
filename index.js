const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const rhandler = require('./routes/handler.js');
require('dotenv/config');
const bp = require("body-parser");
const { Spot } = require("./models/schemas.js");

const app = express();
const port = process.env.PORT || 5000;

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());
app.use(cors());
app.use('/',rhandler);

mongoose.connect(process.env.DB_URI,{ useNewUrlParser:true,useUnifiedTopology:true})
.then( () => {
    console.log("Db connected");
})
.catch((e)=>{
    console.log("Error :"+e);
})

//prod code
// if(process.env.NODE_ENV === 'production'){
//             app.use(express.static(path.join(__dirname,'client/build')));
//             app.get('*',function(req,res){
//                 res.sendFile(path.join(__dirname,'client/build',routesHandler));
//             });
// }

app.get("/", (req,res)=>{
    res.send("This is working");
})

app.route("/getusers/:getid")
.get((req,res)=>{
    Spot.find({firstName:req.params.getid},function(err,foundone){
        if(foundone){
           res.json(foundone)
        }else{
            res.send("Err");
        }
    })
})

app.route("/getdate/:getdateid")
.get((req,res)=>{
        let a = req.params.getdateid+"T14:10:26.113Z";
        Spot.find({"orders.date":a},function(e,f){
            
               if(f){
                res.status(200).json({
                    success:true,
                    dat:f
                })
               }else if(e){
                console.log("Error"+e)
               }
        })
    })


app.get("/search",async (req,res)=>{
    let a = [];
   Spot.find({},(e,f)=>{
    f.map(name=>{
         a.push(name.firstName)
    })
      res.status(200).json({
        success:true,
        data:a
      })
   })
})

   


app.listen(port,()=>{
    console.log("This is running on "+port);
})