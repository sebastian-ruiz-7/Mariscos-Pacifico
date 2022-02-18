//Import dependencies
import React from 'react'
//Import containers
import { ItemOrder } from '@components/ItemOrder/ItemOrder'
//Import Context
import { AppContext } from '@context/AppContext';
//Import styles
import '@containers/ItemOrderContainer/ItemOrderContainer.css';

const Cocteles = ({onClick}) => {
    return (
        <div className='item-order-container avoid-overflow-table'>
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
            <ItemOrder category='tostadas' item='marlin' itemName='Marlin'/>
            <ItemOrder category='tostadas' item='cevichePicado' itemName='Ceviche Picado'/>
            <ItemOrder category='tostadas' item='cevicheMolido' itemName='Ceviche Molido'/>
            <ItemOrder category='tostadas' item='cevicheCamaron' itemName='Ceviche de Camarón'/>
            <ItemOrder category='tostadas' item='camaron' itemName='Camarón'/>
            <ItemOrder category='tostadas' item='pulpo' itemName='Pulpo'/>
        </div>
    )
}

const Tacos = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Tacos</p>
            <ItemOrder category='tacos' item='camaron' itemName='Camarón'/>
            <ItemOrder category='tacos' item='pescado' itemName='Pescado'/>
            <ItemOrder category='tacos' item='marlin' itemName='Marlin'/>
        </div>
    )
}

const Filetes = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Filetes</p>
            <ItemOrder category='filetes' item='empanizado' itemName='Empanizado'/>
            <ItemOrder category='filetes' item='mojoDeAjo' itemName='Mojo de Ajo'/>
            <ItemOrder category='filetes' item='mantequilla' itemName='Mantequilla'/>
            <ItemOrder category='filetes' item='vapor' itemName='Vapor'/>
            <ItemOrder category='filetes' item='ajillo' itemName='Ajillo'/>
            <ItemOrder category='filetes' item='veracruzana' itemName='Veracruzana'/>
            <ItemOrder category='filetes' item='diabla' itemName='Diabla'/>
        </div>
    )
}

const Bebidas = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Bebidas</p>
            <ItemOrder category='bebidas' item='victoria' itemName='Victoria'/>
            <ItemOrder category='bebidas' item='estrella' itemName='Estrella'/>
            <ItemOrder category='bebidas' item='corona' itemName='Corona'/>
            <ItemOrder category='bebidas' item='pacifico' itemName='Pacífico'/>
            <ItemOrder category='bebidas' item='negraModelo' itemName='Negra Modelo'/>
            <ItemOrder category='bebidas' item='modeloEspecial' itemName='Modelo Especial'/>
            <ItemOrder category='bebidas' item='coronaLigth' itemName='Corona Ligth'/>
            <ItemOrder category='bebidas' item='michelada' itemName='Michelada'/>
            <ItemOrder category='bebidas' item='refrescos' itemName='Refrescos'/>
            <ItemOrder category='bebidas' item='taparosca' itemName='Taparosca, Bote, Ligth'/>
            <ItemOrder category='bebidas' item='aguaFresca' itemName='Agua Fresca'/>
            <ItemOrder category='bebidas' item='botellaAgua' itemName='Botella de agua'/>
            <ItemOrder category='bebidas' item='clamato' itemName='Clamato'/>
        </div>
    )
}

const Camarones = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Camarones</p>
            <ItemOrder category='camarones' item='diabla' itemName='Diabla'/>
            <ItemOrder category='camarones' item='mojoDeAjo' itemName='Mojo de Ajo'/>
            <ItemOrder category='camarones' item='mantequilla' itemName='Mantequilla'/>
            <ItemOrder category='camarones' item='ajillo' itemName='Ajillo'/>
            <ItemOrder category='camarones' item='natural' itemName='Natural'/>
            <ItemOrder category='camarones' item='empanizado' itemName='Empanizado'/>
            <ItemOrder category='camarones' item='mexicana' itemName='Mexicana'/>
        </div>
    )
}

const Ordenes = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Órdenes</p>
            <ItemOrder category='ordenes' item='marlin' itemName='Marlin'/>
            <ItemOrder category='ordenes' item='cevichePicado' itemName='Ceviche Picado'/>
            <ItemOrder category='ordenes' item='cevicheMolido' itemName='Ceviche Molido'/>
            <ItemOrder category='ordenes' item='cevicheCamaron' itemName='Ceviche de Camarón'/>
            <ItemOrder category='ordenes' item='empCamaron' itemName='Emp. de Camarón'/>
            <ItemOrder category='ordenes' item='empMarlin' itemName='Emp. de Marlin'/>
        </div>
    )
}

const Botanas = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Botanas</p>
            <ItemOrder category='botanas' item='aguachileVerde' itemName='Aguachile Verde'/>
            <ItemOrder category='botanas' item='aguachileNegro' itemName='Aguachile Negro'/>
            <ItemOrder category='botanas' item='camaron' itemName='Botana de Camarón'/>
            <ItemOrder category='botanas' item='pulpo' itemName='Botana de Pulpo'/>
            <ItemOrder category='botanas' item='ensaladaCamaron' itemName='Ensalada de Camarón'/>
        </div>
    )
}

const Sopas = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Sopas</p>
            <ItemOrder category='sopas' item='mariscosGrande' itemName='Mariscos Grande'/>
            <ItemOrder category='sopas' item='mariscosChica' itemName='Mariscos Chica'/>
            <ItemOrder category='sopas' item='camaronGrande' itemName='Camarón Grande'/>
            <ItemOrder category='sopas' item='camaronChica' itemName='Camarón Chica'/>
            <ItemOrder category='sopas' item='albondigas' itemName='Albóndigas'/>
        </div>
    )
}

const Postres = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Postres</p>
            <ItemOrder category='postres' item='caramelo' itemName='Flan de Caramelo'/>
            <ItemOrder category='postres' item='cajeta' itemName='Flan de Cajeta'/>   
        </div>
    )
}

const Pescados = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Pescados</p>
            <ItemOrder category='pescados' item='mojarraDorada' itemName='Mojarra Dorada'/>
            <ItemOrder category='pescados' item='mojarraMojoDeAjo' itemName='Mojarra Mojo de Ajo'/>
            <ItemOrder category='pescados' item='huachiDorado' itemName='Huachi. Dorado'/>
            <ItemOrder category='pescados' item='huachiMojoDeAjo' itemName='Huachi. Mojo de Ajo'/>
        </div>
    )
}

const Pulpos = ({onClick}) => {
    return (
        <div className='item-order-container'>
            <p onClick={onClick} className='item-order-container__name'>Pulpos</p>
            <ItemOrder category='pulpos' item='diabla' itemName='Diabla'/>
            <ItemOrder category='pulpos' item='mojoDeAjo' itemName='Mojo de Ajo'/>
            <ItemOrder category='pulpos' item='mantequilla' itemName='Mantequilla'/>
            <ItemOrder category='pulpos' item='mexicana' itemName='Mexicana'/>
            <ItemOrder category='pulpos' item='ajillo' itemName='Ajillo'/>
        </div>
    )
}

export { Cocteles, Tostadas, Tacos, Filetes, Bebidas, Camarones, Ordenes, Botanas, Sopas, Postres, Pescados, Pulpos}

