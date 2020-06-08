/*Dado um array de objetos.
 */

const tarefas = [{
<<<<<<< HEAD
    passear: false,
    afazeres: ["Trabalhar", "Estudar", "Fazer comida", "Mercado",
        "Descansar"
    ],
    reuniao: {
        faculdade: "Segunda-feira",
        amigos: "Sexta-feira"
    }
}];

/* Acesse a propriedade do objeto do terceiro item*/

console.log(tarefas[0].reuniao.faculdade)

//repare que é um único objeto dentro desse array, que tem um objeto dentro dele!

//se quisesse acessar a posicao 1 do reuniao sem saber o que tem lá, teria que percorrer o array.
=======
  passear: false,
  afazeres: ["Trabalhar", "Estudar", "Fazer comida", "Mercado",
    "Descansar"],
  reuniao: {
    faculdade: "Segunda-feira",
    amigos: "Sexta-feira"
  },
},
];

/* Acesse a propriedade do objeto do terceiro item*/

//variável auxiliadora para fazermos a analise
let acessarTarefas = tarefas[0].reuniao;
//acessar o primeiro item que contém a propriedade reunião.
console.log(acessarTarefas)
>>>>>>> 16746e0639b0e86c10fff246fe8301d629feb56d
