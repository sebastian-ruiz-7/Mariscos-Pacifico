//Import dependencies
import React from 'react'
//Import hooks
import { useGetImageName } from '@hooks/useGetImageName'
//Import Context
import { AppContext } from '@context/AppContext'
//Import styles
import './PendingProductCard.css'

export const PendingProductCard = ({category,element,products,tableNumber}) => {

    const {deliveredOrder,setDeliveredOrder} = React.useContext(AppContext);

    const handleDeliveredProduct=(delivered,coctelSizeOrTypeOfShrimp,coctelIndex)=>{
        if (delivered) {
            addDeliveredProduct(coctelSizeOrTypeOfShrimp,coctelIndex)
        }else{
            removeDeliveredProduct(coctelSizeOrTypeOfShrimp,coctelIndex)
        }
    }

    const addDeliveredProduct=(coctelSizeOrTypeOfShrimp,coctelIndex)=>{

        let newDeliveredOrder=[...deliveredOrder]
        
        let currentTables=newDeliveredOrder.map(table=>table.tableNumber)

        if (!currentTables.includes(tableNumber)) {
            newDeliveredOrder.push({tableNumber,order:{}})
            currentTables.push(tableNumber)
        }
        const tableIndex=currentTables.findIndex(table=>table===tableNumber)

        if (!newDeliveredOrder[tableIndex].order[category]) {
            newDeliveredOrder[tableIndex].order[category]={}
        }

        if (category==='cocteles') {
            
            if (!newDeliveredOrder[tableIndex].order[category][coctelSizeOrTypeOfShrimp]) {
                newDeliveredOrder[tableIndex].order[category][coctelSizeOrTypeOfShrimp]=[]
            }

            newDeliveredOrder[tableIndex].order[category][coctelSizeOrTypeOfShrimp].push(coctelIndex)

        }else if (category==='camarones') {
            if (!newDeliveredOrder[tableIndex].order[category][element]) {
                newDeliveredOrder[tableIndex].order[category][element]={}
            }
            newDeliveredOrder[tableIndex].order[category][element][coctelSizeOrTypeOfShrimp]=true
        }else{
            newDeliveredOrder[tableIndex].order[category][element]=true
        }
        setDeliveredOrder(newDeliveredOrder)
        console.log(newDeliveredOrder)
    }


    const removeDeliveredProduct=(coctelSizeOrTypeOfShrimp,coctelIndex)=>{
        let newDeliveredOrder=[...deliveredOrder]
        const currentTables=newDeliveredOrder.map(table=>table.tableNumber)
        const tableIndex=currentTables.findIndex(table=>table===tableNumber)

        if (category==='cocteles') {
            const indexOfCocteles=newDeliveredOrder[tableIndex].order[category][coctelSizeOrTypeOfShrimp].findIndex(coctel=>coctel===coctelIndex)
            newDeliveredOrder[tableIndex].order[category][coctelSizeOrTypeOfShrimp].splice(indexOfCocteles,1)

            if (newDeliveredOrder[tableIndex].order[category][coctelSizeOrTypeOfShrimp].length===0) {
                delete newDeliveredOrder[tableIndex].order[category][coctelSizeOrTypeOfShrimp]
            }

        } else if (category==='camarones'){
            
            delete newDeliveredOrder[tableIndex].order[category][element][coctelSizeOrTypeOfShrimp]
            
            if (Object.keys(newDeliveredOrder[tableIndex].order[category][element]).length===0) {
                delete newDeliveredOrder[tableIndex].order[category][element]
            }

        }else{
            delete newDeliveredOrder[tableIndex].order[category][element]
        }
        
        if (Object.keys(newDeliveredOrder[tableIndex].order[category]).length===0) {
            delete newDeliveredOrder[tableIndex].order[category]
        }

        if (Object.keys(newDeliveredOrder[tableIndex].order).length===0) {
            newDeliveredOrder.splice(tableIndex,1)
        }

        setDeliveredOrder(newDeliveredOrder)
    }

    const renderProduct=()=>{
        if (category==='cocteles') { 

            if (element==='grande') {
                return(
                    products['grande'].coctelesSequence.map((coctel,index)=>{
                        const [delivered,setDelivered] = React.useState(false)
                    
                    return (
                        <>
                            {!coctel.delivered && (
                                <div className={`pending-product-container`}>
                                    <div onClick={()=>{setDelivered(prev=>!prev)
                                        handleDeliveredProduct(!delivered,'grande',index)}} className={`pending-product__circle ${delivered && 'product-delivered-circle'}`}>{delivered && <img className='product-delivered-image' src={useGetImageName('delivered')} alt="" />}</div>
                                    <p className={`pending-product__text pending-product-itemName ${delivered && 'product-delivered'}`}>Coc. Grande {coctel.deQue.join(', ')} {coctel.conQue.join(', ')} </p>
                                    {/* <p className='peding-product__text'>{element}</p> */}
                                    {/* <p className={`pending-product__text pending-product-cuantity ${delivered && 'product-delivered'}`}>{products[element]['total']}</p> */}
                                </div>
                            )}
                        </>
                    )})
                )
            } else{
                return(
                    products['mediano'].coctelesSequence.map((coctel,index)=>{
                        const [delivered,setDelivered] = React.useState(false)
                        
                        return (
                            <>
                                {!coctel.delivered && (
                                    <div className={`pending-product-container`}>
                                        <div onClick={()=>{setDelivered(prev=>!prev)
                                            handleDeliveredProduct(!delivered,'mediano',index)}} className={`pending-product__circle ${delivered && 'product-delivered-circle'}`}>{delivered && <img className='product-delivered-image' src={useGetImageName('delivered')} alt="" />}</div>
                                        <p className={`pending-product__text pending-product-itemName ${delivered && 'product-delivered'}`}>Coc. Mediano {coctel.deQue.join(', ')} {coctel.conQue.join(', ')} </p>
                                        {/* <p className='peding-product__text'>{element}</p> */}
                                        {/* <p className={`pending-product__text pending-product-cuantity ${delivered && 'product-delivered'}`}>{products[element]['total']}</p> */}
                                    </div>
                                )}
                            </>
                    )})
                )
            }
        }else if (category==='camarones' && (element==='diabla' || element==='mojoDeAjo' || element==='ajillo' || element==='natural' || element==='mantequilla')) {
            
            
            return Object.keys(products[element]).map(tipoDeCamaron=>{
                if (tipoDeCamaron==='cabeza' || tipoDeCamaron==='pelados') {
                    const [delivered,setDelivered] = React.useState(false)

                    return (
                        <>
                        
                        {products[element][tipoDeCamaron].notYetDelivered > 0 && (
                            <div className={`pending-product-container`}>
                                <div onClick={()=>{setDelivered(prev=>!prev)
                                    handleDeliveredProduct(!delivered,tipoDeCamaron)}} className={`pending-product__circle ${delivered && 'product-delivered-circle'}`}>{delivered && <img className='product-delivered-image' src={useGetImageName('delivered')} alt="" />}</div>
                                <p className={`pending-product__text pending-product-itemName ${delivered && 'product-delivered'}`}>Cam. {element} {tipoDeCamaron}</p>
                                
                                <p className={`pending-product__text pending-product-cuantity ${delivered && 'product-delivered'}`}>{products[element][tipoDeCamaron]['notYetDelivered']}</p>
                            </div>
                        )}
                        </>
                    )
                }
            })

        } else{
            const [delivered,setDelivered] = React.useState(false)

            return (
                <>
                    {products[element].notYetDelivered > 0 && (
                        <div className={`pending-product-container`}>
                            <div onClick={()=>{setDelivered(prev=>!prev) 
                                handleDeliveredProduct(!delivered)}} className={`pending-product__circle ${delivered && 'product-delivered-circle'}`}>{delivered && <img className='product-delivered-image' src={useGetImageName('delivered')} alt="" />}</div>
                            <p className={`pending-product__text pending-product-itemName ${delivered && 'product-delivered'}`}>{category} {element}</p>
                            <p className={`pending-product__text pending-product-cuantity ${delivered && 'product-delivered'}`}>{products[element]['notYetDelivered']}</p>
                        </div>
                    )}
                </>
            )
        }
    }


  return (
        renderProduct()
  )
}
