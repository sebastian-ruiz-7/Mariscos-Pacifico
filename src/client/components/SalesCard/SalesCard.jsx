//Import dependencies
import React from 'react'
//Import styles
import './SalesCard.css'

export const SalesCard = ({sale}) => {

    const formatDate=()=>{
        let today=new Date().toLocaleDateString()
        console.log(today)
        today=today.split('/')
        const month=today[0]
        today[0]=today[1]
        today[1]=month
        today=today.reverse()
        today=today.join('-')

        // console.log('today',today)
        // console.log('sale.fecha',sale.fecha.substring(0,10))

        if (today===sale.fecha.substring(0,10)) {
            console.log('entro')
        }
        return sale.fecha.substring(11)
    }

  return (
      <div className='sale-card-container'>
            <div className='sale-table-and-date-container'>
                <p className='sale-tableNumber'>{sale.tableNumber}</p>
                <p className='sale-date'>{formatDate()}</p>
            </div>

            <p className='sale-total'>{sale.total}</p>

            <button className='see-ticket-button'>Ver ticket</button>
      </div>
  )
}
