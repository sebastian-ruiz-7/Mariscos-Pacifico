//Import dependencies
import React from 'react'
//Import styles
import '@components/ItemOrder/ItemOrder.css'
//Import assets
import negative from '@assets/negative.png';
import plus from '@assets/plus.png';
const ItemOrder = ({itemName}) => {
    return (
        <div className='item-order'>
            <p className='item-order__name'>{itemName}</p>

            <div className='order-handler'>
                <img className='order-handler__icon' src={negative} alt="" />
                <p className='order-handler__p'>0</p>
                <img className='order-handler__icon' src={plus} alt="" />
            </div>
        </div>
    )
}

export {ItemOrder}
