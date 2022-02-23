//Import dependencies
import React from 'react'
//Import containers
import { NavigationMenu } from '@containers/NavigationMenu/NavigationMenu'
import { useGetOpenTables } from '@hooks/useGetTables'
import { TableItem } from '@components/TableItem/TableItem'
import { CurrentOrderContainer } from '@containers/CurrentOrderContainer/CurrentOrderContainer'
//Import Context
import { AppContext } from '@context/AppContext'

const MesasAbiertas = () => {
    
    const {tableNumber} = React.useContext(AppContext);
    const [openTables,setOpenTables]=React.useState([])

    React.useEffect(()=>{
        if (!localStorage.getItem('sessionJWT')) {
            location.href='/'
        }else{
            const fetchData=async()=>{
                const openTables=await useGetOpenTables()
                setOpenTables(openTables);
            }
            fetchData()
        }
    },[])

    return (
        <>
            {!tableNumber && openTables.map(table=>(<TableItem tableNumber={table} key={`TableNumber ${table}`}/>))}

            {tableNumber && <CurrentOrderContainer/>}

            <NavigationMenu activeNavItem='mesas abiertas'/>

            <div className='EvitarOverflow'></div>
        </>
    )
}

export {MesasAbiertas}