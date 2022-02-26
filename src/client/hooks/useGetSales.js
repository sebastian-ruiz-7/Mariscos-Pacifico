import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken'

export const useGetSales =async (sinceDate,untilDate) => {
    
    let URL_ENDPOINT=API_address;

    if (!sinceDate,!untilDate) {
        URL_ENDPOINT=URL_ENDPOINT+'sales/today'
    }

    const token=useGetToken()

    let response=await fetch(URL_ENDPOINT,{
        headers:{Authorization:token}
    })
    response=await response.json();
    return response
}
