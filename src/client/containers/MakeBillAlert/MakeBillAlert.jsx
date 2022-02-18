import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import hooks
import { useMakeBill } from '@hooks/useMakeBill'
//Import styles
import './MakeBill.css'

const MakeBillAlert = () => {

    const {tableNumber,openModalAlert} = React.useContext(AppContext);

    const makeBill=async(event)=>{
        event.preventDefault()
        const bill=await useMakeBill(tableNumber)        
        console.log(bill)
    }

  return (
    <div className='make-bill-alert-container'>
        <p className='make-bill-alert__p'>¿Estás seguro que quieres <br /> hacer la cuenta de la mesa {tableNumber}?</p>


        <div className='make-bill-alertns-container'>
            <button onClick={()=>openModalAlert(false)} className='make-bill-alert__button make-bill-alert__button--cancel'>Cancelar</button>
            <button onClick={makeBill} className='make-bill-alert__button make-bill-alert__button--submit'>Cambiar número</button>
        </div>

        {/* {error && (
            <p className='make-bill-alert__p make-bill-alert__p--error'>{errorText}</p>
        )} */}
    </div>
  )
}

export {MakeBillAlert}