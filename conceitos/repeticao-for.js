 /*
 quantidadeCalculada = 3

 for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
    console.log(`Dando o petisco de n. ${quantidadeDePetiscos}`)
 }
 const gatos = ['Lessie', 'Pony', 'Fumaca']

 for (let indice = 0; indice <gatos.length;indice++){
     console.log(`Dando o Petisco para ${gatos[indice]}`)
 }
*/
 const quantidadeCalculada = 3
 const gatos = ['Lessie', 'Mimi', 'Lili']
 for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
    // acao de dar o petisco
    console.log(`Dando o petisco de nº: ${quantidadeDePetiscos}`)
    for (let indice = 0; indice < gatos.length; indice++) {
        console.log(`Dando o petisco para ${gatos[indice]}`)
    }
}