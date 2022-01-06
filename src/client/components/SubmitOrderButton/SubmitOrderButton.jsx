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
        //event.preventDefault()
        console.log(order)
        // order['cocteles']['mediano'] && openModal(true)
        // order['cocteles']['grande'] &&  openModal(true)
    }



    return (
        <button className='submit-order-button' onClick={submitOrder}>
            Enviar pedido
        </button>
    )
}

export {SubmitOrderButton}
