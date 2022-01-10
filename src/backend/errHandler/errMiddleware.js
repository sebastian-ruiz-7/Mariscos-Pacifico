//Require internal dependencies
const response=require('../response')

const errosMiddleware=(err,req,res,next)=>{
    console.error('[ERROR]',err)

    const message=err.message || 'Internal Server Error';
    const status=err.statusCode || 500;

    response.failed(req,res,message,status)
}

module.exports=errosMiddleware