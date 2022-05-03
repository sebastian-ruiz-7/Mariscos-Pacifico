export const API_address='https://mariscospacifico.bond/api/'
//export const API_address='http://192.168.100.4:3000/api/'

//Import sockets
import { io } from 'socket.io-client'
export const socket=io.connect('https://mariscospacifico.bond')
//export const socket=io.connect(`http://192.168.100.4:3000/`)