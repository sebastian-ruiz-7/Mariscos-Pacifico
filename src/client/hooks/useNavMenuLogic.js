const useNavMenuLogic=(navItemName)=>{
    if (navItemName==='Abrir mesa'){
        location.href='/abrir-mesa'
    } else if (navItemName==='Mesas abiertas') {
        location.href='/mesas-abiertas'
    } else if (navItemName==='Pendientes') {
        location.href='/pendientes'
    } else if (navItemName==='Ajustes') {
        location.href='/ajustes'
    }
}

export {useNavMenuLogic}