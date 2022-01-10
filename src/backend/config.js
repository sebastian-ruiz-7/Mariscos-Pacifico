const dotenv=require('dotenv')
dotenv.config()

module.exports={
    api:{
        port:process.env.PORT
    },
    database:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    jwt:{
        secret: process.env.SECRET
    }
}