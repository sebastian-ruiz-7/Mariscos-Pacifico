import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import hooks
import { useDeleteTable } from '@hooks/useDeleteTable'
//Import styles
import './EmptyOrderAlert.css'

const EmptyOrderAlert = () => {

    const {tableNumber,openModalAlert} = React.useContext(AppContext);

    const deleteEmptyOrder=async()=>{
        const response=await useDeleteTable(tableNumber)
        if (response.status===200) {
            location.href='/abrir-mesa'
        }
    }

  return (
    <div className='empty-order-alert-container'>
        <p className='empty-order-alert__p'>Las órdenes de mesas vacías se eliminan automáticamente. <br /> Deseas continuar y eliminar la orden de la mesa {tableNumber}</p>


        <div className='empty-order-alerts-container'>
            <button onClick={()=>openModalAlert(false)} className='empty-order-alert__button empty-order-alert__button--cancel'>Cancelar</button>
            <button onClick={deleteEmptyOrder} className='empty-order-alert__button empty-order-alert__button--submit'>Eliminar orden</button>
        </div>

        {/* {error && (
            <p className='empty-order-alert__p empty-order-alert__p--error'>{errorText}</p>
        )} */}
    </div>
  )
}

export {EmptyOrderAlert}