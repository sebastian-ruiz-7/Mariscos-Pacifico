//Import dependencies
import React from 'react'
//Import hooks
import { useGetImageName } from '@hooks/useGetImageName'
//Import styles
import './PendingProductCard.css'

export const PendingProductCard = ({category,element,products}) => {

    //const [delivered,setDelivered] = React.useState(false)


    const renderProduct=()=>{
        if (category==='cocteles') { 
            
            //const [delivered,setDelivered] = React.useState(false)

            if (element==='grande') {
                return(
                    products['grande'].coctelesSequence.map(coctel=>{
                        const [delivered,setDelivered] = React.useState(false)
                    
                    return (
                        <div className={`pending-product-container`}>
                            <div onClick={()=>setDelivered(prev=>!prev)} className={`pending-product__circle ${delivered && 'product-delivered-circle'}`}>{delivered && <img className='product-delivered-image' src={useGetImageName('delivered')} alt="" />}</div>
                            <p className={`pending-product__text pending-product-itemName ${delivered && 'product-delivered'}`}>Coc. Grande {coctel.deQue.join(', ')} {coctel.conQue.join(', ')} </p>
                            {/* <p className='peding-product__text'>{element}</p> */}
                            {/* <p className={`pending-product__text pending-product-cuantity ${delivered && 'product-delivered'}`}>{products[element]['total']}</p> */}
                        </div>
                    )})
                )
            } else{
                return(
                    products['mediano'].coctelesSequence.map(coctel=>{
                        const [delivered,setDelivered] = React.useState(false)
                        
                        return (
                        <div className={`pending-product-container`}>
                            <div onClick={()=>setDelivered(prev=>!prev)} className={`pending-product__circle ${delivered && 'product-delivered-circle'}`}>{delivered && <img className='product-delivered-image' src={useGetImageName('delivered')} alt="" />}</div>
                            <p className={`pending-product__text pending-product-itemName ${delivered && 'product-delivered'}`}>Coc. Mediano {coctel.deQue.join(', ')} {coctel.conQue.join(', ')} </p>
                            {/* <p className='peding-product__text'>{element}</p> */}
                            {/* <p className={`pending-product__text pending-product-cuantity ${delivered && 'product-delivered'}`}>{products[element]['total']}</p> */}
                        </div>
                    )})
                )
            }
        }else if (category==='camarones') {
            
            
            return Object.keys(products[element]).map(tipoDeCamaron=>{
                if (tipoDeCamaron==='cabeza' || tipoDeCamaron==='pelados') {
                    const [delivered,setDelivered] = React.useState(false)

                    return (
                        <div className={`pending-product-container`}>
                            <div onClick={()=>setDelivered(prev=>!prev)} className={`pending-product__circle ${delivered && 'product-delivered-circle'}`}>{delivered && <img className='product-delivered-image' src={useGetImageName('delivered')} alt="" />}</div>
                            <p className={`pending-product__text pending-product-itemName ${delivered && 'product-delivered'}`}>Cam. {element} {tipoDeCamaron}</p>
                            {/* <p className='peding-product__text'>{element}</p> */}
                            <p className={`pending-product__text pending-product-cuantity ${delivered && 'product-delivered'}`}>{products[element][tipoDeCamaron]['total']}</p>
                        </div>
                    )
                }
            })

        } else{
            const [delivered,setDelivered] = React.useState(false)

            return (
                <div className={`pending-product-container`}>
                    <div onClick={()=>setDelivered(prev=>!prev)} className={`pending-product__circle ${delivered && 'product-delivered-circle'}`}>{delivered && <img className='product-delivered-image' src={useGetImageName('delivered')} alt="" />}</div>
                    <p className={`pending-product__text pending-product-itemName ${delivered && 'product-delivered'}`}>{category} {element}</p>
                    {/* <p className='peding-product__text'>{element}</p> */}
                    <p className={`pending-product__text pending-product-cuantity ${delivered && 'product-delivered'}`}>{products[element]['total']}</p>
                </div>
            )
        }
    }


  return (

        renderProduct()
        // <div className={`pending-product-container`}>
        //     <div onClick={()=>setDelivered(prev=>!prev)} className={`pending-product__circle ${delivered && 'product-delivered-circle'}`}>{delivered && <img className='product-delivered-image' src={useGetImageName('delivered')} alt="" />}</div>
        //     <p className={`pending-product__text pending-product-itemName ${delivered && 'product-delivered'}`}>{category} {element}</p>
        //     {/* <p className='peding-product__text'>{element}</p> */}
        //     <p className={`pending-product__text pending-product-cuantity ${delivered && 'product-delivered'}`}>{products[element]['total']}</p>
        // </div>
  )
}
