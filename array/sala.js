// const alunos = [
//     'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
// ];

// const sala1 = alunos.slice(0, alunos.length / 2)
// const sala2 = alunos.slice(alunos.length  / 2)
// console.log(sala1)
// console.log(sala2)

// const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

// nomes.splice(3, 2, 'eu') // tira os indices
// console.log(nomes)

// const salaJS = ["Evaldo", "Camis", "Mari"];
// const salaPython = ["Ju", "Leo", "Raquel"];

// const salaUnificada = salaJS.concat(salaPython) //junta dois arrays

// console.log(salaUnificada)

// const alunos = ["João", "Juliana", "Ana", "Caio"];
// const medias = [10, 8, 7.5, 9];

// const listaDeAlunos = [alunos, medias]

// console.log(`A aluna da posiçao 1 da lista de aluno e: ${listaDeAlunos[0][1]} ja a nota e ${listaDeAlunos[1][1]}`) //primeiro o arraye o segundo o indice do array

// const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
// const arrayConcat = arrayOriginal.concat("André", "Fernanda")

// console.log(arrayConcat)
// console.log(arrayOriginal)

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibirNomeeNota(aluno) {
    if(listaDeAlunosEMedias[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = listaDeAlunosEMedias[0].indexOf(aluno)

        const mediaDoAluno = listaDeAlunosEMedias[1][indice]

        console.log(`${aluno} tem a media ${mediaDoAluno}`)
    } else {
        console.log('Aluno naõ encontrado')
    }
}
exibirNomeeNota("Caio")