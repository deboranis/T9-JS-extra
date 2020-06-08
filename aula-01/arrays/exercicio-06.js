/*Separe a seguinte frase onde cada palavra será um item de um array. */

let frase = "Na programação, muitas vezes é errando que se aprende. Permita-se"

/*A forma que terá que ficar:*/

let modificarFrase = ["Na", "programação,",
    "muitas", "vezes", "é", "errando", "que",
    "se", "aprende.", "Permita-se"
]

/* Em seguida, verifique o lenght do array, a saída terá que ser 10*/

let fraseMod = frase.split(' '); //esse método quebra strings em elementos, com esse parâmetro de aspas. a gente sempre usa uma nova variável pra declarar essa modificação.
console.log(fraseMod);