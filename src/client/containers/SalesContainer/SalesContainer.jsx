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
            console.log(sales)
        }

        fetchData()
    },[])

  return (
    <>
        {/* The styles of 'avoid-overflow-table' are the same of the 'ItemOrderContainer.css' */}
        

        {salesArray.length && (
            <>
                <div className='sales-legend-container'>
                    <p className='sales-legend__text'>Mesa</p>    <p className='sales-legend__text'>Total</p>  <p className='empty-space-for-button-below'></p>
                </div>
                
                <div className='avoid-overflow-sales'></div>

                {salesArray.map(sale=><SalesCard sale={sale} />)}
            </>
        )}
        
        
    </>
  )
}
