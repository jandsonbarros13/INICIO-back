// // // // const numeros = [100, 200, 300, 400, 500, 600]

// // // // for (let indice = 0; indice < numeros.length; indice++) {
// // // //     console.log(numeros[indice])
// // // // }

// // // const notas = [10, 5.6, 8, 7.8]

// // // let somaDasNotas = 0;

// // // for (let i = 0; i < notas.length; i++) {
// // //     somaDasNotas += notas[i];
// // // }

// // // const media = somaDasNotas / notas.length;
// // // console.log(media)

// // const notas = [10, 9, 7, 7.6]

// // let somaDasNotas = 0

// // for (let nota of notas) {
// //     somaDasNotas += nota
// // }

// // const media = somaDasNotas / notas.length;

// // console.log(`A media das notas e ${media}`)

// const numerosPares = [];

// for (let i = 0; i <= 100; i += 2) {
//   numerosPares.push(i);
// }

// console.log(numerosPares);

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

notas.forEach(function (nota, indice) {
    somaDasNotas += nota;
    console.log(indice)
});

const media = somaDasNotas / notas.length;

console.log(`A media das notas e ${media}`)