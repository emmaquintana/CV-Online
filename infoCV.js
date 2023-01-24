//Informacion del CV
const info = {
        "infoBasica": {
            "Nombre y apellido": "Emmanuel Quintana",
            "Edad": 19,
            "Dirección": "Santiago del Estero, Argentina",
            "Contacto": {
                "e-mail": "eqb2021@gmail.com",
                "Linkedin": "https://www.linkedin.com/in/emmanuel-ezequiel-quintana-brú-b059bb244"
            },        
            "Idiomas": {
                "Español": 100,
                "Ingles": 60
            }
        },
        
        "Academico": {
            "Experiencia Laboral": "Ninguna",
            "Puesto": "Estudiante universitario",
            "Experiencia académica" : "Universidad - Curso de capacitación (Argentina Programa)"
        },
        
        "Cualidades": {
            "Cualitativo Personal": "Responsable - Proactivo - Disponibilidad Horaria - Sociable - Colaborativo",
            "Perfil Profesional": "Desarrollador Trainee Web FrontEnd con conocimientos básicos en HTML, CSS, Javascript, JSON, Bootstrap. <br>En camino a convertirme en Desarrollador FullStack con conocimientos basicos ya adquiridos en Java."
        }
}

//SUBTITULOS Y DESCRIPCIONES DEL CV
const subtitulos = document.getElementsByClassName("subtitulo");
const descripciones = document.getElementsByClassName("descripcion");

//Se cambian los subtitulos y las descripciones del CV    
//Se agrega en el html los datos para el cv en la seccion "Info Básica"
function datosInfoBasica()
{
    resetSubtDesc();
    //ZONA DE DATOS PERSONALES
    subtitulos[0].innerHTML = "Datos Personales";
    descripciones[0].innerHTML = "Nombre y apellido: " + info.infoBasica['Nombre y apellido'] + "<br>";
    descripciones[0].innerHTML += "Edad: " + info.infoBasica.Edad + " años" + "<br>";
    descripciones[0].innerHTML += "Direccion: " + info.infoBasica.Dirección + "<br>";

    //ZONA DE CONTACTO
    subtitulos[1].innerHTML = "Contacto"; 
    //Se configura el mail
    const htmlEmail = document.createElement("a");     
    htmlEmail.setAttribute("href", "mailto:eqb2021@gmail.com")
    htmlEmail.innerHTML = info.infoBasica.Contacto['e-mail'];
    descripciones[1].innerHTML = "e-mail: ";
    descripciones[1].appendChild(htmlEmail);
    //Se configura el link para perfil de linkedin
    const htmlLinkedin = document.createElement("a"); //linkedin
    htmlLinkedin.setAttribute("href", `${info.infoBasica.Contacto.Linkedin}`);
    htmlLinkedin.innerHTML = "Click aqui para ver perfil."
    descripciones[1].innerHTML += "<br>Linkedin: ";
    descripciones[1].appendChild(htmlLinkedin);

    //ZONA DE IDIOMAS
    subtitulos[2].innerHTML = "Idiomas";
    descripciones[2].innerHTML = "Español: " + info.infoBasica.Idiomas['Español'] + "%<br>";
    descripciones[2].innerHTML += "Inglés: " + info.infoBasica.Idiomas.Ingles + "%<br>";
}

//Se agrega en el html los datos para el cv en la seccion "Académico"
function datosAcademico() {
    resetSubtDesc();
    
    subtitulos[0].innerHTML = "Experiencia Laboral";
    descripciones[0].innerHTML = info.Academico["Experiencia Laboral"];
    subtitulos[1].innerHTML = "Puesto";
    descripciones[1].innerHTML = info.Academico.Puesto + "<br>";
    subtitulos[2].innerHTML = "Experiencia académica";
    descripciones[2].innerHTML = info.Academico["Experiencia académica"];        
}

function datosCualidades() {
    resetSubtDesc();

    subtitulos[0].innerHTML = "Cualitativo Personal";
    descripciones[0].innerHTML = info.Cualidades["Cualitativo Personal"];
    subtitulos[1].innerHTML = "Perfil Profesional";
    descripciones[1].innerHTML = info.Cualidades["Perfil Profesional"];

}

//Resetea los subtitulos y descripciones dejandolos vacíos
function resetSubtDesc()
{
    subtitulos[0].innerHTML = null;
    descripciones[0].innerHTML = null;
    subtitulos[1].innerHTML = null;
    descripciones[1].innerHTML = null;
    subtitulos[2].innerHTML = null;
    descripciones[2].innerHTML = null;  
}

export { datosInfoBasica, datosAcademico, datosCualidades };