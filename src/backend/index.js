//Require dependencies
const express=require('express');
//Require internal dependencies
const config=require('./config');
const user=require('./components/user/network-User')
const auth=require('./auth/network')
//Require err middleware
const error=require('./errHandler/errMiddleware')

const app=express();
app.use(express.json());

app.use('/user',user)
app.use('/login',auth)
//Error handling by middleware
app.use(error);

app.listen(config.api.port,(err)=>{
    if (err) console.log(err)
    else console.log(`Server listend in port ${config.api.port}`)})