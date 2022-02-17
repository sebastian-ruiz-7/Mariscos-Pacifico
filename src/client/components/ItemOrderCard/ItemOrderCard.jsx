import React from 'react'

const ItemOrderCard = ({ItemName,ItemCount}) => {
  return (
      // The styles of this className are the same of the 'ItemOrder.css'
      <div className='item-order'>
        <p className='item-order__name'>{ItemName}</p>
        <p className='order-handler__p'>{ItemCount}</p>
      </div>
  )
}

export {ItemOrderCard}