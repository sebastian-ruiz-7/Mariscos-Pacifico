import React from 'react';
import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken';

const useSendOrder =async (order) => {
    const token=useGetToken()

    let response= await fetch(`${API_address}tables`,{
        method: 'POST',
        headers:{
            Authorization:token,
            'Content-Type':'application/JSON',
            'Access-Control-Allow-Origin': '*'
        },
        body:JSON.stringify(order)
    })

    response=await response.json()
    return response
};

export {useSendOrder};
