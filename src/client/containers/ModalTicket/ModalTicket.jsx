import React from 'react'
import ReactDOM from 'react-dom'
//Import styles
import './ModalTicket.css'


function ModalTicket({children}){
    return ReactDOM.createPortal(
        <div className='modal-ticket-background'>
            {children}
        </div>,document.getElementById('modalSaleTickect')
    )
}

export {ModalTicket}
