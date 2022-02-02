//Require dependencies
const express=require('express');
const router=express.Router();
//Require internal dependencies
const response=require('../../response');
const controller=require('./index-Tables');
const secure=require('../../auth/secure');

//ROUTES
router.get('/:id',secure('decodeToken'),getTable)    //get a specific Table
router.get('/',secure('decodeToken'),getOpenTables)    //get the open Tables
router.get('/pay/:id',secure('decodeToken'),payTable)    //get the open Tables

router.post('/',secure('decodeToken'),addTable)    //This method will open a table

router.put('/',secure('decodeToken'),updateTable) //This method will update the order of a table
router.put('/updateTable',secure('decodeToken'),updateTableNumber) //This method will update the number of a Table

router.delete('/:id',secure('decodeToken'),deleteTable)

function getTable(req,res,next) {
    controller.getTable(req.params.id)
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

function getOpenTables(req,res,next) {
    controller.getOpenTables()
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

function payTable(req,res,next) {
    controller.payTable(req.params.id)
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

function addTable(req,res,next) {
    controller.addTable(req)
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

function updateTable(req,res,next) {
    controller.updateTable(req.body)
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

function updateTableNumber(req,res,next) {
    controller.updateTableNumber(req.body)
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

function deleteTable(req,res,next) {
    controller.deleteTable(req.params.id)
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

module.exports=router;