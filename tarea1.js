//1
const array = [1,3,5,7,9,2,6,4,8];

array.sort(function (a,b){
    return a- b;
});

console.log(array)

//2
const sabores = ['crema del cielo', 'granizado', 'chocolate', 'dulce de leche', 'crema', 'furtillas', 'bannana split', 'almendrado', 'amarena'];

sabores.map(sabor => console.log(`- ${sabor}`))

//3
resultado = 1;

factorialFinal = 120;

for(i = 1; i <= factorialFinal; i++){
    resultado = resultado*i;
}

console.log(`\nEl numero ${resultado} se determina a través de la multiplicación de los numeros del 1 al 9 (factorial)`);