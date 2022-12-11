import chalk from "chalk"
// const numerosPares = [2, 4, 6]
// const numerosImpares = [1, 3, 5]

// const numeros = [...numerosImpares, ...numerosPares]

// const [num1, num2, ...outros] = [1, 2, 3, 4, 5, 6]

// const pessoa = {
//     nome: 'Pedro',
//     idade: 23
// }
// const cliente = {
//     nome: 'Jandson',
//     idade: 23,
//     Produto: 'Crisp',
//     Pagamento: 9.00,
//     Saldo: 1200
// }

// function compra({Produto, Pagamento, Saldo}) {
//     let NovoSaldo = Saldo - Pagamento
//     console.log(`O Cliente comprou um(a) ${Produto} e pagou ${Pagamento} e tirou de um saldo de ${Saldo} e agora ficou com apenas ${NovoSaldo}`)
// }
// compra(cliente)

// // const pessoaComTelefone = {...pessoa, telefone: 1223456667}
// // const {nome} = pessoa

// // function imprimeDados({nome, idade}){
// //     console.log(nome, idade)
// // }
// // imprimeDados(pessoa)

// // console.log(numeros)
// // console.log(num1, num2, outros)
// // console.log(pessoa, pessoaComTelefone)
// // console.log(nome)

const gato = {
    nome: 'Chay',
    nascimento: '25/10/99',
    pelagem: 'Branca',
    statuss: {
        castrada: true,
        vacinada: true,
        valor: 1200
    }
}
console.log(chalk.red(gato))