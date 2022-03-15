const dotenv=require('dotenv')
dotenv.config()

module.exports={
    api:{
        port:process.env.PORT,
        address: 'http://localhost:3000/'
    },
    database:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.USERDB,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    jwt:{
        secret: process.env.SECRET
    }
}