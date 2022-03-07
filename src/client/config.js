export const API_address='http://192.168.1.157:3000/'

//Import sockets
import { io } from 'socket.io-client'
export const socket=io.connect(`${API_address}`)

