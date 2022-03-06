//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import styles
import './EditNumberTableLogic.css'
import { useChangeTableNumber } from '../../hooks/useChangeTableNumber';

const EditNumberTableLogic = () => {

    const {tableNumber,setTableNumber,openModalAlert} = React.useContext(AppContext);

    const [error,setError]=React.useState(false)
    const [errorText,setErrorText]=React.useState(`Se debe asignar un número antes de continuar`);

    let newTableNumber

    const changeInput=(event)=>{
        newTableNumber=event.target.value
    }

    const changeTableNumber=async()=>{
        if (!newTableNumber) {
            return setError(true)
        }
        const response=await useChangeTableNumber(tableNumber,newTableNumber)
        if (response.error) {
            let messageError=response.error.split(' ')
            messageError=`${messageError[0]} ${messageError[1]}`;
            if (messageError==='Duplicate entry') {
                setError(true)
                setErrorText('Ya existe una mesa con este número')
            }
        }
        if (response.status===200) {
            setTableNumber(newTableNumber)
            openModalAlert(false)
        }
    }

  return (
    <div className='edit-number-table-logic-container'>
        <p className='edit-number-table-logic__p'>¿Estás seguro que quieres <br /> cambiar el número de la mesa {tableNumber}?</p>

        <input onChange={changeInput} className='edit-number-table-logic__input' type="text" />

        <div className='edit-number-table-buttons-container'>
            <button onClick={()=>openModalAlert(false)} className='edit-number-table-logic__button edit-number-table-logic__button--cancel'>Cancelar</button>
            <button onClick={changeTableNumber} className='edit-number-table-logic__button edit-number-table-logic__button--submit'>Cambiar número</button>
        </div>

        {error && (
            <p className='edit-number-table-logic__p edit-number-table-logic__p--error'>{errorText}</p>
        )}
    </div>
  )
}

export {EditNumberTableLogic}
