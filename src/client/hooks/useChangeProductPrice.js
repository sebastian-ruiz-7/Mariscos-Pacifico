import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken';

export const useChangeProductPrice = async (productId,newPrice) => {
    const token=useGetToken()

    const body={
        id:productId,
        price:newPrice
    }

    let response= await fetch(`${API_address}products`,{
        method: 'PUT',
        headers:{
            Authorization:token,
            'Content-Type':'application/JSON',
            'Access-Control-Allow-Origin': '*'
        },
        body:JSON.stringify(body)
    })
    response=await response.json()
    return response
}
