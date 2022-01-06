//Import dependencies
import React from 'react'
//Import containers
import { CategoryContainer } from '@containers/CategoryContainer/CategoryContainer'
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'
import { TableItem } from '@components/TableItem/TableItem'
//Import Context
import { AppContext } from '@context/AppContext'
//Import components
import { Modal } from '@containers/Modal/Modal'
import { CoctelesLogic } from '@containers/CoctelesLogic/CoctelesLogic'


const AbirMesa = () => {

    const {tableNumber,modal} = React.useContext(AppContext);

    const tables=[1,2,3,4,5,6,7];
    return (
        <>
            {!tableNumber && tables.map(table => (<TableItem tableNumber={table} key={`TableNumber ${table}`}/>) )}
            
            {typeof(tableNumber)==='number' && <CategoryContainer TableNumber={tableNumber}/>}
                          
            <NavigationMenu activeNavItem='abrir mesa'/>

            {modal && <Modal> 
                < CoctelesLogic />
            </Modal>}
        </>
    )
}

export {AbirMesa}