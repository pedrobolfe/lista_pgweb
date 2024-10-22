// 3. Soma de Elementos de um Vetor
// Crie um vetor de números e utilize um loop para calcular a soma de todos os elementos do vetor. Em seguida, imprima o resultado.

arr = [1,2,3,43,4,4,23,12,3,2]
aux = 0
for (let i = 0; i < arr.length; i++) {
    aux+= arr[i]
}

console.log(aux)