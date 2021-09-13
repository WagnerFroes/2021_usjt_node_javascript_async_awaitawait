

// function heloo (nome) {
//     return `Oi, ${nome}`
// }

// function hello (nome){
//     return Promise.resolve `Oi, ${nome}`
// }

// async function hello (nome){
//     return `Oi, ${nome}`
// }

// const boasVindas = hello (`Jose`)
// boasVindas
// .then((resultado) => {
//     console.log(resultado)
// })

function fatorial (n){
    if (n < 0) return Promise.reject("Olha, nao da para calcular fatorial de valor negativo.")
    let res = 1
    for (let i = 2; i <= n; i++)
        res *= i
        return Promise.resolve(res)
}

// opcao 1 ASYNC
async function chamadaComAsyncAwait() {
    try{
    const f1 = await fatorial(5)
    console.log(f1)
    const f2 = await fatorial(-1)
    console.log(f2)
    }
    catch (erro){   
        console.log ("Tratando o erro: " + erro)
    }
}

chamadaComAsyncAwait()



// opcao 2
// function chamadaComThenCatch(){
//     fatorial(5)
//     .then (res => console.log (res))
//     .catch (erro => console.log (erro))

//     fatorial(-1)
//     .then (res => console.log (res))
//     .catch (erro => console.log (erro))
// }

// chamadaComThenCatch()

