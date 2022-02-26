//Import dependencies
import React from 'react'
//Import hooks
import { useGetImageName } from '@hooks/useGetImageName'
import { useChangeProductPrice } from '@hooks/useChangeProductPrice'
//Import styles
import './ProductCard.css'

export const ProductCard = ({product}) => {

    const [changePriceInput,setChangePriceInput] = React.useState(false)

    const [error,setError]=React.useState(false)

    const [currentPrice,setCurrentPrice] =React.useState(product.price)
    const [newPrice,setNewPrice]= React.useState('')

    const changePriceQuery=async()=>{
        if (typeof(newPrice)!=='number') {
            setError(true)
            return 
        }
        const response=await useChangeProductPrice(product.id,newPrice.toFixed(2))
        if (response.status===200) {
            setCurrentPrice(newPrice.toFixed(2))
            setNewPrice('')
            setChangePriceInput(false)
            setError(false)
        }
    }


    const newProductPrice=(event)=>{
        setNewPrice(parseInt(event.target.value))
    }

  return (
    <>
        {/* The styles of 'error-message' are the same of the 'SubmitOrderButton.css' */}
        {error && <p className='error-message'>El nuevo precio deben ser únicamente  números</p>}

        {!changePriceInput ? (
            <>
                <div className='productCard-container'>
                    <p className='productCard__text'>{product.name}</p>
            
                    <div className='productCard-price-and-icon-container'>
                        <p className='productCard__text'>{currentPrice}</p>
            
                        <img onClick={()=>setChangePriceInput(true)} className='prodctCard__price-icon' src={useGetImageName('refund')} alt="Change Price Button" />
                    </div>
                </div>
            
            </>)
        
            :
            <>
                <div className='productCard-container'>
                    <p className='productCard__text'>{product.name}</p>
            
                    <div className='productCard-price-and-icon-container'>

                    <img onClick={()=>{
                        setChangePriceInput(false)
                        setError(false)
                    }} className='prodctCard__price-icon' src={useGetImageName('cancel')} alt="Cancel Change Price Button" />

                        {/* <p className='productCard__text'>{product.price}</p> */}

                        <input onChange={newProductPrice} className='productCard__price-input' type="number" />
            
                        <img onClick={changePriceQuery} className='prodctCard__price-icon' src={useGetImageName('correct')} alt="Change Price Button" />
                    </div>
                </div>
            </>
        }
    </>

    // <h1>{product.name}</h1>
  )
}
