//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import containers
import { CategoryContainer } from '@containers/CategoryContainer/CategoryContainer'
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'
import { TableItem } from '@components/TableItem/TableItem'
//Import components
import { Modal } from '@containers/Modal/Modal'
import { CoctelesLogic } from '@containers/CoctelesLogic/CoctelesLogic'
import { SubmitOrderButton } from '@components/SubmitOrderButton/SubmitOrderButton';
//Import hooks
import { useGetAvailableTables } from '@hooks/useGetTables'
import { socket } from '../config'

// //Import containers
// import { AbrirMesaContainer } from '@containers/AbrirMesaContainer/AbrirMesaContainer'

const AbirMesa = () => {

    const [loading,setLoading]=React.useState(true)
    const [tables,setTables]=React.useState([])

    const {tableNumber,modal} = React.useContext(AppContext);

    React.useEffect(()=>{
        if (!localStorage.getItem('sessionJWT')) {
            location.href='/'
        }else{
            async function fetchData() {
                const openTables=await useGetAvailableTables()
                setTables(openTables)
            }

            fetchData()

            setLoading(false)
        }
    },[tableNumber])

    React.useEffect(()=>{
        socket.on('updateAvailableTables',availableTables=>setTables(availableTables))
    },[socket])

    return (
        <>
            {!loading && (
                <>
                    {!tableNumber && tables.map(table => (<TableItem tableNumber={table} key={`TableNumber ${table}`}/>) )}
        
                    {tableNumber && (
                        <>
                            <CategoryContainer/>
                            <SubmitOrderButton />
                        </>

                    )}
                                
                    <NavigationMenu activeNavItem='abrir mesa'/>


                    {modal && <Modal> 
                        < CoctelesLogic />
                    </Modal>}

                    

                    <div className='EvitarOverflow'></div>
                </>
            )}    
             {/* <AbrirMesaContainer openTables={tables} />)}    */}
        </>
    )
}

export {AbirMesa}