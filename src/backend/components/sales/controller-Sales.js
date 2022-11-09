module.exports=(store)=>{
    const getLastSale=async()=>{
        let lastSale=await store.get('lastSaleInserted')
        lastSale=lastSale[0]
        lastSale=await store.getSale(lastSale.tableNumber,lastSale.fecha)
        return lastSale
    }

    const getSale=async(id)=>{
        const response=await store.get('sales',{id})
        return response
    }

    const getSalesOfToday=async(date)=>{
        let today;
        if (date) {
            today=date
        }else{
            today=formatDate()
        }
        // const today='2022-02-24'
        const endToday=`${today} 23:59:59`
        const sales=await store.getSales(today,endToday);
        return sales
    }

    const formatDate=()=>{
        let today=new Date().toLocaleDateString()
        today=today.split('/')
        const month=today[0]
        today[0]=today[1]
        today[1]=month
        today=today.reverse()
        today=today.join('-')
        return today
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
        getSale,
        getSalesOfToday,
        addSale
    }
}