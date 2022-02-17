import React from 'react';
//Import containers
import { CategoryContainer } from '@containers/CategoryContainer/CategoryContainer'
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'
import { TableItem } from '@components/TableItem/TableItem'
//Import Context
import { AppContext } from '@context/AppContext'
//Import components
import { Modal } from '@containers/Modal/Modal'
import { CoctelesLogic } from '@containers/CoctelesLogic/CoctelesLogic'

const AbrirMesaContainer = ({openTables}) => {

    const {tableNumber,modal} = React.useContext(AppContext);

    const tables=openTables;

    return(
    <>

        {!tableNumber && tables.map(table => (<TableItem tableNumber={table} key={`TableNumber ${table}`}/>) )}
        
        {tableNumber && <CategoryContainer/>}
                    
        <NavigationMenu activeNavItem='abrir mesa'/>


        {modal && <Modal> 
            < CoctelesLogic />
        </Modal>}

        <div className='EvitarOverflow'></div>
    </>
  )
};

export {AbrirMesaContainer};
