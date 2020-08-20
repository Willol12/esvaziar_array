//ESVAZIANDO UM ARRAY
let numeros = [1,2,3,4,5,6,7];
let outros = numeros;
//Solução 1
//numero = [];
//console.log(outros);

//Solução 2 método mais recomendavel e mais clean
numeros.length = 0;
console.log(numeros);
console.log(outros);

//Solução 3
//numeros.splice(0,numeros.length);
//console.log(numeros);
//console.log(outros);

//Solução 4 não recomenda usar 
//pois caso tenha muitos numeros vai ter que consumir muito processamento
//while(numeros.length > 0)
//numeros.pop();