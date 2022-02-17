//Import dependencies
import React from 'react'
//Import containers
import { AbrirMesaContainer } from '@containers/AbrirMesaContainer/AbrirMesaContainer'
//Import hooks
import { useGetAvailableTables } from '@hooks/useGetTables'

const AbirMesa = () => {

    const [loading,setLoading]=React.useState(true)
    const [tables,setTables]=React.useState([])

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
    },[])

    return (
        <>
            {!loading && (<AbrirMesaContainer openTables={tables} />)}   
        </>
    )
}

export {AbirMesa}