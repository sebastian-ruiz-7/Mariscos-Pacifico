//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import hooks
import { useGetImageName } from '@hooks/useGetImageName';
//Import containers
import { Modal } from '@containers/Modal/Modal';
import { EditNumberTableLogic } from '@containers/EditNumberTableLogic/EditNumberTableLogic';
import { CurrentOrderCategoryContainer } from '@containers/CurrentOrderCategoryContainer/CurrentOrderCategoryContainer';


const RenderCurrentOrder = () => {

    const {order,tableNumber,modal,openModal,setEditingOrder} = React.useContext(AppContext);

    const goBackToSelectTable=()=>{
        location.href='/mesas-abiertas'
    }

    const editTableNumber=()=>{
        openModal(true)
    }

    const editOrder=(event)=>{
        event.preventDefault()
        setEditingOrder(true)
    }

    //Importing assets by hook
    const previous=useGetImageName('previous');
    const edit=useGetImageName('setting');


  return (
    <>
        <div className='current-order-container'>
            <img onClick={goBackToSelectTable} className='current-order-container__img' src={previous} alt="" />
            <p className='current-order-container__p'>Orden mesa {tableNumber}</p>
            <img onClick={editTableNumber} className='current-order-container__img' src={edit} alt="" />
        </div>

        {modal && <Modal> 
            < EditNumberTableLogic />
        </Modal>}

        {/* This div is use to avoid the top overflow, the css file that has the styles of this className is in 'CategoryCard.css */}
        <div className='avoid-overflow-table'></div> 

        <button onClick={editOrder} className='edit-order-button'>Editar Orden</button>

        {Object.getOwnPropertyNames(order).length>0 && (
            Object.keys(order).map(key=>
                <CurrentOrderCategoryContainer items={order[key]} Category={key} key={`Current Order ${key}`} />
            )
        )}
    </>  
  )
}

export {RenderCurrentOrder}