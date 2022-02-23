//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import hooks
import { useGetSale } from '@hooks/useGetSale'

const BillTickerMaker = (order) => {

  React.useEffect(()=>{
      if (!localStorage.getItem('sessionJWT')) {
        location.href='/'
    }else{
        const fetchData=async()=>{
            const sale=await useGetSale()
            console.log(sale)
        }
        fetchData()
    }  
  },[])
    
  return (
    // order.products.map(item=>{
        
    // })    
    <h1>Hola este es el tickect</h1>
  )
}

export {BillTickerMaker}