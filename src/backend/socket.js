const { Server }=require('socket.io')
//const cors=require('cors');
let socket={}

function connect(server) {
    socket.io=new Server(server,{
        cors:{
            origin: true
        },
    })

    socket.io.on('connection',socket=>{
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