// Faça um script que me retorne o numero de vogais existentes em um texto fornecido

function filtrarSomenteVogais(textoFornecidoUsuario) {    
  // Convertendo o texto para letras minúsculo 
  const textoMinusculo = textoFornecidoUsuario.toLowerCase();

  //Remove espaço do texto
    const textoSemEspacos = textoMinusculo.replace(/\s+/g, '');

  // Definindo as vogais
  const filtrarSomenteVogais = ['a', 'e', 'i', 'o', 'u'];
  // Inicializa o contador
  let cont = 0;

//For para percorrer cada caratere do texto fornecido pelo usuário
  for (let char of textoMinusculo) {
    if (filtrarSomenteVogais.includes(char)) {
    cont++;
    }
  }

  return cont;

}

const textoDoUsuario = " O l á, c O m O  v a i   v o c ê  h o j e? ";
const quantidadeDeVogais = filtrarSomenteVogais(textoDoUsuario);
console.log(`O Número de vogais no texto fornecido é: ${quantidadeDeVogais}`);

