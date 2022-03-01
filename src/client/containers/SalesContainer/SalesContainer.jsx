//Import dependencies
import React from 'react'
//Import hooks
import { useGetSales } from '@hooks/useGetSales'
//Import components
import { SalesCard } from '@components/SalesCard/SalesCard'
//Import styles
import './SalesContainer.css'

export const SalesContainer = () => {

    const [salesArray,setSalesArray]=React.useState([])

    React.useEffect(()=>{
        async function fetchData() {
            const sales=await useGetSales()
            setSalesArray(sales.body)
            // console.log(sales.body)
        }

        fetchData()
    },[])

    const getTotalAmountOfSales=()=>{
        console.log(salesArray)
        const totalAmount=
        console.log(totalAmount)
    }

  return (
    <>  

        {salesArray.length===0 && <h1 className='no-sales-text'>No hay ventas registradas</h1>}

        {salesArray.length>0 && (
            <>
                <div className='sales-legend-container'>
                    <p className='sales-legend__text'>Mesa</p>    <p className='sales-legend__text'>Total</p>  <p className='empty-space-for-button-below'></p>
                </div>
                
                <div className='avoid-overflow-sales'></div>

                {salesArray.map(sale=><SalesCard key={`Sale ${sale.id}`} sale={sale} />)}

                <h1 className='total-sales-amount'>Total: {salesArray.reduce((sales,item)=>sales+parseInt(item.total),0.00).toFixed(2)}</h1>
            </>
        )}
        
        
    </>
  )
}
