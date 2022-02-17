import React from 'react'
import { ItemOrderCard } from '@components/ItemOrderCard/ItemOrderCard';

const CurrentOrderCategoryContainer = ({Category,items}) => {

    const renderItems=()=>{
        console.log(items)
        const itemsArray=Object.keys(items);

        return(
            itemsArray.map(key=>
                <ItemOrderCard ItemName={key} ItemCount={items[key]} key={`Item Order Card ${key}`} />
            )

        )
    }

  return (
        // The styles of this className are the same of the 'ItemOrderContainer.css'
      <div className='item-order-container'>
        <p className='item-order-container__name'>{Category}</p>
        {renderItems()}
      </div>


  )
}

export {CurrentOrderCategoryContainer}