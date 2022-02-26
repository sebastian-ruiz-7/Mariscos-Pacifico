import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken';

export const useGetProductPrices = async(category) => {
    
    const token=useGetToken()

    let response=await fetch(`${API_address}products/${category}`,{
        headers:{Authorization:token}
    })
    response=await response.json();
    //response.body=response.body[0]
    return response
}
