const url = 'https://viacep.com.br/ws/01001000/json/'
const consulta = fetch(url);

consulta.then((resposta) => {

    if(!resposta.ok){
        throw new Error('Cep Inválido')
    }
    const resp = resposta.json()
    console.log(resp)
    return resp

})
.then((dados) => {

    console.log(dados)

})
.catch((error) => {
    
    console.warn(error)

})