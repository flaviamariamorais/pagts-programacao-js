
//crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem strings.

function filtroDeInteiros(filtroLista) {
  // selecionando apenas os numeros inteiros
  return filtroLista.filter(item => typeof item === 'number' && Number.isInteger(item));
}

    // definindo a lista
const ListaDefinida = ['R', 1, 'e', 2.5, 'W', 3, 'r', 4, 'y', 5.6 ];
    // Extraindo a lista de numeros inteiros
const listaSomenteInteiros = filtroDeInteiros(ListaDefinida);
    // Imprimindo lista
console.log(listaSomenteInteiros);