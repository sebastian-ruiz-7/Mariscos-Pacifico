import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken';

const useUpdateOrder = async (tableNumber,order) => {
  const bodyRequest={
      tableNumber,
      order
  }
  const token=useGetToken()

    let response= await fetch(`${API_address}tables`,{
        method: 'PUT',
        headers:{
            Authorization:token,
            'Content-Type':'application/JSON',
            'Access-Control-Allow-Origin': '*'
        },
        body:JSON.stringify(bodyRequest)
    })

    response=await response.json()
    return response
}

export {useUpdateOrder}