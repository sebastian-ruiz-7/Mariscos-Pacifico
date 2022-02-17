import { API_address } from "../config"
import { useGetToken } from '@hooks/useGetToken';

const useGetAvailableTables = async() => {
    const tables=['1','2','3','4','5','6','7']; //Due to the types in JS, the includes method verifies the value and the type. That's why I'm using this array
    const openTables=[] //In this array I'll put all the available tables
    
    //I'm bringing the current tables from the db
    const token=useGetToken()

    let response=await fetch(`${API_address}tables`,{
        headers:{Authorization:token}
    })
    response=await response.json();
    let currentTables=response.body

    //This loop fulls the openTables array with the available tables
    for (let index = 0; index < tables.length; index++) {
        if (!currentTables.includes(tables[index])) {
            openTables.push(tables[index])
        }
    }

    //The 'Llevar' table must always be available
    openTables.push('Llevar')

    return openTables
};

const useGetOpenTables=async()=>{
    const token=useGetToken()

    let response=await fetch(`${API_address}tables`,{
        headers:{Authorization:token}
    })
    response=await response.json();
    const currentTables=response.body
    return currentTables
}

export {useGetAvailableTables, useGetOpenTables};
