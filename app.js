//ignacio fuentes:

let listaDeAmigos = [];
let amigosAgregados = document.getElementById("amigo");
let amigosEnLista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

//funcion agregar amigo a lista

function agregarAmigo(){
    //mensaje alerta al no ingresar nombre
    if(amigosAgregados.value == ""){
        alert("ingresa un nombre valido")
    }
    //agregar amigo a lista principal
    listaDeAmigos.push(amigosAgregados.value);

    //mostrar en pantalla amigos agregados
    amigosEnLista.innerHTML += `<li>${amigosAgregados.value}</li>`;

    limpiarCaja();
    
}

//limpiar caja nombres

function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}

//sortear amigo

function sortearAmigo(){
    let numeroRandom = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSecreto = listaDeAmigos[numeroRandom];
    resultado.innerHTML = `<li>tu amigo secreto es: ${amigoSecreto}</li>`

}
