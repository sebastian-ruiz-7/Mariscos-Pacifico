//Require dependencies
const express=require('express');
const router=express.Router();
//Require internal dependencies
const response=require('../../response');
const controller=require('./index-Products');
const secure=require('../../auth/secure');


//ROUTES
router.get('/:category',secure('decodeToken'),getCategoryPrices)    //get a specific Table


router.put('/',secure('decodeToken'),updatePriceProduct)

function getCategoryPrices(req,res,next) {
    controller.getCategoryPrices(req.params.category)
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

function updatePriceProduct(req,res,next) {
    controller.updatePriceProduct(req.body)
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}


module.exports=router