//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import hooks
import { useGetSale } from '@hooks/useGetSale'
//Import styles
import './BillTickerMaker.css'

const BillTickerMaker = ({id}) => {

  const [ticket,setTicket] = React.useState(false)

  React.useEffect(()=>{
      if (!localStorage.getItem('sessionJWT')) {
        location.href='/'
    }else{
        const fetchData=async()=>{
            const sale=await useGetSale(id)
            console.log(sale)
            if (sale.status===200) {
              setTicket(sale.body)
            }
        }
        fetchData()
    }  
  },[])
    
  return (
    // order.products.map(item=>{
        
    // })    
    <div className='ticket-container'>
      <p className='name-restaurant'>Mariscos Pacífico</p>
      <p>Av Enrique Díaz de León Sur 305 Sur, Col Americana, Americana, 
        <br /> C.P: 44160 Guadalajara, Jal.</p>
      <hr />

      {ticket && (
        <>
          <div className='ticket-products-container'>
            <p>Cant.</p> <p>Artículo</p> <p>Precio</p> <p>Total</p>

            {ticket.products.map(product=>
              <>
                <p key={`Cantidad ${product.category}-${product.item}`}>{product.cantidad} </p>
                <p className='ticket-item-name' key={`nombre ${product.category}-${product.item}`}>{product.name} </p>
                <p key={`precio ${product.category}-${product.item}`}>{product.price} </p>
                <p key={`total ${product.category}-${product.item}`}>{product.total.toFixed(2)}</p>
              </>
              
              )}
            <p></p>
            <p>Total:</p>
            <p>{ticket.total}</p>
          </div>
          
          <hr />

          <p>Fecha {ticket.fecha.substring(0,10)}</p>
          <p>Hora {ticket.fecha.substring(10)}</p>
        </>
      )}
      <p className='name-restaurant'>Gracias por su preferencia</p>
    </div>
  )
}

export {BillTickerMaker}