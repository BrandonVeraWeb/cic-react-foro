// Convertir objeto a string
const user = {
  username: 'fulano',
  password: '123456',
};

const userString = JSON.stringify(user);
console.log(userString); // {"username":"fulano","password":"123456"}
// aunque visualmente se ve como un objeto, es un string
// por lo que no se puede acceder a sus propiedades con el punto, ni con corchetes
// ni tampoco se puede utilizar los métodos de los objetos
// y muchos menos usar destructuring o spead operator

// Convertir string a objeto
const userString2 = '{"username":"fulano","password":"123456"}';
const user2 = JSON.parse(userString2);

console.log(user2); // {username: "fulano", password: "123456"}
// aquí ya si es un objeto
