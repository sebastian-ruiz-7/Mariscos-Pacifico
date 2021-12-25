import camaron from '@assets/camaron.png';
import coctel from '@assets/coctel.png';
import filete from '@assets/filete.png';
import ordenes from '@assets/ordenes.png';
import pescado from '@assets/pescado.png';
import pulpo from '@assets/pulpo.png';
import sopas from '@assets/sopas.png';
import taco from '@assets/taco.png';
import tostadas from '@assets/tostadas.png';

const useGetImageName=(imageName)=>{

    if (imageName==='camaron') {
        return camaron;
    } else if (imageName==='coctel') {
        return coctel;
    } else if (imageName==='filete') {
        return filete;
    } else if (imageName==='ordenes') {
        return ordenes;
    } else if (imageName==='pescado') {
        return pescado;
    } else if (imageName==='pulpo') {
        return pulpo;
    } else if (imageName==='sopas') {
        return sopas;
    } else if (imageName==='taco') {
        return taco;
    } else if (imageName==='tostadas') {
        return tostadas;
    }
}


export {useGetImageName}