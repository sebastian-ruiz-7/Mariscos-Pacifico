//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext';
//Import styles
import '@components/SubmitOrderButton/SubmitOrderButton.css'
import { useSendOrder } from '@hooks/useSendOrder';

const SubmitOrderButton = () => {

    const {tableNumber,order} = React.useContext(AppContext);

    const [error,setError]=React.useState(false)

    const submitOrder=async (event)=>{
        event.preventDefault()
        if (Object.getOwnPropertyNames(order).length===0) {
            setError(true)
        }else{
            const newOrder={...order}
            newOrder['tableNumber']=tableNumber;
            const response=await useSendOrder(newOrder)
            if (response.status===201) {
                location.href='/abrir-mesa'
            }
        }
    }



    return (
        <>
            {/* The styles of this className are the Same of the 'CoctelesLogic.css'*/}
            {error && <p className='error-message'>No has ordenado nada</p>}

            <button className='submit-order-button' onClick={submitOrder}>
                Enviar pedido
            </button>

        </>
    )
}

export {SubmitOrderButton}
