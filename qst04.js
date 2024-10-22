// 4. Verificar Números Primos
// Crie um vetor com 10 números inteiros. Use uma estrutura condicional e um loop para verificar e imprimir quais desses números são primos.

const primos = [7, 4, 6, 3, 313, 19, 33, 6, 1098230, 9]

let eh_primo = (num) => {
    if (num <= 1) return false; 
    for (let i = 2; i <= num/2; i++) { // nao precisa parassar pela metade, pq se passar é pq tem um divisor mario
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let p = 0; p < primos.length; p++) {
    if (eh_primo(primos[p])){
        console.log(primos[p])
    }
}