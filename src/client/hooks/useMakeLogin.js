import axios from "axios"
import { API_address } from "../config"
//const config =require ('../../backend/config.js')

const useMakeLogin= async (data)=>{
    try {
        const endPoint='login'
        const api=API_address+endPoint
        const response= await axios.post(api,data)
        localStorage.setItem('sessionJWT',response.data.body)
    } catch (error) {
        
    }
}

export {useMakeLogin}