// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Creo un Array para almacenar los nombre.
let amigos = [];

console.log(amigos);


/**
 * 
 * Implemento la funcion para agregar amigos.
 *  
 */

function agregarAmigo () {
    let IngresaNombreAmigo = document.getElementById('amigo');
    let nombreDeAmigo = IngresaNombreAmigo.value.trim();

    // Luego de Haber ingresado, Valido la entrada para que el campo no este vacio.

    if (nombreDeAmigo === '') {
        alert('Por favor, inserte un nombre para agregar en amigo secreto')
        return;
    }

    // Luego de validar con la alerta. Se actualiza el Array de amigos, para mirar si es valido, añadirlo al arrglo.
    amigos.push(nombreDeAmigo)

    
    // Luego de haber validado, Se hace el proceso de LIMPIAR EL CAMPO DE ENTRADA, despues de añadir el nombre.
    IngresaNombreAmigo.value = '';
}

/**
 * 
 * Implementacion de una Funcion para actualizar la lista de amigos
 * 
 */

//


