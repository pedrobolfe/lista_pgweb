//5. Média de Notas
// Crie um vetor que armazena a nota de 5 alunos. Depois, use um loop para calcular a média dessas notas e imprima se a média é maior ou igual a 7 (aprovado) ou menor (reprovado).

const notas = [50, 60 ,80 , 90, 78]
let aux = 0;

for (let i = 0; i < notas.length; i++) {
    aux += notas[i];
}

media = aux/5

if (media >= 70){
    console.log("aprovados")
} else {
    console.log("reprovados")
}