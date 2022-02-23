import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken'


export const useGetSale = async(tableNumber,date) => {
    if (!tableNumber || !date) {
        const token=useGetToken()

        let response=await fetch(`${API_address}sales/last`,{
            headers:{Authorization:token}
        })
        response=await response.json();
        response.body=response.body[0]
        return response
    }
}
