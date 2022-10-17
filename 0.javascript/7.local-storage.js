// Guardar información en el Local Storage
window.localStorage.setItem('nombre', 'Fulano');
window.localStorage.setItem('apellido', 'De Tal');

// Obtener información del Local Storage
const nombre = window.localStorage.getItem('nombre');
const apellido = window.localStorage.getItem('apellido');

console.log(nombre); // Fulano
console.log(apellido); // De Tal

// Actualizar información del Local Storage
window.localStorage.setItem('nombre', 'Fulanito');
window.localStorage.setItem('apellido', 'De Tal y Cual');

const nombre2 = window.localStorage.getItem('nombre');
const apellido2 = window.localStorage.getItem('apellido');

console.log(nombre2); // Fulanito
console.log(apellido2); // De Tal y Cual

// Eliminar información del Local Storage
window.localStorage.removeItem('nombre');
window.localStorage.removeItem('apellido');

// Eliminar todo el Local Storage
window.localStorage.clear();

// El local storage solo almacena strings
// por lo que si queremos guardar un objeto
// primero debemos convertirlo a string
