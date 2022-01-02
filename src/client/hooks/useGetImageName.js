//Import assets
import camaron from '@assets/camaron.png';
import coctel from '@assets/coctel.png';
import filete from '@assets/filete.png';
import ordenes from '@assets/ordenes.png';
import pescado from '@assets/pescado.png';
import pulpo from '@assets/pulpo.png';
import sopas from '@assets/sopas.png';
import taco from '@assets/taco.png';
import tostadas from '@assets/tostadas.png';
import postres from '@assets/postres.png';
import bebidas from '@assets/bebidas.png';
import botanas from '@assets/botanas.png';

const useGetImageName=(imageName)=>{

    const assets={
        camaron:()=>camaron,
        coctel :()=>coctel,
        filete :()=>filete,
        ordenes:()=>ordenes,
        pescado:()=>pescado,
        pulpo  :()=>pulpo,
        sopas  :()=>sopas,
        taco   :()=>taco,
        tostadas:()=>tostadas,
        postres:()=>postres,
        bebidas:()=>bebidas,
        botanas:()=>botanas
    }

    return assets[imageName]()
}


export {useGetImageName}