// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Creo un Array para almacenar los nombre.
let amigos = [];

console.log(amigos);


/**
 * 
 * Implemento la funcion para agregar amigos.
 *  
 */

function agregarAmigo() {
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

/**
* 
* Implementacion de una Funcion para actualizar la lista de amigos
* 
*/
    // Obtener el elemento de la lista
    let listaAmigosElement = document.getElementById('listaAmigos')

    // Limpiar la lista existente.
    listaAmigosElement.innerHTML = "";

    // Iterar sobre el arreglo.

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];

        // Creacion del Elemento en Formato <li>
        let elementLi = document.createElement('li');
        elementLi.textContent = amigo; // Aqui se asignara el nombre del amigo en texto del <li>

        // Agregar elementos a la lista
        listaAmigosElement.appendChild(elementLi);
    }

}

/**
 * 
 * Implmenta una funcion para sortear los amigos
 * 
 */

function sortearAmigo() {
    // Validar que haya amigos Disponibles.
    if (amigos.length === 0) {
        alert('Ingresa amigos para poder sortearlo.')
        return;
    }

    // Generar un indice aletorio.
    let aletorioIndice = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado.
    let sorteoAmigos = amigos[aletorioIndice];

    // Mostrar los resultamos.
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li> El Amigo sortiado es: ${sorteoAmigos}</li>`;

}


/**
 * 
 * -------NOTA-------
 * 
 * Gracias por la oportunidad. Quiero decir que espero una retroalimentación
 * para asi mejorar y poder aprender mucho mas espero poder cogerle fuerte al JavaScript y  algunos lenguajes de mas.
 * Cabe decir que el codigo tiene orden acorde lo pedido de cada tarjeta paso a paso.
 * 
 * Gracias por sus atención prestada.
 */