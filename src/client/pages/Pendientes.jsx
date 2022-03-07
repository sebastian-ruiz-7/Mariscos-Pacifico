//Import dependencies
import React from 'react'
//Import Context
import { AppContext } from '@context/AppContext'
//Import hooks
import { useGetOrders } from '@hooks/useGetOrderFromTable'
import { useUpdatePendings } from '@hooks/useUpdatePendings'
//Import containers
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'
import { RenderPendingTable } from '@containers/RenderPendingTable/RenderPendingTable'
//Import socket
import { socket } from '../config'
//Import styles
import './Pendientes.css'

const Pendientes = () => {

    const [pendings,setPendings] = React.useState([])

    const [error,setError] = React.useState(false)

    const {deliveredOrder,setDeliveredOrder} = React.useContext(AppContext);

    const handleSubmitPendings=async()=>{
        if (deliveredOrder.length===0) {
            setError('No haz hecho ningún cambio')
        } else{
            setError(false)
            const response=await useUpdatePendings(deliveredOrder)
            if (response.status===200) {
                setPendings(response.body)
                setDeliveredOrder(new Array())
            }
        }
    }

    React.useEffect(()=>{
        async function fetchData() {
            const orders=await useGetOrders()
            setPendings(orders.body)
            console.log(orders)
            console.log(deliveredOrder)
        }

        fetchData()
    },[])

    React.useEffect(()=>{
        socket.on('newPendings',pendings=>setPendings(pendings))
    },[socket])

    return (
        <main className='pendientes-container'>
            {/* <CategoryContainer />   */}

            {/* <h1>Hola estos son los pendientes</h1> */}

            {pendings.length>0 && (
                <>
                    {pendings.map(table=> <RenderPendingTable key={`table ${table.tableNumber}`} tableInfo={table}/>)}
                    {/* The styles of the className 'submit-order-button' are the same of the 'SubmitOrderButton' */}
                    {error && <p className='error-message' >{error}</p>}
                    {deliveredOrder.length > 0 && <button onClick={handleSubmitPendings} className='submit-order-button'>Guardar Cambios</button>} 
                </>
            )}
            
            <NavigationMenu activeNavItem='pendientes'/>

            <div className='EvitarOverflow'></div>
        </main>
    )
}

export {Pendientes}