import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken'

const useGetOrderFromTable = async(TableNumber) => {
    const token=useGetToken()

    let response=await fetch(`${API_address}tables/${TableNumber}`,{
        headers:{Authorization:token}
    })
    response=await response.json();
    const currentTable=response.body[0].order
    return currentTable
}

export {useGetOrderFromTable}