import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken'

const useDeleteTable = async (tableNumber) => {
    const token=useGetToken()

    let response=await fetch(`${API_address}tables/${tableNumber}`,{
        method:'DELETE',
        headers:{Authorization:token}
    })
    response=await response.json();
    return response
}

export {useDeleteTable}