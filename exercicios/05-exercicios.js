/*
Classificador de porte automático
Muitos tutores não fazem ideia do porte de seu Dog.
Crie um script que classifique o porte com base no peso de forma simplificada, sendo:
- Até 10kg -> Pequeno; acima disso -> Médio
Use o operador ternário para determinar o porte. Exiba:
- Nome
- Peso
- Porte classificado
Extra: transforme a lógica em uma função (da forma que conseguir)
*/

const nome = "Rewry"
const peso = 5.5

const porte = peso <= 10 ? 'pequeno' : 'medio'

console.log(`----------------------`)
console.log(`Nome do dog: ${nome}`)
console.log(`Peso: ${peso}kg`)
console.log(`Porte classificado: ${porte}`)
console.log(`----------------------`)

//Alternativa com a função (Extra)
function classificadorDePorte(nome, peso) {
    const porte = peso <= 10 ? 'pequeno' : 'medio'

    console.log(`----------------------`)
    console.log(`Nome do dog: ${nome}`)
    console.log(`Peso: ${peso}kg`)
    console.log(`Porte classificado: ${porte}`)
    console.log(`----------------------`)
}
  classificadorDePorte('Rex', 20)
  classificadorDePorte('Princesa', 8)