import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import hooks
import { useMakeBill } from '@hooks/useMakeBill'
//Import containers
import { BillTickerMaker } from '@containers/BillTickerMaker/BillTickerMaker'
//Import styles
import './MakeBill.css'

const MakeBillAlert = () => {

    const {tableNumber,setTableNumber,setEditingOrder,openModalAlert} = React.useContext(AppContext);


    const makeBill=async(event)=>{
        event.preventDefault()
        const response=await useMakeBill(tableNumber) 
        
        if (response.status=200) {
            window.open('/ticket','_blank')
            openModalAlert(false)
            setEditingOrder(false)
            setTableNumber(false)
            //location.href='/mesas-abiertas'
        }
    }

  return (
    <div className='make-bill-alert-container'>
        <p className='make-bill-alert__p'>¿Estás seguro que quieres <br /> hacer la cuenta de la mesa {tableNumber}?</p>


        <div className='make-bill-alerts-container'>
            <button onClick={()=>openModalAlert(false)} className='make-bill-alert__button make-bill-alert__button--cancel'>Cancelar</button>
            <button onClick={makeBill} className='make-bill-alert__button make-bill-alert__button--submit'>Hacer cuenta</button>
        </div>

        {/* {error && (
            <p className='make-bill-alert__p make-bill-alert__p--error'>{errorText}</p>
        )} */}

    </div>
  )
}

export {MakeBillAlert}