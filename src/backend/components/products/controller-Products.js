module.exports=(store)=>{
    const getCategoryPrices=async(category)=>{
        let itemsPrices=await store.get('products',{category})
        return itemsPrices
    }


    const updatePriceProduct=async(reqBody)=>{
        const updatedPrice=await store.update('products',{id:reqBody.id,price:reqBody.price})
        return 'Procedimiento Correcto'
    }

    return{
        getCategoryPrices,
        updatePriceProduct
    }
}