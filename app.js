// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
    Challenge: Amigo Secreto
    Reto parte de la ruta de Programacion para Oracle One y Alura
    SELECCIÓN PROGRAMA ONE : G9 LAD
    Aspirante: Brandon Molina
    LinkedIn: www.linkedin.com/in/branmolgon00
    GitHub: https://github.com/srjnsssn
    Fecha de resolucion planteada: 24-07-25
*/


// Declaración de variables
let amigos = [];

// Funciones //

// Funcion para borrar el dato de la caja de texto
function borrarDato() {
    document.getElementById("amigo").value = "";
}

// Funcion para validar el nombre ingresado
function validarNombre(nombre) {
    for (let i = 0; i < amigos.length; i++) {
            if (nombre === amigos[i]) {
                alert("El nombre ya existe, por favor ingresa otro.");
                borrarDato();
                return true; // Retorna false si el nombre ya existe
            }
        }

    return false;
}

// Funcion para agregar un amigo a la lista
function agregarAmigo() {
    let entradaAmigo = document.getElementById("amigo").value;

    if (entradaAmigo === "") {
        alert("Por favor, ingresa un nombre.");
    } else {
        // Agregar el amigo a la lista si no existe
        if (validarNombre(entradaAmigo) === false) {
            amigos.push(entradaAmigo);
            borrarDato();
        }
    }

    // document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la lista antes de mostrarla
    mostrarLista();
}

// Funcion para mostrar la lista de amigos
function mostrarLista() {
    let listaObtenidaHTML = document.getElementById("listaAmigos");
    let largoListaAmigos = amigos.length;
    let amigosIngresados = "";

    for (let i=0; i < largoListaAmigos; i++) {
        amigosIngresados += `<li> ${amigos[i]} </li>`;
    }

    listaObtenidaHTML.innerHTML = amigosIngresados;
}

// Funcion para asegurarse de que la lista no esté vacía
function validarLista() {
    if (amigos.length === 0) {
        return true; // Retorna true si la lista está vacía
    }
}

// Funcion para sortear amigo
function sortearAmigo() {
    let tamanioLista = amigos.length;

    if (validarLista() === true) {
        alert("Por favor, ingresa al menos un amigo antes de sortear.");
    } else {
        let numeroAleatorio = Math.floor(Math.random() * tamanioLista) -1;
        console.log(tamanioLista);
        console.log(numeroAleatorio);
        document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigos[numeroAleatorio]}`;
        document.getElementById("reiniciar").disabled = false; // Deshabilitar el botón de reinicio
    }
}

// Funcion para reiniciar el juego
function reiniciarJuego() {
    location.reload(); // Recargar la página para reiniciar el juego
}