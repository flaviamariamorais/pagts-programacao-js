// Função que conta as vogais em um texto fornecido pelo usuário
 function filtrarSomenteVogais(textoFornecidoUsuario) {
  // Converte o texto para letras minúsculas 
  const textoMinusculo = textoDoUsuario.toLowerCase();

  // Definindo as vogais
  const vogais = ['a', 'e', 'i', 'o', 'u'];

  // Converte o texto em um array e filtra apenas as vogais
  const vogaisEncontradas = Array.from(textoMinusculo).filter(char => vogais.includes(char));

  // Mostra a quantidade de vogais encontradas
  return vogaisEncontradas.length;
}

const textoDoUsuario = " O l á, c O m O  v a i   v o c ê  h o j e? ";
const quantidadeDeVogais = filtrarSomenteVogais(textoDoUsuario);
console.log(`O Número de vogais no texto fornecido é: ${quantidadeDeVogais}`);