//Require internal dependencies
const controller=require('./controller-User')
const store=require('../../store/mysql')

module.exports=controller(store)