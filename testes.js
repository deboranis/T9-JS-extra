// function ehMaior(x, y) {
//     if (x > y) {
//         console.log(`O maior número entre ${x} e ${y} é ${x}`)
//     } else if (x < y) {
//         console.log(`O maior número entre ${x} e ${y} é ${y}`)
//     } else {
//         console.log(`${x} e ${y} são iguais`)
//     }
// }

// ehMaior(23, 27);

// Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:

// A função deve retornar com as seguintes notas:
// Se a pontuação for maior que 90, retornar: "A"
// Se a pontuação for maior que 80, retornar: "B"
// Se a pontuação for maior que 70, retornar: "C"
// Se a pontuação for maior que 65, retornar: "D"
// ou "F" 

// function retornarNota(x) {
//     if (x > 90) {
//         return "A"
//     }
//     if (x > 80) {
//         return "B"
//     }
//     if (x > 70) {
//         return "C"
//     }
//     if (x > 65) {
//         return "D"
//     } else {
//         return "F"
//     }
// }

// retornarNota(78);

// 3. Crie uma estrutura switch case na qual armazene o dia da semana
// em que estamos em uma variável auxiliadora.

// Você precisará de uma variável para armazenar,
// durante os cases, o dia da semana.

// Cada dia da semana pode ser um valor:

//    0        1       2      3       4       5      6
//    dom      seg     ter    quar   quin   sext    sab

// Para você conseguir pegar a data de hoje,
// utilize o (new Date().getDay()) como parâmetro.

// Onde
// case 0:
// diaSemana = "Domingo";
// break;
// case 1:
// ...


// let queDiaEh;
// const dia = new Date('August 3, 1995');
// const diaSemana = dia.getDay();

// switch (diaSemana) {
//     case 0:
//         console.log('Domingo')
//         break;
//     case 1:
//         console.log('Segunda-Feira')
//         break;
//     case 2:
//         console.log('Terça-Feira')
//         break;
//     case 3:
//         console.log('Quarta-Feira')
//         break;
//     case 4:
//         console.log('Quinta-Feira')
//         break;
//     case 5:
//         console.log('Sexta-Feira')
//         break;
//     case 6:
//         console.log('Sábado')
//         break;
// }

///////////

// 4. Plano de Viagem:

// Na Agência Turismo é viver, existem alguns planos
// de viagens de acordo com a idade da pessoa.

// A tabela é:

// PLANO TEEN: A partir de 12 anos até 17 anos.
// PLANO PROFISSIONAL: A partir de 18 anos até 29 anos.
// PLANO EXPERIENTE: A partir de 30 anos.

// Faça uma função chamada obterPlanos que receba apenas um parâmetro
// e insira essas condições dentro da função.

// Se não inserirem um valor de acordo com as idades,
// é para retornar: Entrar em contato com a agência de turismo.

// Aqui você pode utilizar:
// If/ else if

// A saída deverá ser algo parecido com:

// obterPlano(12) //SAÍDA: Você pode verificar os nossos pacotes TEEN.

// function obterPlanos(x) {
//     if (x >= 30) {
//         return "Você pode verificar os nossos pacotes Experiente";
//     } else if (x >= 18) {
//         return "Você pode verificar os nossos pacotes Profissional"
//     } else if (x >= 12) {
//         return "Você pode verificar os nossos pacotes Teen"
//     } else {
//         return "Entre em contato com a agência de turismo"
//     }
// }

// obterPlanos(12);


// Dado duas variáveis:

// obterNome > vai armazenar um nome.
// repetirNome > vai armazenar números

// Faça um programam que repita a palavra
// De acordo com a quantidade de vezes que você
// inserir para que essa palavra seja repitida.

// exemplo:
// const obterNome = "Alessandra";
// const repetirNome = 4


// function nomeRepetido(obterNome, repetirNome) {
//     console.log(`${(obterNome)*repetirNome}`)
// }

// nomeRepetido(Debs, 4)

//////////// 

// 2. Dado um array de objetos: 

const usuarios = [
    { nome: "Jordana", idade: 18 },
    { nome: "Lilian", idade: 28 },
    { nome: "Janaina", idade: 19 },
    { nome: "Carla", idade: 25 },
    { nome: "Maíra", idade: 32 },
    { nome: "George", idade: 30 },
    { nome: "Camila", idade: 27 },
    { nome: "Janaína", idade: 22 },
    { nome: "Amanda", idade: 50 },
    { nome: "Raquel", idade: 45 }
];

// Imprima todos nome e idade do array que contém objetos usuários.
// A saída deverá ser:

// Jordana
// 18

// Lilian
// 28
// ...

for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios.nome} ${usuarios.idade}`)
}