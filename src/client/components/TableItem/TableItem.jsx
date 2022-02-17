//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import styles
import '@components/TableItem/TableItem.css'

const TableItem = ({tableNumber}) => {

    const {setTableNumber} = React.useContext(AppContext);

    const selectTable=(event)=>{
        event.preventDefault()
        setTableNumber(tableNumber)
    }

    // const giveFormatTableNumber=()=>{
    //     let fortatTableNumber=tableNumber
    //     if (fortatTableNumber.length>4 && fortatTableNumber.substring(0,6).toLowerCase()==='llevar') {
    //         fortatTableNumber=fortatTableNumber.substring(0,6)
    //     }
    //     return fortatTableNumber
    // }

    return (
        <div onClick={selectTable} className='table-container'>
            <p>Mesa {tableNumber}</p>
        </div>
    )
}

export {TableItem}
