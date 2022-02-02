//Require dependencies
const express=require('express');
const router=express.Router();
//Require internal dependencies
const response=require('../../response');
const controller=require('./index-Sales');
const secure=require('../../auth/secure');


module.exports=router