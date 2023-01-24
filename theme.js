const botonTema = document.getElementById("btn_cambiarTema");
const logoTicmas = document.getElementsByTagName("img")[0];
const btn_cambiarTema = document.getElementById("btn_cambiarTema");

botonTema.addEventListener("click", () => {
    
    let root = document.querySelector(':root');
    let rootStyle = getComputedStyle(root);
    let colorBgBody = rootStyle.getPropertyValue('--body-bg-color');    
    colorBgBody = colorBgBody.trim(); //getPropertyValue genera un espacio al inicio del sting. Se soluciona con trim    


    if (colorBgBody === "white") { //Se toma al color de fondo del body como referencia
        root.style.setProperty('--header-bg-color', '#2E2E2E');
        root.style.setProperty('--header-txt-color', 'white');
        root.style.setProperty('--body-bg-color', '#2E2E2E');
        root.style.setProperty('--cv_container-bg-color', '#2E2E2E');
        root.style.setProperty('--cv_container-boxShadow-color', 'white');
        root.style.setProperty('--cv_container-txt_titDesc-color', 'white');
        root.style.setProperty('--hr-color', 'rgb(153, 153, 153)');
        root.style.setProperty('--btn_tema-boxShadow-color', 'rgb(245, 245, 245)');
        root.style.setProperty('--btn_tema-bg-color', 'rgb(0, 5, 64)');
        logoTicmas.style.filter = "drop-shadow(0px 0px 4px white)";    
        btn_cambiarTema.style.backgroundImage = "url(rss/luna.png)";
    } 
    else {
        root.style.setProperty('--header-bg-color', 'white');
        root.style.setProperty('--header-txt-color', 'black');
        root.style.setProperty('--body-bg-color', 'white');
        root.style.setProperty('--cv_container-bg-color', 'white');
        root.style.setProperty('--cv_container-boxShadow-color', 'rgba(0, 0, 0, 0.351)');
        root.style.setProperty('--cv_container-txt_titDesc-color', 'black');
        root.style.setProperty('--hr-color', 'rgb(245, 245, 245)');
        root.style.setProperty('--btn_tema-boxShadow-color', 'rgba(0, 0, 0, 0.351)');
        root.style.setProperty('--btn_tema-bg-color', 'white');        
        logoTicmas.style.filter = "drop-shadow(0px 0px 0px)";
        btn_cambiarTema.style.backgroundImage = "url(rss/sol.png)";
    }
});