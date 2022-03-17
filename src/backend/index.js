//Require dependencies
const express=require('express');
const cors=require('cors');
const http=require('http')
//const { Server }=require('socket.io')
//Require internal dependencies
const config=require('./config');
const user=require('./components/user/network-User')
const tables=require('./components/tables/network-Tables');
const sales=require('./components/sales/network-Sales')
const products=require('./components/products/network-Products')
const auth=require('./auth/network')
const socket=require('./socket')

//Require err middleware
const error=require('./errHandler/errMiddleware');
//const { socket } = require('./socket');

//Initialize the express instance
const app=express();


app.use(express.json());
app.use(cors()); //Allows all domains use the API, not recomended for production


app.use('/api/user',user)
app.use('/api/login',auth)
app.use('/api/tables',tables)
app.use('/api/sales',sales)
app.use('/api/products',products)
//Error handling by middleware
app.use(error);

//Initialize the http Server
const server=http.createServer(app)

//Initialize the socket server
socket.connect(server)

// const io=new Server(server,{
//     cors:{
//         origin:'http://192.168.1.157:3005',
//     }
// })

//console.log(io)

// io.on('connection',socket=>{
//     console.log(socket.id)
// })

server.listen(config.api.port,'192.168.1.157',(err)=>{
    if (err) console.log(err)
    else console.log(`Server listend in port ${config.api.port}`)
})

// app.listen(config.api.port,(err)=>{
//     if (err) console.log(err)
//     else console.log(`Server listend in port ${config.api.port}`)})