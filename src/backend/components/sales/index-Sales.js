//Require internal dependencies
const controller=require('./controller-Sales')
const store=require('../../store/mysql')

module.exports=controller(store)