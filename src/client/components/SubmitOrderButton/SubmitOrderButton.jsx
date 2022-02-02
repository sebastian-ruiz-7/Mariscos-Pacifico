//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext';
//Import styles
import '@components/SubmitOrderButton/SubmitOrderButton.css'

const SubmitOrderButton = () => {

    const {order} = React.useContext(AppContext);

    const submitOrder=(event)=>{
        event.preventDefault()
        if (Object.getOwnPropertyNames(order).length===1) {
            console.log('no has ordenado nada');
        }else{
            console.log(order)
        }
    }



    return (
        <button className='submit-order-button' onClick={submitOrder}>
            Enviar pedido
        </button>
    )
}

export {SubmitOrderButton}
