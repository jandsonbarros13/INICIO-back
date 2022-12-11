const pares = [2, 4, 6]
const impar = [1, 3, 5]

const numeros = [...pares, ...impar] //destruction

const [num1, num2, ...outros] = [1, 2, 3, 4, 5, 6]

const [nome1 = 'Pedro'] = []

const pessoas = {
    nome: 'Pedro',
    idade: 30
}

const pessoaTelefone = {...pessoas, telefone: 123456789}

const {nome} = pessoas

// function imprimir(dados) {
//     const {nome, idade} = dados
//     console.log(nome, idade)
// }
// imprimir(pessoas)
function imprimir({nome, idade}) {
    console.log(nome, idade)
}
imprimir(pessoas)

// console.log(pessoas, pessoaTelefone)
// console.log(nome1)
// console.log(num1, num2, outros)
// console.log(numeros)
// console.log(nome)