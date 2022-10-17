// Función clasica
function sumar(a, b) {
  return a + b;
}

// Arrow function
const sumar = (a, b) => {
  return a + b;
};

// Arrow function simplificada
const sumar = (a, b) => a + b;

// Arrow function simplificada con un solo parámetro
const cuadrado = a => a * a;

// CARACTERÍSTICAS DE LAS ARROW FUNCTIONS
// 1. No tienen contexto propio. No existe el objeto this.
// 2. Debe declararse antes de ser utilizada.
