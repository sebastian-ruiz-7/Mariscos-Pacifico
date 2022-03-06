//Import dependencies
import React from 'react'
import { PendingProductCard } from '@components/PendingProductCard/PendingProductCard'

export const PendingProducts = ({category,products,tableNumber}) => {



    const renderPendingProducts=()=>{
        return Object.keys(products).map(element=><PendingProductCard tableNumber={tableNumber} category={category} products={products} element={element} key={`Render Product ${category} ${element}`}/>)}

  return (
    renderPendingProducts()
  )
}
