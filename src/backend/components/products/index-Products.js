//Require internal dependencies
const controller=require('./controller-Products')
const store=require('../../store/mysql')

module.exports=controller(store)