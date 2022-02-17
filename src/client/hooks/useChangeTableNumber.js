import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken';

const useChangeTableNumber = async(oldTableNumber,newTableNumber) => {
    const token=useGetToken()

    const body={
        oldTableNumber:oldTableNumber,
        newTableNumber:newTableNumber
    }

    let response= await fetch(`${API_address}tables/updateTable`,{
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

export {useChangeTableNumber}