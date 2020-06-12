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


// const obterNome = "Debs";
// const repetirNome = 4;
// const contador = 0;

// while (contador < repetirNome) {
//     console.log(obterNome);
//     contador++
// }

// //ou

// for (let i=0; i<repetirNome; i++) {
//     console.log(obterNome);
// }

//////////// 

// 2. Dado um array de objetos: 

// const usuarios = [
//     { nome: "Jordana", idade: 18 },
//     { nome: "Lilian", idade: 28 },
//     { nome: "Janaina", idade: 19 },
//     { nome: "Carla", idade: 25 },
//     { nome: "Maíra", idade: 32 },
//     { nome: "George", idade: 30 },
//     { nome: "Camila", idade: 27 },
//     { nome: "Janaína", idade: 22 },
//     { nome: "Amanda", idade: 50 },
//     { nome: "Raquel", idade: 45 }
// ];

// Imprima todos nome e idade do array que contém objetos usuários.
// A saída deverá ser:

// Jordana
// 18

// Lilian
// 28
// ...
// for (let i = 0; i<usuarios.length; i++) {
//     console.log(usuarios[i].nome);
//     console.log(usuarios[i].idade)
// }


// for (usuario of usuarios) {
//     console.log(usuario.nome)
//     console.log(usuario.idade)
// }

// usuarios.forEach((valorAtual, indice) => {
//     console.log(valorAtual)
//     console.log(indice)
// })


// getElementById, querySelector, addEventListener, evento.preventDefault(), getElementById, createElement, appendChild.

// CSS que será utilizado no JavaScript:

// lista__form
// extrato__table
// listaInputNome
// listaInputValor
// listaInputData

// ________
// Para criar a tabela: 

// tr
// td

// 1. Dado o código com comportamentos nos inputs de pegar os valores e adicionar na tabela, de acordo com o exemplo deste site: https://listagastos.oskojess.repl.co/.

// Com o código disponibilizado, 
// Utilize o index.js para criar esses comportamentos e inserir nos inputs do HTML. 


// const users = [{ PrimeiroNome: 'Ana', ultimoNo: 'Bouley', funcao: 'Desenvolvedora' },
//     { PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
//     { PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
//     { PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
//     { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
//     { PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor' },
//     { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' }
// ];

// function dev(user) {
//     return user.funcao === "Desenvolvedora"
// }

// let filtro = users.filter(dev);

// console.log(filtro);

////////////////////////////

// O map() funciona retornando uma nova array após a aplicação de uma função em todos os elementos da array.

//
//2. Dado um array de objetos chamado produtos: 

// let produtos = [
//     { id: 123, nome: 'Camiseta', cor: 'azul', tamanho: 'P', categoria: 'Vestuário', estoque: 10, disponivel: true, precoUnitario: 15 },
//     { id: 125, nome: 'Regata', cor: 'azul', tamanho: 'GG', categoria: 'Vestuário', estoque: 0, disponivel: false, precoUnitario: 20 },
//     { id: 456, nome: 'Calça', cor: 'preto', tamanho: 'GG', categoria: 'Vestuário', estoque: 1, disponivel: true, precoUnitario: 15 },
//     { id: 982, nome: 'Tênis', cor: 'amarelo', tamanho: '38', categoria: 'Esportes', estoque: 2, disponivel: true, precoUnitario: 125 },
// ];

// // Retorne uma nova array com o id do banana.produto, nome, tamanho e preço unitário que terá o acréscimo de 1.15 sobre o valor dos produtos

// function inflacao(banana) {
//     return {
//         id: banana.id,
//         nome: banana.nome,
//         tamanho: banana.tamanho,
//         precoUnitario: banana.precoUnitario * 1.15
//     }
// }

// const produtosInflacionados = produtos.map(inflacao)

// console.log(produtosInflacionados);


// /////////////

// // 3. reduce() é um método incrivelmente poderoso que nos permite combinar todo o resultado de uma array em um único resultado.

// // Vamos utilizar um reducer pra extrair todos os livros do seguinte conjunto de dados:

// const dados = [{
//         "nome": "Tawany",
//         "livros": [
//             "Harry Potter",
//             "1984"
//         ]
//     },
//     {
//         "nome": "Suzelen",
//         "livros": [
//             "Capitães da Areia",
//             "Menina bonita do laço de fita"
//         ]
//     }
// ]

// let novoArray = []
// const obterLivros = dados.reduce((valorInicial, valorAtual) => {
//         console.log('Valor inicial:', valorInicial)
//         const obterTodosLivros = valorInicial.concat(valorAtual.livros);
//         return obterTodosLivros
//     }, novoArray) // aqui o novo array marca o acumulador. é apenas uma variavel auxiliar

/////////////////
// quiz aula 5

// 1. Uma empresa de Recrutamento de pessoas Desenvolvedoras, solicitou que fizessemos o programa de seleção de recrutamento. 

// Com isso, eles encaminharam duas modelagens para iniciarmos o projeto e testarmos. 

// A primeira parte foi: Criar uma classe chamada Pessoa, atribuir os parametros e propriedades: Nome, Sobrenome e idade. 
// É necessário que na classe Pessoa, contenha um método para mostrar o nome e sobrenome da pessoa cadastrada.. 

// A segunda parte foi: Criar uma classe chama Habilidade, atribuir os parametros e propriedades: Nome da pessoa e habilidades que ela tem.
// É necessário que na classe Habilidade, contenha um método para mostrar as habilidades da pessoa cadastrada.

// Dicas: 
// Utilize o método construtor, insira os parâmetros e referêncie as propriedades da classe com o this, em seguida atribue os parametros do constructor na propriedade equivalente.

// Exemplo ditado:
// criar operador class NomeClasse
// construtor recebe nome, sobrenome
// nome da classe recebe nome do construtor

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}

class Habilidades {
    constructor(nome, habilidade) {
        this.nome = nome;
        this.habilidade = habilidade;
    }
}

const pessoa1 = new Pessoa('Debora', 'Nis', 27);
const pessoa2 = new Pessoa('Danny', 'Nis', 21);

const habDebora = new Habilidades('Debora', 'fotografar');
const habDanny = new Habilidades('Danny', 'programar');

console.log(pessoa1, pessoa2, habDebora, habDanny)