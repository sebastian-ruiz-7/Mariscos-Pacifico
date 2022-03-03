//Import dependencies
import React from 'react'
//Import components
import { PendingProducts } from '@components/PendingProducts/PendingProducts'
//Import styles
import './RenderPendingTable.css'

export const RenderPendingTable = ({tableInfo}) => {

    // console.log(Object.keys(tableInfo.order).map(key=>tableInfo.order[key]))
  return (
      <div className='pending-table-container'>
        <h1 className='pending-table__tableNumber'>Mesa {tableInfo.tableNumber}</h1>
    
        {/* {Object.keys(tableInfo.order).map(key=><PendingProduct products />)} */}
        
        {Object.keys(tableInfo.order).map(key=><PendingProducts key={`pending ${key}`} category={key} products={tableInfo.order[key]} />)}

      </div>
  )
}
