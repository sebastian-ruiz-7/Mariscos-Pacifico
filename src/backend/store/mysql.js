//Require dependencies
const { reject } = require('bcrypt/promises');
const mysql=require('mysql2')
//Require internal dependencies
const config=require('../config')


let dbConfig={
    host:config.database.host,
    user:'myuser',
    database:config.database.database,
    password:config.database.password,
    port:config.database.port,
    dateStrings:true
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
    if (!data) {
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM ${table}`,(err,result)=>{
                if (err) {
                    return reject(err)
                }else{
                    return resolve(result)
                }
            })
        })    
    }else{
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
}

const getSale=(tableNumber,fecha)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT * FROM sales WHERE tableNumber='${tableNumber}' AND fecha='${fecha}'`,(err,result)=>{
            if (err) {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}


const getSales=(sinceDate,untilDate)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT id,tableNumber,fecha,mesero,total FROM sales WHERE fecha BETWEEN '${sinceDate}' AND '${untilDate}'`,(err,result)=>{
            if (err) {
                reject(err);
            }else{
                resolve(result);
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

const removeFromLastSaleInserted=(tableNumber,fecha)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`DELETE FROM lastSaleInserted WHERE tableNumber='${tableNumber}' AND fecha='${fecha}'`,(err,result)=>{
            if (err) {
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
};

const getPrice=(category,item)=>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT price, name FROM products WHERE category='${category}' AND item='${item}'`,(err,result)=>{
            if (err) {
                reject(err);
            } else{
                resolve(result)
            }
        })
    })
}

module.exports={
    get,
    getOpenTables,
    getSale,
    getSales,
    add,
    update,
    updateTable,
    updateTableNumber,
    remove,
    removeFromLastSaleInserted,
    getPrice
}