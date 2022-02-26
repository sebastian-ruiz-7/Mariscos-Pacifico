//Require dependencies
const express=require('express');
const cors=require('cors');
//Require internal dependencies
const config=require('./config');
const user=require('./components/user/network-User')
const tables=require('./components/tables/network-Tables');
const sales=require('./components/sales/network-Sales')
const products=require('./components/products/network-Products')
const auth=require('./auth/network')

//Require err middleware
const error=require('./errHandler/errMiddleware')

const app=express();
app.use(express.json());
app.use(cors()); //Allows all domains use the API, not recomended for production


app.use('/user',user)
app.use('/login',auth)
app.use('/tables',tables)
app.use('/sales',sales)
app.use('/products',products)
//Error handling by middleware
app.use(error);

app.listen(config.api.port,'192.168.1.157',(err)=>{
    if (err) console.log(err)
    else console.log(`Server listend in port ${config.api.port}`)
})

// app.listen(config.api.port,(err)=>{
//     if (err) console.log(err)
//     else console.log(`Server listend in port ${config.api.port}`)})