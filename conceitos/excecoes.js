try{
    console.log(`Tentando alimentar o pet`)
   // throw new Error()(`pet nao quis alimento`)
}  
 catch (excecao) {
    console.log(excecao)
    console.log(excecao.name)
    console.log(excecao.message)

} finally {
    console.log(`sempre serei executado`)
}
