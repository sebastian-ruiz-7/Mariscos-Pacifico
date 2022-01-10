//Require dependencies
const express=require('express');
const router=express.Router();
//Require internal dependencies
const response=require('../../response');
const controller=require('./index-User');
const secure=require('../../auth/secure');

//ROUTES
router.get('/',secure('decodeToken'),getUser)    //get the info from a user
router.post('/',addUser) //Add a user
router.put('/',secure('decodeToken'),updateUser) //Update a user
router.delete('/',secure('decodeToken'),deleteUser); //deletes a user

function getUser(req,res,next) {
    controller.getUser(req.user)
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

function addUser(req,res,next) {
    controller.addUser(req)
        .then(message=>response.succes(req,res,message,201))
        .catch(next)
}

function updateUser(req,res,next) {
    controller.updateUser(req)
        .then(message=>response.succes(req,res,message,200))
        .catch(next)
}

function deleteUser(req,res,next) {
    controller.deleteUser(req)
        .then((message)=>response.succes(req,res,message,200))
        .catch(next);
}

module.exports=router