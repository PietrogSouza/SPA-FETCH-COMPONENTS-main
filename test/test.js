// // let x = 5
// // let anna = (num) => console.log(num * 5)
// let result = "Not Active.";
// let isActive = false;
// console.log(result, isActive)

// if (isActive = true) {
//     let resultado
// }


//-------------------------------------------------------------------------------------------------------------//


// try{
// // x = y + 1

// // anna(5)

// }catch(erro){
//     let text = `
//     <strong>Nome do erro:</strong> ${erro.name} <br />
//     <strong>Mensagem:</strong> ${erro.message} <br />
//     <strong>Stack:</strong> <span>${erro.stack}</span>
//     `;

//     document.body.innerHTML = text
// };


//-------------------------------------------------------------------------------------------------------------//


/*Testando a função carregarComponente*/
// const componente = document.querySelector('#app')

// const carregarComponente = async (caminho, container) => {
//     try{
//         const resposta = await fetch(caminho);

//         if (!resposta.ok) {
//             throw new Error('Erro ao carregar componente');
//         }

//         const html = await resposta.text();

//         container.innerHTML = html;
        
//     }catch(erro){
//         console.warn(erro)
//     }
// }

// const url = 'c-test.html'
// carregarComponente(url, componente);

//-------------------------------------------------------------------------------------------------------------//


// try{
//     let idade = -5

//     if (idade < 0) {
//         let erro = new Error('Idade inválida')
//         erro.codigo = 1001;
//         erro.tipo = 'VALIDACAO'

//         throw erro;
//     }
// } catch (erro) {
//     let text = `
//     <strong>Nome do erro:</strong> ${erro.name} <br />
//     <strong>Mensagem:</strong> ${erro.message} <br />
//     <strong>Código:</strong> ${erro.codigo} <br />
//     <strong>Tipo:</strong> ${erro.tipo} <br />
//     <strong>Stack:</strong> <span>${erro.stack}</span>
//     `;

//     document.body.innerHTML = text;
// };


//-------------------------------------------------------------------------------------------------------------//



// try{
//     let saldo = 0

//     if (saldo <= 0) {

//         let erro = geradorErro(703, 'FINANCEIRO', 'Saldo Insuficiente')
//         throw erro
//     }

// } catch(erro){
//      let text = `
//     <strong>Mensagem:</strong> ${erro.message} <br />
//     <strong>Código:</strong> ${erro.codigo} <br />
//     <strong>Tipo:</strong> ${erro.tipo} <br />
//     `;

//     document.body.innerHTML = text

//     console.log(erro)

// };

// function geradorErro(codigo, tipo, mensagem) {
//     let erro = new Error(mensagem)

//     erro.codigo = codigo
//     erro.tipo = tipo
//     return erro
// };


//-------------------------------------------------------------------------------------------------------------//


fetch('https://viacep.com.br/ws/01001000/json/').then(resposta => resposta.json()).then(dados => console.log(dados))

fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json()) // converte o JSON para objeto JavaScript e estrai os dados
.then(dados => console.log(dados)) // exibe os dados extraídos
.catch(error => console.warn(error))

const consulta = fetch('https://viacep.com.br/ws/01001000/json/')
console.log(consulta);





