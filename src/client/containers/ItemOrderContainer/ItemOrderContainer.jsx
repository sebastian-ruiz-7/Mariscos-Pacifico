//Import dependencies
import React from 'react'
//Import containers
import { ItemOrder } from '@components/ItemOrder/ItemOrder'
//Import Context
import { AppContext } from '@context/AppContext';
//Import styles
import '@containers/ItemOrderContainer/ItemOrderContainer.css';

const Cocteles = ({onClick}) => {

    const {order,setOrder} = React.useContext(AppContext);

    return (
        <div className='item-order-container'>
            <p onClick={onClick}  className='item-order-container__name'>Cocteles</p>
            <ItemOrder category='cocteles' item='mediano' itemName='Coctel Mediano'/>
            <ItemOrder category='cocteles' item='grande' itemName='Coctel Grande'/>   
        </div>
    )
}

const Tostadas = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Tostadas</p>
            <ItemOrder itemName='Marlin'/>
            <ItemOrder itemName='Ceviche de Pescado'/>
            <ItemOrder itemName='Ceviche de Camarón'/>
            <ItemOrder itemName='Camarón'/>
            <ItemOrder itemName='Pulpo'/>
        </div>
    )
}

const Tacos = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Tacos</p>
            <ItemOrder itemName='Camarón'/>
            <ItemOrder itemName='Pescado'/>
            <ItemOrder itemName='Marlin'/>
        </div>
    )
}

const Filetes = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Filetes</p>
            <ItemOrder itemName='Empanizado'/>
            <ItemOrder itemName='Mojo de Ajo'/>
            <ItemOrder itemName='Mantequilla'/>
            <ItemOrder itemName='Vapor'/>
            <ItemOrder itemName='Ajillo'/>
            <ItemOrder itemName='Veracruzana'/>
            <ItemOrder itemName='Diabla'/>
        </div>
    )
}

const Bebidas = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Bebidas</p>
            <ItemOrder itemName='Victoria'/>
            <ItemOrder itemName='Estrella'/>
            <ItemOrder itemName='Corona'/>
            <ItemOrder itemName='Pacifico'/>
            <ItemOrder itemName='Negra Modelo'/>
            <ItemOrder itemName='Modelo Especial'/>
            <ItemOrder itemName='Corona Ligth'/>
            <ItemOrder itemName='Michelada'/>
            <ItemOrder itemName='Refrescos'/>
            <ItemOrder itemName='Taparosca, Bote, Ligth'/>
            <ItemOrder itemName='Agua Fresca'/>
            <ItemOrder itemName='Botella de agua'/>
            <ItemOrder itemName='Clamato'/>
        </div>
    )
}

const Camarones = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Camarones</p>
            <ItemOrder itemName='Diabla'/>
            <ItemOrder itemName='Mojo de Ajo'/>
            <ItemOrder itemName='Mantequilla'/>
            <ItemOrder itemName='Ajillo'/>
            <ItemOrder itemName='Natural'/>
            <ItemOrder itemName='Empanizado'/>
            <ItemOrder itemName='Mexicana'/>
        </div>
    )
}

const Ordenes = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Órdenes</p>
            <ItemOrder itemName='Marlin'/>
            <ItemOrder itemName='Ceviche de Pescado'/>
            <ItemOrder itemName='Emp. de Camarón'/>
            <ItemOrder itemName='Emp. de Marlin'/>
        </div>
    )
}

const Botanas = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Botanas</p>
            <ItemOrder itemName='Aguachile Verde'/>
            <ItemOrder itemName='Aguachile Negro'/>
            <ItemOrder itemName='Botana de Camarón'/>
            <ItemOrder itemName='Ensalada de Camarón'/>
        </div>
    )
}

const Sopas = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Sopas</p>
            <ItemOrder itemName='Mariscos Grande'/>
            <ItemOrder itemName='Mariscos Chica'/>
            <ItemOrder itemName='Camarón Grande'/>
            <ItemOrder itemName='Camarón Chica'/>
            <ItemOrder itemName='Albóndigas'/>
        </div>
    )
}

const Postres = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Postres</p>
            <ItemOrder itemName='Flan de Caramelo'/>
            <ItemOrder itemName='Flan de Cajeta'/>   
        </div>
    )
}

const Pescados = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Pescados</p>
            <ItemOrder itemName='Mojarra Dorada'/>
            <ItemOrder itemName='Mojarra Mojo de Ajo'/>
            <ItemOrder itemName='Huachi. Dorado'/>
            <ItemOrder itemName='Huachi. Mojo de Ajo'/>
        </div>
    )
}

const Pulpos = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Pulpos</p>
            <ItemOrder itemName='Diabla'/>
            <ItemOrder itemName='Mojo de Ajo'/>
            <ItemOrder itemName='Mantequilla'/>
            <ItemOrder itemName='Mexicana'/>
            <ItemOrder itemName='Ajillo'/>
        </div>
    )
}

export { Cocteles, Tostadas, Tacos, Filetes, Bebidas, Camarones, Ordenes, Botanas, Sopas, Postres, Pescados, Pulpos}

