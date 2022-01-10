const succes=(req,res,message,status)=>{
    let messageDefault=message || 'ok';
    let statusDefault=status || 200;
    res.status(statusDefault).send({
        error:false,
        status:statusDefault,
        body: messageDefault
    })
}

const failed=(req,res,message,status)=>{
    let err=message || 'Internal Server Error';
    let statusDefault=status || 500;
    res.status(statusDefault).send({
        error:err,
        status:statusDefault,
        body:false
    })
}

module.exports={succes,failed}