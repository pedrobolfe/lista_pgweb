// 2. Contagem Regressiva
// Escreva um programa que solicite ao usuário um número inteiro positivo e, em seguida, use um loop para imprimir uma contagem regressiva de 10 até esse número, parando se o número for menor que 10.

let num = parseInt(prompt("numero: "));

if(num >= 10) {
    for (let i = 10; i < num; i++) {
        console.log(i);
    }
}