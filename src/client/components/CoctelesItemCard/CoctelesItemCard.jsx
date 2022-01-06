//Import dependencies
import React from 'react'
//Import styles
import '@components/CoctelesItemCard/CoctelesItemCard.css'

const CoctelesItemCard = ({coctelItem,coctelItemDescription,onClick}) => {
    return (
        <div className='cocteles-logic__div'>
                    <input type="checkbox" name='coctelesLogic' id={coctelItem} onClick={onClick}/>
                    <label className='cocteles-logic__label' htmlFor={coctelItem}>{coctelItemDescription}</label>
        </div>
    )
}

export {CoctelesItemCard}
