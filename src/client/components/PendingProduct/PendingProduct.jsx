//Import dependencies
import React from 'react'
//Import hooks
import { useGetImageName } from '@hooks/useGetImageName'
//Import styles
import './PendingProdct.css'

export const PendingProduct = ({category,products}) => {

    const [delivered,setDelivered] = React.useState(false)

    const renderPendingProducts=()=>{
        return Object.keys(products).map(key=>(
            <div className={`pending-product-container`}>
                <div onClick={()=>setDelivered(prev=>!prev)} className={`pending-product__circle ${delivered && 'product-delivered-circle'}`}>{delivered && <img className='product-delivered-image' src={useGetImageName('delivered')} alt="" />}</div>
                <p className={`pending-product__text pending-product-itemName ${delivered && 'product-delivered'}`}>{category} {key}</p>
                {/* <p className='peding-product__text'>{key}</p> */}
                <p className={`pending-product__text pending-product-cuantity ${delivered && 'product-delivered'}`}>{products[key]}</p>
            </div>
        ))}

  return (

    renderPendingProducts()
    //   <h1>Hola</h1>
    // <p>{category} {product.item}</p>
  )
}
