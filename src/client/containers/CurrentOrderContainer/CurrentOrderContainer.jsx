//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import hooks
import { useGetOrderFromTable } from '@hooks/useGetOrderFromTable';
import { useUpdateOrder } from '@hooks/useUpdateOrder';
//Import styles
import './CurrentOrderContainer.css'
//Import Containers
import { RenderCurrentOrder } from '@components/RenderCurrentOrder/RenderCurrentOrder';
import { CategoryContainer } from '@containers/CategoryContainer/CategoryContainer';
import { Modal } from '@containers/Modal/Modal'
import { CoctelesLogic } from '@containers/CoctelesLogic/CoctelesLogic'
import { ModalAlert } from '@containers/ModalAlert/ModalAlert';
import { MakeBillAlert } from '@containers/MakeBillAlert/MakeBillAlert';

const CurrentOrderContainer = () => {
    
    const {modal,modalAlert,openModalAlert,editingOrder,tableNumber,order,setOrder} = React.useContext(AppContext);
    
    const [error,setError]=React.useState(false)

    const updateOrder=async(event)=>{
      event.preventDefault()
      let currentOrderInDataBase=await useGetOrderFromTable(tableNumber)
      let compareOrder={...order}
      currentOrderInDataBase=JSON.stringify(currentOrderInDataBase)
      compareOrder=JSON.stringify(compareOrder)
      if (currentOrderInDataBase==compareOrder) {
        setError(true)
      }

      const response=await useUpdateOrder(tableNumber,order)
      if (response.status===200) {
        location.href='/mesas-abiertas'
      }
    }

    const makeBill=async(event)=>{
      event.preventDefault()
      openModalAlert('cuenta')
    }
    

    React.useEffect(()=>{
        const fetchData=async()=>{
            const response=await useGetOrderFromTable(tableNumber)
            setOrder(response)
            
        }

        fetchData()


    },[])

  return (
    <>
        {!editingOrder ?(
          <>
          <RenderCurrentOrder/> 
          {/* The styles of the className 'submit-order-button' are the same of the 'SubmitOrderButton' */}
          <button onClick={makeBill} className='submit-order-button'>Hacer Cuenta</button>
          </>
        )   
        
          :
          
        (
            <>
              <CategoryContainer />
              {/* The styles of the className 'error-message' are the Same of the 'CoctelesLogic.css'*/}
              {error && <p className='error-message'>No se ha actualizado la orden</p>}
              {/* The styles of the className 'submit-order-button' are the same of the 'SubmitOrderButton' */}
              <button onClick={updateOrder} className='submit-order-button'>Actualizar orden</button>
            </>
        )}

        {modal && <Modal> 
            < CoctelesLogic />
        </Modal>}

        
        {modalAlert==='cuenta' && <ModalAlert> 
            < MakeBillAlert />
        </ModalAlert>}

        <div className='EvitarOverflow'></div> 
    </>
  )
}

export {CurrentOrderContainer};