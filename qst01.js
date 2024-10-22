// 1. Números Pares em um Vetor
//Crie um vetor com 10 números inteiros aleatórios (entre 1 e 100). Use um loop para percorrer o vetor e imprima apenas os números pares.
let arr = []
for (let i = 0; i < 10; i++) {
    arr[i] = parseInt(Math.random() * 100 + 1)
    if (arr[i]%2 == 0){
        console.log(arr[i])
    }
}