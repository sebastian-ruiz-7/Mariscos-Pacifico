//Require dependencies
const {nanoid}=require('nanoid')
//Require internal dependencies
const errFormat=require('../../errHandler/errFormat')
const auth=require('../../auth/index-Auth')
const jwt=require('../../auth/jwt-Handling')

module.exports=(store)=>{
    
    const getUser=async(decodedToken)=>{
        const sortdata={id:decodedToken.id};
        const desiredUser=await store.get('users',sortdata);
        return desiredUser;
    }

    const addUser=async(req)=>{
        try {
            if (!req.body.name || !req.body.email || !req.body.password) {
                throw new SyntaxError('Insufficient information')
            }
            let sortedData={id:req.body.id,name:req.body.name,email:req.body.email};
            if (!req.body.id) {
                sortedData.id=nanoid()
            }
            const verifyUserIsNew=await store.get('users',{email:sortedData.email})

            if (Object.keys(verifyUserIsNew).length>0) {
                throw new TypeError('Email already taken')
            }

            const addUserRow=await store.add('users',sortedData);
            sortedData.password=req.body.password
            const addAuthRow=await auth.add(sortedData);
            const token=jwt.sign(JSON.parse(JSON.stringify({id:sortedData.id,email:sortedData.email})))
            return token;

        } catch (error) {
            if (error instanceof SyntaxError) {
                throw errFormat(error,400)
            } else if (error.message=='Email already taken') {
                throw errFormat(error,400)
            } else{
                throw errFormat(error,500)
            }
        }
    }


    const updateUser=async(req)=>{
        try {
            if (!req.body.name || !req.body.email || !req.body.password) {
                throw new SyntaxError('Invalid query');
            }
            const sortData={id:req.user.id, name:req.body.name, email:req.body.email};
    
            let verifyTheUserIsNew=await store.get('users',{id:sortData.email});
            
            if (Object.keys(verifyTheUserIsNew).length>0) {
                throw new SyntaxError('email already taken');
            }
            
            const updatedUser=await store.update('users',sortData);
            const updatedAuthRow=await auth.updateUser(req);
            return updatedUser;
        } catch (error) {
            throw errFormat(error,400)
        }   
    }

    const deleteUser=async(req)=>{
        const sortData={id:req.user.id};
        const deletedUser=await store.remove('users',sortData);
        const deleteAuthRow=await auth.deleteUser(req);
        return deletedUser;
    }

    return{
        getUser,
        addUser,
        updateUser,
        deleteUser
    }
}