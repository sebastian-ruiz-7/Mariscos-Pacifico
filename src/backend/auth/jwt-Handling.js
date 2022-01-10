//Require dependencies
const jwt=require('jsonwebtoken')
//Require internal dependencies
const config=require('../config')

const sign=(payload)=>{
    return jwt.sign(payload,config.jwt.secret)
}

const verify=(token)=>{
    return jwt.verify(token,config.jwt.secret);
}

const check={
    decodedToken:(req)=>{
        let token=req.headers.authorization;
        token=sortToken(token);
        token=verify(token);
        req.user=token;
    }
}

const sortToken=(token)=>{
    if (!token) {
        throw 'No token received'
    }else if (token.indexOf('Bearer ',-1)) {
        throw 'Invalid token format';
    }else{
        token=token.replace('Bearer ','');
    }
    return token;
}


module.exports={
    sign,
    check
}