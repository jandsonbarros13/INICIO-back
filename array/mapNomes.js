// const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

// const nomesPadr = nomes.map((nome) => {
//     return nome.toUpperCase();
// });

// console.log(nomesPadr)

const alunos = ['dourado', 'lucas', 'diego', 'pedro', 'Luiz']
const medias = [6, 7, 8, 9, 4]

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7
})
console.log(reprovados)