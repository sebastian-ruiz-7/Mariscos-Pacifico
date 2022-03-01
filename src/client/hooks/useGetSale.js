import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken'


export const useGetSale = async(id) => {
    const token=useGetToken()

    if (!id) {
        let response=await fetch(`${API_address}sales/last`,{
            headers:{Authorization:token}
        })
        response=await response.json();
        response.body=response.body[0]
        return response
    }
    else{
        let response=await fetch(`${API_address}sales/get/${id}`,{
            headers:{Authorization:token},
        })
        response=await response.json();
        response.body=response.body[0]
        return response
    }
}
