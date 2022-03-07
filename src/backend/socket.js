const { Server }=require('socket.io')
//const cors=require('cors');
let socket={}

function connect(server) {
    socket.io=new Server(server,{
        cors:{
            origin:'http://192.168.1.157:3005'
        }
    })

    socket.io.on('connection',socket=>{
      console.log(socket.id)
      socket.emit('newUser',socket.id)
    })

    // io.on=('connection',(socket)=>{
    //     console.log('new User connected',socket.id)
    //     socket.io.emit('newUser',(socket)=>{
    //         console.log('Welcome user: ',socket.id)
    //     })
    // })

}

module.exports={
    connect,socket
}