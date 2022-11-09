import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken'

export const useGetSales =async (sinceDate,untilDate) => {
    
    let URL_ENDPOINT=API_address;

    if (!sinceDate,!untilDate) {
        let today=new Date().toLocaleDateString()
        today=today.split('/')
        const month=today[0]
        today[0]=today[1]
        today[1]=month
        today=today.reverse()
        today=today.join('-')
        URL_ENDPOINT=`${URL_ENDPOINT}sales/today?date=${today}`
    }

    const token=useGetToken()

    let response=await fetch(URL_ENDPOINT,{
        headers:{Authorization:token}
    })
    response=await response.json();
    return response
}
