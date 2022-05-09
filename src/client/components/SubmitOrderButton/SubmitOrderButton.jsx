//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext';
//Import hooks
import { useToggleCategory } from '@hooks/useToggleCategory'
import { useSendOrder } from '@hooks/useSendOrder';
//Import styles
import '@components/SubmitOrderButton/SubmitOrderButton.css'

const SubmitOrderButton = () => {

    const {tableNumber,setTableNumber,order,setOrder,setToggleCategory} = React.useContext(AppContext);

    const [error,setError]=React.useState(false)

    const submitOrder=async (event)=>{
        event.preventDefault()
        if (Object.getOwnPropertyNames(order).length===0) {
            setError(true)
        }else{
            const newOrder={...order}
            newOrder['tableNumber']=tableNumber;
            newOrder['fecha']=cleanDate()
            
            if (typeof(newOrder['tableNumber'])==='string') {
                if (newOrder['tableNumber'].toLowerCase()==='llevar' ) {
                    const time=cleanDate(true)
                    newOrder['tableNumber']=`${newOrder['tableNumber']}-${time}`
                }
            }


            const response=await useSendOrder(newOrder)
            if (response.status===201) {
                setTableNumber(false)
                setOrder(new Object())
                setToggleCategory(new useToggleCategory())
                //location.href='/abrir-mesa'
            }
        }
    }


    const cleanDate=(justTime)=>{
        let date=new Date();
        const años=date.getFullYear()
        const mes=date.getMonth()+1;
        const dia=date.getDate()
        const horas=date.getHours()
        const minutos=date.getMinutes()
        const segundos=date.getSeconds()
        date=`${años}-${mes}-${dia} ${horas}:${minutos}:${segundos}`
        if (justTime===true) {
            date=`${horas}:${minutos}:${segundos}`
        }
        return date;
    }


    return (
        <>
            {/* The styles of this className are the Same of the 'CoctelesLogic.css'*/}
            {error && <p className='error-message'>No haz ordenado nada</p>}

            <button className='submit-order-button' onClick={submitOrder}>
                Enviar pedido
            </button>

        </>
    )
}

export {SubmitOrderButton}
