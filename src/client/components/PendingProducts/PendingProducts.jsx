//Import dependencies
import React from 'react'
import { PendingProductCard } from '@components/PendingProductCard/PendingProductCard'

export const PendingProducts = ({category,products}) => {



    const renderPendingProducts=()=>{
        return Object.keys(products).map(element=><PendingProductCard category={category} products={products} element={element} key={`Render Product ${category} ${element}`}/>)}

  return (
    renderPendingProducts()
  )
}
