//Require dependencies
const express=require('express');
const router=express.Router();
//Require internal dependencies
const response=require('../../response');
const controller=require('./index-Sales');
const secure=require('../../auth/secure');


//ROUTES
router.get('/last',secure('decodeToken'),getLastSale)    //get a specific Table


function getLastSale(req,res,next) {
    controller.getLastSale()
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}


module.exports=router