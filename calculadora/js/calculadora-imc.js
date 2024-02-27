//capturar os eventos doformulário 
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e){ //a função aguarda o usuario clicar no botão
    e.preventDefault(); //muda o comportamento padrão do formulário que estamos escutando

   const inputPeso = e.target.querySelector('#peso');
   const peso = Number(inputPeso.value)


   const inputAltura = e.target.querySelector('#altura')
   const altura = Number(inputAltura.value);

    const imc = calcularImc(peso, altura)// azendo a chamada da função

    console.log(imc)

})

//função para calcular o IMC e retornar o valor do imc com duas casas decimais 
function calcularImc(peso, altura){
    let imc = (peso / altura **2 ); //formula do imc
    return imc.toFixed(2); //toFixed(2) foi usado para formatar o numero em 2 casas decimais//
}