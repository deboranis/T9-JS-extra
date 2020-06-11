<<<<<<< HEAD
// const soma = (x, y) => { return (x + y) }

// soma(3, 4);

/////////

// const obj = {
//     nome: "Mulheres, raça e classe",
//     descrição: "Da mesma forma que gênero é a maneira como a raça é vivida."
// }

// const retornarBiografia = () => {
//     console.log(obj.nome)
//     console.log(obj.descrição)
// }

// retornarBiografia();

// 3. Reescreva a função abaixo utilizando
// Arrow Function 

const objetoUsuario = (id, nome) => {
    return {
        id: id,
        nome: nome
    }
}

objetoUsuario(123, 'Debs')
=======
const alunas = ["Od", "Nayla", "Sindi",
  "Maria", "Liana", "Viviane",
  "Lorena", "Nathalia",
  "Raquel", "Raquel", "Marisa",
  "Nathy", "Patricia",
  "Jordana", "Ilza",
  "Talisia", "Débora", "Tabita", "Gabrielli",
  "Claudia", "Sara", "Jemima", "Suzelen", "Giulia", "Vanessa",
  "Carol", "Ariane", "Millena", "Adela",
  "Gabi Fernandes"];

const lista = document.getElementById("lista-alunas");

alunas.forEach((aluna) => {
  let item = document.createElement("li");
  item.textContent = aluna;

  lista.appendChild(item)


})

>>>>>>> 3e2bc54b6872d7fdafbdb94c7179764dd8d2f8fc
