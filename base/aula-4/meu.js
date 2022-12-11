const listaLivros = require('./arrayOrdenado')

function dividir(vetor, inicio, fim, busca) {
    const metade = Math.floor((inicio + fim) / 2)
    const atual = vetor[metade]
    if (inicio > fim) {
        return -1
    }
    if(busca === atual.preco) {
        return metade;
    }

    if (busca < atual.preco) {
        return dividir(array, inicio, metade - 1, busca)
    }

    if (busca > atual.preco) {
        return dividir(vetor, metade + 1, fim, busca)
    }
}
console.log(dividir(listaLivros, 0, listaLivros.length - 1, 40))