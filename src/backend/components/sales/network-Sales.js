//Require dependencies
const express=require('express');
const router=express.Router();
//Require internal dependencies
const response=require('../../response');
const controller=require('./index-Sales');
const secure=require('../../auth/secure');


//ROUTES
router.get('/last',secure('decodeToken'),getLastSale)    //get the last sale
router.get('/today',secure('decodeToken'),getSalesOfToday) //Get the sales of today
router.get('/get/:id',secure('decodeToken'),getSale) //Get a specific sale

function getLastSale(req,res,next) {
    controller.getLastSale()
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}


function getSalesOfToday(req,res,next) {
    controller.getSalesOfToday()
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

function getSale(req,res,next) {
    controller.getSale(req.params.id)
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

module.exports=router