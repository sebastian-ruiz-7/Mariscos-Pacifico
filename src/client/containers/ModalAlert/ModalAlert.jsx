import React from 'react'
import ReactDOM from 'react-dom'

//The styles of this modal are the same of the 'Modal.css'
import '@containers/Modal/Modal.css'

function ModalAlert({children}){
    return ReactDOM.createPortal(
        <div className='modal-background'>
            {children}
        </div>,document.getElementById('modalAlert')
    )
}

export {ModalAlert}
