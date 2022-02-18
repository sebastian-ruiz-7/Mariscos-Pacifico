import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken'

const useMakeBill =async (tableNumber) => {
    const token=useGetToken()

    let response=await fetch(`${API_address}tables/pay/${tableNumber}`,{
        headers:{Authorization:token}
    })
    response=await response.json();
    const bill=response.body
    return bill
}

export {useMakeBill}