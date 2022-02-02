//Require dependencies
const mysql=require('mysql2')
//Require internal dependencies
const config=require('../config')


let dbConfig={
    host:config.database.host,
    user:'root',
    database:config.database.database,
    password:config.database.password,
    port:config.database.port
}

let connection;

const handleConnection=()=>{
    connection=mysql.createConnection(dbConfig);

    connection.connect((err)=>{
        if (err) {
            setTimeout(() => {
                handleConnection();
            }, 2000);
        }else{
            console.log('[db connected!]');
        }
    })


    connection.on('error',(err)=>{
        console.error('[db error]',err);
        if (err.code==='PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        }else{
            throw err;
        }
    })
}

handleConnection();

const get=(table,data)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT * FROM ${table} WHERE ?`,data,(err,result)=>{
            if (err) {
                return reject(err)
            }else{
                return resolve(result)
            }
        })

    })
}

const getOpenTables=()=>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT tableNumber FROM openTables`,(err,result)=>{
            if (err) {
                return reject(err)
            }else{
                return resolve(result)
            }
        })

    })
}

const add=(table,data)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`INSERT INTO ${table} SET ?`,data,(err,result)=>{
            if (err) {
                return reject(err)
            }else{
                return resolve(result)
            }
        })
    })
}

const update=(Table,data)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`UPDATE ${Table} SET ? WHERE id=?`,[data,data.id],(err,result)=>{
            if (err) {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
};

const updateTable=(Table,data)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`UPDATE ${Table} SET ? WHERE tableNumber=?`,[data,data.tableNumber],(err,result)=>{
            if (err) {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
};

const updateTableNumber=(Table,data,oldTableNumber)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`UPDATE ${Table} SET ? WHERE tableNumber=?`,[data,oldTableNumber],(err,result)=>{
            if (err) {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
};

const remove=(Table,data)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`DELETE FROM ${Table} WHERE ?`,data,(err,result)=>{
            if (err) {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
};

module.exports={
    get,
    getOpenTables,
    add,
    update,
    updateTable,
    updateTableNumber,
    remove
}