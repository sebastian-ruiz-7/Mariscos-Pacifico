//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import hooks
import { useGetOrderFromTable } from '@hooks/useGetOrderFromTable';
import { useGetImageName } from '@hooks/useGetImageName';
//Import styles
import './CurrentOrderContainer.css'
//Import Containers
import { RenderCurrentOrder } from '@components/RenderCurrentOrder/RenderCurrentOrder';
import { CategoryContainer } from '@containers/CategoryContainer/CategoryContainer';

const CurrentOrderContainer = () => {
    
    const {editingOrder,tableNumber,setOrder} = React.useContext(AppContext);
    

    

    React.useEffect(()=>{
        const fetchData=async()=>{
            const response=await useGetOrderFromTable(tableNumber)
            setOrder(response)
            
        }

        fetchData()


    },[])

  return (
    <>
        {!editingOrder ?   <RenderCurrentOrder/> : <CategoryContainer />}
        
    </>
  )
}

export {CurrentOrderContainer};