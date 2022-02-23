module.exports=(store)=>{
    const getLastSale=async()=>{
        let lastSale=await store.get('lastSaleInserted')
        lastSale=lastSale[0]
        lastSale=await store.getSale(lastSale.tableNumber,lastSale.fecha)
        return lastSale
    }

    // const getSales=async(untilDate,sinceDate)=>{
    //     const tables=await store.getSales(untilDate,sinceDate)
    //     const arrayTables=[]
    //     for (let i = 0; i < tables.length; i++) {
    //         arrayTables.push(tables[i].tableNumber)
    //     }
    //     return arrayTables
    // }

    const addSale=async(body)=>{
        const response=await store.add('sales',body)
        return response
    }

    return{
        getLastSale,
        addSale
    }
}