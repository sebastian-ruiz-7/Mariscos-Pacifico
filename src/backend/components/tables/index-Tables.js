//Require internal dependencies
const controller=require('./controller-Tables')
const store=require('../../store/mysql')

module.exports=controller(store)