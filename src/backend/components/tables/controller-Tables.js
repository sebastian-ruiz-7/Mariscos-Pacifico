//Require dependencies
const sales=require('../sales/index-Sales')
const { socket } =require('../../socket')

module.exports=(store)=>{
    
    const getTable=async(id)=>{
        const table=await store.get('openTables',{tableNumber:id})
        //console.log(table[0].fecha)
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

    const getPendings=async()=>{
        const pendings=await store.get('openTables')

        socket.io.emit('newPendings',pendings)
        return pendings
    }

    const pendingsHandler=async(deliveredPendings)=>{
        console.log(deliveredPendings)
        const pendings=await store.get('openTables')

        let tablesWithDelivered=deliveredPendings.map(table=>table.tableNumber)

        tablesWithDelivered=pendings.filter(table=>{
            if (tablesWithDelivered.includes(table.tableNumber)) {
                return true
            } else{
                return false
            }
        })

        // let tableInfo=deliveredPendings[1]
        //console.log(deliveredPendings)
        deliveredPendings.forEach(tableInfo=>{
            const index=tablesWithDelivered.findIndex(table=>table.tableNumber===tableInfo.tableNumber)

            for (const category in tableInfo.order) {

                if (category==='cocteles') {
                    for (const size in tableInfo.order[category]) {
                        for (const indexCoctel of tableInfo.order[category][size]) {
                            tablesWithDelivered[index].order[category][size].coctelesSequence[indexCoctel].delivered=true
                        }
                    }
                }
                else if (category==='camarones' && (tableInfo.order.camarones['diabla'] || tableInfo.order.camarones['mojoDeAjo'] || tableInfo.order.camarones['ajillo'] || tableInfo.order.camarones['natural'] || tableInfo.order.camarones['mantequilla'])) {
                    for (const flavor in tableInfo.order[category]) {
                        for (const typeOfShrimp in tableInfo.order[category][flavor]) {
                            tablesWithDelivered[index].order[category][flavor][typeOfShrimp].delivered=true
                            tablesWithDelivered[index].order[category][flavor][typeOfShrimp].notYetDelivered=0
                        }
                    }    
                }else{
                    for (const item in tableInfo.order[category]) {
                        tablesWithDelivered[index].order[category][item].delivered=true
                        tablesWithDelivered[index].order[category][item].notYetDelivered=0
                    }
                }
            }
    
        })
        
        // const updateTable=async(reqBody)=>{
        //     const newOrder=JSON.stringify(reqBody.order)
        //     const changeOrder=await store.updateTable('openTables',{tableNumber:reqBody.tableNumber,order:newOrder})
        //     return 'Procedimiento correcto'
        // }

        const updateTablePromises=[]

        tablesWithDelivered.forEach(tableInfo=>{
            const newOrder=JSON.stringify(tableInfo.order)
            updateTablePromises.push(store.updateTable('openTables',{tableNumber:tableInfo.tableNumber,order:newOrder}))
        })

        const updateTable=await Promise.all(updateTablePromises)

        const newOrders=await getPendings()
        
        return newOrders
    }

    const payTable=async(id)=>{
        const table=await store.get('openTables',{tableNumber:id})
        
        let order={... table[0].order}
        //console.log(order)
        const bill=await getPrices(order)


        const bodySale={
            tableNumber:id,
            products:JSON.stringify(bill.products),
            fecha:table[0].fecha,
            mesero:table[0].mesero,
            total:bill.total
        }
        const parallelPromises=[]
        let lastSaleInserted=await store.get('lastSaleInserted')
        lastSaleInserted=lastSaleInserted[0]
        parallelPromises.push(sales.addSale(bodySale))
        parallelPromises.push(store.remove('openTables',{tableNumber:id}))
        parallelPromises.push(store.removeFromLastSaleInserted(lastSaleInserted.tableNumber,lastSaleInserted.fecha))
        parallelPromises.push(store.add('lastSaleInserted',{tableNumber:bodySale.tableNumber,fecha:bodySale.fecha}))
        const parallelPromisesResult=await Promise.all(parallelPromises)

        handleSockets()


        return 'Procedimiento correcto'
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
                    const numberOfCoctelsWithOnlyOctopus=coctelHasOnlyOctopus(itemsList[1][j].coctelesSequence)
                    if (numberOfCoctelsWithOnlyOctopus>0) {

                        if (numberOfCoctelsWithOnlyOctopus==itemsList[1][j]['total']) {
                            item={category:category,item:j,cantidad:numberOfCoctelsWithOnlyOctopus,price:index,onlyOctopus:true} //This line make the data structure that I want
                            let price=store.getPrice(category,j) //This line makes the query to the db to get the price [This is a promise]
                            pricesPromises.push(price) //I'll separate all the promises in this array in order to make this endpoint parallel rather than sequential
                            products.push(item) 
                            index++
                        } else{
                            item={category:category,item:j,cantidad:itemsList[1][j]['total']-numberOfCoctelsWithOnlyOctopus,price:index} //This line make the data structure that I want
                            let price=store.getPrice(category,j) //This line makes the query to the db to get the price [This is a promise]
                            pricesPromises.push(price) //I'll separate all the promises in this array in order to make this endpoint parallel rather than sequential
                            products.push(item) 
                            index++
    
                            item={category:category,item:j,cantidad:numberOfCoctelsWithOnlyOctopus,price:index,onlyOctopus:true} //This line make the data structure that I want
                            price=store.getPrice(category,j) //This line makes the query to the db to get the price [This is a promise]
                            pricesPromises.push(price) //I'll separate all the promises in this array in order to make this endpoint parallel rather than sequential
                            products.push(item) 
                            index++
                        }
                    }else{
                        item={category:category,item:j,cantidad:itemsList[1][j]['total'],price:index} //This line make the data structure that I want
                        let price=store.getPrice(category,j) //This line makes the query to the db to get the price [This is a promise]
                        pricesPromises.push(price) //I'll separate all the promises in this array in order to make this endpoint parallel rather than sequential
                        products.push(item) 
                        index++
                    }
                }else if (itemIsShrimp(category,j)) {
                    if (itemsList[1][j]['cabeza']) {
                        item={category:category,item:j,cantidad:itemsList[1][j]['cabeza']['total'],price:index}
                        //item={category:category,item:`${j} cabeza`,cantidad:itemsList[1][j]['cabeza'],price:index}
                        let price=store.getPrice(category,'cabeza')
                        pricesPromises.push(price)
                        products.push(item) 
                        index++
                    }
                    if (itemsList[1][j]['pelados']) {
                        item={category:category,item:j,cantidad:itemsList[1][j]['pelados']['total'],price:index}
                        //item={category:category,item:`${j} pelados`,cantidad:itemsList[1][j]['pelados'],price:index}
                        let price=store.getPrice(category,'pelados')
                        pricesPromises.push(price)
                        products.push(item) 
                        index++
                    }
                } else {
                    item={category:category,item:j,cantidad:itemsList[1][j]['total'],price:index} //This line make the data structure that I want
                    let price=store.getPrice(category,j) 
                    pricesPromises.push(price) 
                    products.push(item) 
                    index++
                }
                 //The problem with the promises is that they need to be inside an array so they can be resolved otherwise they'll keep pendind
                //That's why I just store the index of the pricePromise 
            }
        }
        pricesPromises.push(store.getPrice('cocteles','pulpoExtra'))

        const prices=await Promise.all(pricesPromises) // Wait to all promises are resolved

        
        //console.log(prices);
        //console.log(products);


        //Now, I can change the index of the promises for the value of the item
        products.map(changePriceAndName=>{
            let index=changePriceAndName['price'];
            changePriceAndName['price']=prices[index][0].price
            if (changePriceAndName.onlyOctopus) {
                changePriceAndName['name']=prices[index][0].name
                changePriceAndName['price']=(parseInt(changePriceAndName['price']) + parseInt(prices[prices.length-1][0].price)).toFixed(2)
                changePriceAndName['name']=`${changePriceAndName['name']} ${prices[prices.length-1][0].name}`
            }else if (itemIsShrimp(changePriceAndName.category,changePriceAndName.item)) {
                let kindOfShrimp=prices[index][0].name
                kindOfShrimp=kindOfShrimp.split(' ')
                const itemName=returnItemShrimpCorrectName(changePriceAndName.item)
                kindOfShrimp.splice(1,0,itemName)
                kindOfShrimp=kindOfShrimp.join(' ')
                changePriceAndName['name']=kindOfShrimp
            }else{
                changePriceAndName['name']=prices[index][0].name
            }
            //console.log(changePriceAndName)
            changePriceAndName['total']=changePriceAndName.cantidad*changePriceAndName.price
        })

        //console.log(products);
        

        let total=0
        products.map(item=>{
            total+=item['total']
        })
        return {products,total};
        
    }

    const returnItemShrimpCorrectName=(itemName)=>{

        const list={
            diabla:'Diabla',
            mojoDeAjo:'Mojo de Ajo',
            mantequilla:'Mantequilla',
            ajillo:'Ajillo',
            natural:'Natural'
        }

        return list[itemName]
    }

    const coctelHasOnlyOctopus=(coctelesSequence)=>{
        //return coctelesSequence
        return coctelesSequence.reduce((totalCoctelsOnlyWithOctopus,item)=>{
            // console.log(totalCoctelsOnlyWithOctopus)
            // console.log(item.deQue)
            if (item.deQue.length===1 && item.deQue[0]==='pulpo') {
                return totalCoctelsOnlyWithOctopus +1
            }
            return totalCoctelsOnlyWithOctopus
        },0)
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
        const dateTime=req.body.fecha
        const mesa=req.body.tableNumber;
        let order=req.body
        delete order['tableNumber']
        delete order['fecha']
        const mesero=req.user.id
        order=JSON.stringify(order)
        const abirMesa=await store.add('openTables',{tableNumber:mesa,fecha:dateTime,mesero:mesero,order:order})

        handleSockets()
                
        return 'Procedimiento correcto'
    }

    const getAvilableTables=(currentTables)=>{
        const tables=['1','2','3','4','5','6','7']; //Due to the types in JS, the includes method verifies the value and the type. That's why I'm using this array
        const openTables=[] //In this array I'll put all the available tables
    
        for (let index = 0; index < tables.length; index++) {
            if (!currentTables.includes(tables[index])) {
                openTables.push(tables[index])
            }
        }

        //The 'Llevar' table must always be available
        openTables.push('Llevar')

        return openTables
    }

    const updateTable=async(reqBody)=>{
        const newOrder=JSON.stringify(reqBody.order)
        const changeOrder=await store.updateTable('openTables',{tableNumber:reqBody.tableNumber,order:newOrder})

        handleSockets()

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

        handleSockets()
        
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

    const handleSockets=async()=>{

        const promises=[]

        promises.push(getPendings())
        promises.push(getOpenTables())

        const responses=await Promise.all(promises)
        const availableTables=getAvilableTables(responses[1])

        socket.io.emit('newPendings',responses[0])
        socket.io.emit('updateOpenTables',responses[1])
        socket.io.emit('updateAvailableTables',availableTables)
    }


    return{
        getTable,
        getOpenTables,
        getPendings,
        pendingsHandler,
        payTable,
        addTable,
        updateTable,
        updateTableNumber,
        deleteTable
    }
}