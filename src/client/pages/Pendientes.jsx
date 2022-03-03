//Import dependencies
import React from 'react'
//Import containers
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'
import { RenderPendingTable } from '@containers/RenderPendingTable/RenderPendingTable'
//Import hooks
import { useGetOrders } from '@hooks/useGetOrderFromTable'


const Pendientes = () => {

    const [pendings,setPendings] = React.useState([])

    React.useEffect(()=>{
        async function fetchData() {
            const orders=await useGetOrders()
            setPendings(orders.body)
            console.log(orders)
        }

        fetchData()
    },[])

    return (
        <>
            {/* <CategoryContainer />   */}

            {/* <h1>Hola estos son los pendientes</h1> */}

            {pendings.length>0 && (
                <>
                    {pendings.map(table=> <RenderPendingTable key={`table ${table.tableNumber}`} tableInfo={table}/>)}
                </>
            )}
            
            <NavigationMenu activeNavItem='pendientes'/>

            <div className='EvitarOverflow'></div>
        </>
    )
}

export {Pendientes}