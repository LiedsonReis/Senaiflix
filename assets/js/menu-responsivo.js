const buttonHamburguer = document.getElementById("nav_hamburguer");
const sectionMenuResponsivo = document.getElementById("menu_responsivo");

function abrirMenuResponsivo() {
    //Exibindo 
    sectionMenuResponsivo.style.display = "initial"; 
}

function fecharMenuResponsivo() {
    //Ocultando
    sectionMenuResponsivo.style.display = "none";
}