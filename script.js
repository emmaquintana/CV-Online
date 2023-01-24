//Se obtienen los datos del titular del CV
import { datosInfoBasica, datosAcademico, datosCualidades } from './infoCV.js';

//BOTONES
const botonInfoBasica = document.getElementById("li-infoBasica");
const botonAcademico = document.getElementById("li-academico");
const botonCualidades = document.getElementById("li-cualidades");

//TITULO DE LA SECCIÓN DEL CV
const tituloInfo = document.getElementById("tituloInfo");

//ARRAY DE BOTONES
const arrayBotones = [botonInfoBasica, botonAcademico, botonCualidades];


//Se cambia el estilo de los botones y el titulo
//El 1er parametro corresponde a la posicion del boton que se presiona
function botonPresionado(pos, noPOS, noPOS2) { 

    //Se aplican estilos al boton presionado y se cambia el titulo
    arrayBotones[pos].style.backgroundColor = "rgb(121, 202, 1)";
    arrayBotones[pos].style.color = "white";
    arrayBotones[pos].style.transfrom = "scale(1.050)";    
    tituloInfo.textContent = `${arrayBotones[pos].textContent}`;
    tituloInfo.style.fontWeight = 800;    

    //Los demas botones se resetean
    arrayBotones[noPOS].style.backgroundColor = "white";
    arrayBotones[noPOS].style.color = "black";
    arrayBotones[noPOS].style.transform = "scale(1.0)";
    arrayBotones[noPOS2].style.backgroundColor = "white";
    arrayBotones[noPOS2].style.color = "black";
    arrayBotones[noPOS2].style.transform = "scale(1.0)";
}

botonInfoBasica.addEventListener("click", () => {
    botonPresionado(0, 1, 2);
    init();
    datosInfoBasica();
});

botonAcademico.addEventListener("click", () => {
    botonPresionado(1, 0, 2)
    datosAcademico();
});

botonCualidades.addEventListener("click", () => {
    botonPresionado(2, 1, 0)
    datosCualidades();
});


//La pagina comenzará teniendo estos datos
function init()
{
    botonPresionado(0, 1, 2);
    datosInfoBasica();     
}


window.onload = init;