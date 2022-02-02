//Require internal dependencies
const menu=require('./menu')

module.exports=(store)=>{
    
    const getTable=async(id)=>{
        const table=await store.get('openTables',{tableNumber:id})
        return table
    }

    const getOpenTables=async()=>{
        const tables=await store.getOpenTables()
        const arrayTables=[]
        for (let i = 0; i < tables.length; i++) {
            arrayTables.push(tables[i].tableNumber)
        }
        return arrayTables
    }

    const payTable=async(id)=>{
        const table=await store.get('openTables',{tableNumber:id})
        let order={... table[0].order}
        const total=getPrice(order)
        return total
    }

    const getPrice=(order)=>{
        const categoryName=Object.getOwnPropertyNames(order)
        let total=0
        //This first loop will iterate over the category names and will get the item inside the category
        for (let i = 0; i < categoryName.length; i++) {
            const items=Object.getOwnPropertyNames(order[categoryName[i]])
            //This second loop will iterate over the items in order to get the price of the item and the total amount
            for (let j = 0; j < items.length; j++) {
                if (menu[categoryName[i]][items[j]]) {
                    total+=menu[categoryName[i]][items[j]].price*order[categoryName[i]][items[j]]
                    console.log(menu[categoryName[i]][items[j]].name)
                    console.log(total)
                }
            }
        }
        return total;
    }

    const addTable=async(req)=>{
        const dateTime=cleanDate()
        let mesa=req.body.table;
        if (mesa.toLowerCase()==='llevar' ) {
            const time=cleanDate(true)
            mesa=`${mesa}-${time}`
        }
        let order=cleanOrder(req.body)
        const mesero=req.user.id
        order=JSON.stringify(order)
        const abirMesa=await store.add('openTables',{tableNumber:mesa,fecha:dateTime,mesero:mesero,order:order})
        return 'Procedimiento correcto'
    }

    const updateTable=async(reqBody)=>{
        const newOrder=JSON.stringify(reqBody.order)
        const changeOrder=await store.updateTable('openTables',{tableNumber:reqBody.tableNumber,order:newOrder})
        return 'Procedimiento correcto'
    }

    const updateTableNumber=async(reqBody)=>{
        let newTableNumber=reqBody.newTableNumber
        if (newTableNumber.toLowerCase()==='llevar') {
            const time=cleanDate(true)
            newTableNumber=`${newTableNumber}-${time}`
        }
        const changeOrder=await store.updateTableNumber('openTables',{tableNumber:newTableNumber},reqBody.oldTableNumber)
        return 'Procedimiento correcto'
    }

    const deleteTable=async(deleteTable)=>{
        const changeOrder=await store.remove('openTables',{tableNumber:deleteTable})
        return 'Procedimiento correcto'
    }

    const cleanDate=(justTime)=>{
        let date=new Date();
        const años=date.getFullYear()
        const mes=date.getMonth()+1;
        const dia=date.getDate()
        const horas=date.getHours()
        const minutos=date.getMinutes()
        const segundos=date.getSeconds()
        date=`${años}-${mes}-${dia} ${horas}:${minutos}:${segundos}`
        if (justTime===true) {
            date=`${horas}:${minutos}:${segundos}`
        }
        return date;
    }

    const cleanOrder=(order)=>{
        const properties=Object.getOwnPropertyNames(order)
        for(let i=0; i<properties.length;i++){
            if (Object.getOwnPropertyNames(order[properties[i]]).length==0) {
                delete order[properties[i]]
            }
        }
        delete order.table;
        return order
    }

    return{
        getTable,
        getOpenTables,
        payTable,
        addTable,
        updateTable,
        updateTableNumber,
        deleteTable
    }
}