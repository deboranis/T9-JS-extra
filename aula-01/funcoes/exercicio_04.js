/*Você sabe quantos anos seu cão tem em anos humanos, mas e quanto a anos de cachorro? Calcule-o!
Escreva uma função chamada calcularIdadeCachorro:

leva 1 parâmetro/argumento: a idade do seu cachorro.
calcula a idade do seu cão com base na taxa de conversão de 1 ano humano a 7 anos de cão.
exibe o resultado na tela da seguinte maneira: "Seu cachorro tem NN anos em anos de cachorro!"
Chame a função três vezes com diferentes conjuntos de valores.
*/

// Faça uma função que pegue o ano que a pessoa nasceu e retorne a idade dela. 

function calcularIdade(ano) {
    const anoAtual = new Date().getFullYear(); // metodo pro codigo buscar a data atual e assim a funcao poder ser usada em qualquer ano 
    const calcularIdade = anoAtual - ano;
    console.log(`A sua idade é ${calcularIdade} anos.`)
}

const resultadoIdade = calcularIdade(1992);

console.log(resultadoIdade);