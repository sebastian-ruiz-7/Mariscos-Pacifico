//Import dependencies
import React from 'react'
//Import hooks
import { useGiveFormatDate } from '@hooks/useGiveFormatDate'
//Import styles
import './SalesCard.css'
import { BillTickerMaker } from '@containers/BillTickerMaker/BillTickerMaker';
import { ModalTicket } from '@containers/ModalTicket/ModalTicket';

export const SalesCard = ({sale}) => {

  const [modalTicket,setOpenModalTicket] =React.useState(false);

  return (
    <>
      <div className='sale-card-container'>
            <div className='sale-table-and-date-container'>
                <p className='sale-tableNumber'>{sale.tableNumber}</p>
                <p className='sale-date'>{useGiveFormatDate(sale.fecha)}</p>
            </div>

            <p className='sale-total'>{sale.total}</p>

            <button onClick={()=>setOpenModalTicket(true)} className='see-ticket-button'>Ver ticket</button>
      </div>

      { modalTicket && <ModalTicket>
        <BillTickerMaker id={sale.id} /> 
      </ModalTicket>}

      {modalTicket && <button className='close-modal-button' onClick={()=>setOpenModalTicket(false)}>Cerrar</button> }
    
    </>
  )
}
