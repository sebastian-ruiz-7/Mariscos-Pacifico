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
        const total=getPrices(order)
        return total
    }

    const getPrices=async(order)=>{
        const categoryName=Object.entries(order)

        const pricesPromises=[] //This array stores the promises related with the price
        const products=[] //This array stores the correct data stucture of all products
        let index=0


        //The aim of this for loop is make the promises in order to get the price of one item in the order
        //The second objective is stucture the order
        for(const itemsList of categoryName){
            let category=itemsList[0]
            for(const j in itemsList[1]){
                let item
                if (itemIsCoctel(category)) {
                    item={category:category,item:j,cantidad:itemsList[1][j]['total'],price:index} //This line make the data structure that I want
                    let price=store.getPrice(category,j) //This line makes the query to the db to get the price [This is a promise]
                    pricesPromises.push(price) //I'll separate all the promises in this array in order to make this endpoint parallel rather than sequential
                    products.push(item) 
                    index++
                }else if (itemIsShrimp(category,j)) {
                    if (itemsList[1][j]['cabeza']) {
                        item={category:category,item:`${j} cabeza`,cantidad:itemsList[1][j]['cabeza'],price:index}
                        let price=store.getPrice(category,'cabeza')
                        pricesPromises.push(price)
                        products.push(item) 
                        index++
                    }
                    if (itemsList[1][j]['pelados']) {
                        item={category:category,item:`${j} pelados`,cantidad:itemsList[1][j]['pelados'],price:index}
                        let price=store.getPrice(category,'pelados')
                        pricesPromises.push(price)
                        products.push(item) 
                        index++
                    }
                } else {
                    item={category:category,item:j,cantidad:itemsList[1][j],price:index} //This line make the data structure that I want
                    let price=store.getPrice(category,j) 
                    pricesPromises.push(price) 
                    products.push(item) 
                    index++
                }
                 //The problem with the promises is that they need to be inside an array so they can be resolved otherwise they'll keep pendind
                //That's why I just store the index of the pricePromise 
            }
        }

        
        const prices=await Promise.all(pricesPromises) // Wait to all promises are resolved

        
        //console.log(prices);
        //console.log(products);

        

        //Now, I can change the index of the promises for the value of the item
        products.map(changePrice=>{
            let index=changePrice['price'];
            changePrice['price']=prices[index][0].price
        })

        console.log(products);
        

        let total=0
        products.map(item=>{
            total+=item['cantidad']*item['price']
        })
        return total;
    }

    const itemIsShrimp=(category,item)=>{
        if (category==='camarones' && (item==='diabla' || item==='mojoDeAjo' || item==='mantequilla' || item==='ajillo' || item==='natural')){
            return true
        }
    }

    const itemIsCoctel=(category)=>{
        if (category==='cocteles') {
            return true
        }
    }

    const addTable=async(req)=>{
        const dateTime=cleanDate()
        let mesa=req.body.tableNumber;
        if (typeof(mesa)==='string') {
            if (mesa.toLowerCase()==='llevar' ) {
                const time=cleanDate(true)
                mesa=`${mesa}-${time}`
            }
        }
        let order=req.body
        delete order['tableNumber']

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
        if (typeof(newTableNumber)==='string') {
            if (newTableNumber.toLowerCase()==='llevar') {
                const time=cleanDate(true)
                newTableNumber=`${newTableNumber}-${time}`
            }
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

    // const cleanOrder=(order)=>{
    //     const properties=Object.getOwnPropertyNames(order)
    //     for(let i=0; i<properties.length;i++){
    //         if (Object.getOwnPropertyNames(order[properties[i]]).length==0) {
    //             delete order[properties[i]]
    //         }
    //     }
    //     delete order.table;
    //     return order
    // }

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