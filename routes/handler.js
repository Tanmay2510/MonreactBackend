const express = require("express");
const router = express.Router();
const Schema = require("../models/schemas.js");

router.get("/get",(req,res)=>{
    const p1 = {
        customerId:1234,
        firstName:"ramesh",
        lastName:"malhotra",
        orders:[ {
            list: 880, 
            amount: 379,
            date: "2020-07-25T14:10:26.113Z"
            },
            {
            list: 881, 
            amount: 479,
            date: "2020-08-25T14:10:26.113Z"
            },
            {
            list: 882, 
            amount: 579,
            date: "2020-09-25T14:10:26.113Z"
            }]
    }
    const person1 = new Schema.Spot(p1);
    try {
        person1.save((err,newperresult)=>{
            console.log("new user inserted");
        })
    } catch (err) {
        console.log(err);
    }
    const p2 = {
        customerId: 1235,
        firstName : "john",
        lastName:"doe",
        orders:[ {
            list: 883, 
            amount: 379,
            date: "2020-07-25T14:10:26.113Z"
            },
            {
            list: 884, 
            amount: 479,
            date: "2020-08-25T14:10:26.113Z"
            }]
    }
    const person2 = new Schema.Spot(p2);
    try {
        person2.save((err,newperresult)=>{
            console.log("new user inserted");
        })
    } catch (err) {
        console.log(err);
    }
    const p3 = {
        customerId: 1236,
        firstName : "mohd",
        lastName:"islam",
       
 orders:[ {
    list: 886, 
    amount: 379,
    date: "2020-07-25T14:10:26.113Z"
    },
    {
    list: 887, 
    amount: 479,
    date: "2020-08-25T14:10:26.113Z"
    },
    {
    list: 888, 
    amount: 579,
    date: "2020-09-25T14:10:26.113Z"
    },
    {
    list: 889, 
    amount: 579,
    date: "2020-10-25T14:10:26.113Z"
    }]
       
    }
    const person3 = new Schema.Spot(p3);
    try {
        person3.save((err,newperresult)=>{
            console.log("new user inserted");
        })
    } catch (err) {
        console.log(err);
    }
    res.end();
})
module.exports=router;