//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext';
//Import styles
import '@components/SubmitOrderButton/SubmitOrderButton.css'
import { useSendOrder } from '@hooks/useSendOrder';

const SubmitOrderButton = () => {

    const {order} = React.useContext(AppContext);

    const submitOrder=async (event)=>{
        event.preventDefault()
        if (Object.getOwnPropertyNames(order).length===1) {
            console.log('no has ordenado nada');
        }else{
            const response=await useSendOrder(order)
            if (response.status===201) {
                location.href='/abrir-mesa'
            }
        }
    }



    return (
        <button className='submit-order-button' onClick={submitOrder}>
            Enviar pedido
        </button>
    )
}

export {SubmitOrderButton}
