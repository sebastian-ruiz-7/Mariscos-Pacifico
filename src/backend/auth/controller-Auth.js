//Require dependencies
const bcrypt=require('bcrypt');
//Require internal dependencies
const errFormat=require('../errHandler/errFormat')
const jwtHandling=require('./jwt-Handling')

module.exports=(store)=>{

    const add=async(data)=>{
        try {
            data.password=await bcrypt.hash(data.password,5);
            delete data.name;
            delete data.puesto;
            const newAuthRow=store.add('auth',data);
            return newAuthRow;
        } catch (error) {
            throw errFormat(error,500)
        }
    }

    const updateUser=async(req)=>{
        req.body.password=await bcrypt.hash(req.body.password,5);
        const sortedData={id:req.user.id,email:req.body.email,password:req.body.password};
        const updatedUser=await store.update('auth',sortedData);
        return updatedUser;
    }

    const login=async(data)=>{
        try {
            if (!data.email) {
                throw new SyntaxError('Invalid query');
            }
            let verifyUser=await store.get('auth',{email:data.email});
            if (Object.keys(verifyUser).length===0) {
                throw new SyntaxError('Contraseña o correo incorrecto');
            }
            verifyUser=verifyUser[0];
            const match=await bcrypt.compare(data.password,verifyUser.password)
            if (match) {
                let desiredUser=await store.get('users',{email:data.email});
                desiredUser=desiredUser[0]
                const token=jwtHandling.sign(JSON.parse(JSON.stringify({id:desiredUser.id,email:desiredUser.email,puesto:desiredUser.puesto})));
                return token;
            }else{
                throw new SyntaxError('Contraseña o correo incorrecto');
            }
        } catch (error) {
            if (error instanceof SyntaxError) {
                throw errFormat(error,400)
            }
        }
    }

    const deleteUser=async(req)=>{
        const sortedData={id:req.user.id};
        const deletedUser=await store.remove('auth',sortedData);
        return deletedUser;
    }

    return{
        add,
        updateUser,
        login,
        deleteUser
    }
}