//Require internal dependencies
const controller=require('./controller-Auth')
const store=require('../store/mysql')


module.exports=controller(store)