
export function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

export function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === 'M';

}

export function calcularConsumoDeRacao(nome,idade,peso){  
    return (peso * 300);
  } 


export function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') {
    return 'brincar dentro de casa';
  }    
    else {
      return 'livre para brincar fora de casa';
  }
}

export function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca'); 
    }, 1000);
  });
}

