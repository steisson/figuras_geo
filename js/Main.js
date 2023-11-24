// variable para todo el documento
var figura = document.getElementById("figura");
var titulo = document.querySelector(".fig");


function circulo() {
    figura.classList.toggle("circulo");
    titulo.innerText = "Cambiar a circulo";
}

function rectangulo(){
    figura.classList.toggle("rectangulo");
    titulo.innerText = "Cambiar a rectangulo";
}

function rombo(){
    figura.classList.toggle("rombo");
    titulo.innerText = "Cambiar rombo";
}

function imagen(){
    figura.classList.toggle("imagen");
    titulo.innerText = "Cambiar a una imagen en el cuadrado";
}

function gif(){
    figura.classList.toggle("gif");
    titulo.innerText = "Cambiar un git en el cuadrado";
}

function triangulo(){
    figura.classList.toggle("triangulo");
    titulo.innerText = "Cambiar a un rectangulo";
}

function hoja(){
    figura.classList.toggle("hoja");
    titulo.innerText = "Cambiar a una hoja";
}

function pacman(){
    figura.classList.toggle("pacman");
    titulo.innerText = "Cambiar a un pac-man";
}

function huevo(){
    figura.classList.toggle("huevo");
    titulo.innerText = "Cambiar a un huevo";
}
function trapecio(){
    figura.classList.toggle("trapecio");
    titulo.innerText = "Cambiar a un trapecio";
}

function moveTop(){
    figura.classList.toggle("moveTop");
    titulo.innerText = "movar el cuadro hacia arriba";
}

function moveLeft(){
    figura.classList.toggle("moveLeft");
    titulo.innerText = "movar el cuadro hacia izquierda";
}

function moveButton(){
    figura.classList.toggle("moveButton");
    titulo.innerText = "movar el cuadro hacia abajo";
}

function moveRight(){
    figura.classList.toggle("moveRight");
    titulo.innerText = "movar el cuadro hacia la derecha";
}


function luna(){
    figura.classList.toggle("luna");
    titulo.innerText = "Cambiar a una luna";
}


function panelLateral(){
    const panel = document.querySelector(".panel-lateral");

    panel.classList.toggle("active");
    titulo.innerText = "Cambiar a panel lateral";
}

function panelSuperior(){
    const panel = document.querySelector(".panel-superior");

    panel.classList.toggle("active");
    titulo.innerText = "Cambiar a panel superiror";
}


function imagenFondo(){
    const body = document.querySelector(".imagenFondo");
    body.classList.toggle("active");
    let titulo = document.querySelector(".fig");
    titulo.innerText = "Cambiar una imagen de fondo ";
} 

function cambioColorPrin() {
    const parteizquierda = document.querySelector(".left");
    const partederecha = document.querySelector(".right");

    parteizquierda.classList.toggle("active");
    partederecha.classList.toggle("active");

    let titulo = document.querySelector(".fig");
    titulo.innerText = "Haz cambiado el color de la línea principal";

    let figura = document.getElementById("figura");
    figura.classList.toggle("cambioColorPrin");
} 

function spaceInvader(){
    figura.classList.toggle("spaceInvader");
    titulo.innerText = "Cambiar a una figura retro";
}
