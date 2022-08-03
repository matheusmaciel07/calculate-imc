function chamandoFormulario() {
    
// Capturar meus inputs do formulario dentro de uma variavel 
const form = document.querySelector('.formulario');
const resultado = document.querySelector('.resultadoimc');
const dadosArray = [];
    function recebeDadoFormulario(evento) {
        evento.preventDefault();
        const altura = form.querySelector('.inputAltura');
        const peso = form.querySelector('.inputPeso');
       
        
        const converPeso = Number.parseFloat(peso.value);
        const converAltura = Number.parseFloat(altura.value);

        // Calculando IMC peso/(altura*altura)
        const calcImc = converPeso / (converAltura * converAltura);

        // Colocando dados dentro do Array - Lista 
            dadosArray.push({
                Peso: converPeso,
                Altura: converAltura,
                Imc: Number.parseFloat(calcImc.toFixed(2)),
                
            });
            

            if (calcImc.toFixed(2) < 18.5) {
                console.log(dadosArray);
                resultado.innerHTML = `Seu IMC é: ${calcImc.toFixed(2)}. (Abaixo do Peso) `;
            }else if (calcImc.toFixed(2) >= 18 && calcImc.toFixed(2) <= 24) {
                console.log(dadosArray);
                resultado.innerHTML = `Seu IMC é: ${calcImc.toFixed(2)}. (Peso ideal) `;
            }else if (calcImc.toFixed(2) >= 25 && calcImc.toFixed(2) <= 29) {
                console.log(dadosArray);
                resultado.innerHTML = `Seu IMC é: ${calcImc.toFixed(2)}. (Sobre Peso) `;
            }else if (calcImc.toFixed(2) >= 30 && calcImc.toFixed(2) <= 34) {
                console.log(dadosArray);
                resultado.innerHTML = `Seu IMC é: ${calcImc.toFixed(2)}. (Obesidade grau 1) `;
            }else if (calcImc.toFixed(2) >= 35 && calcImc.toFixed(2) <= 39.9) {
                console.log(dadosArray);
                resultado.innerHTML = `Seu IMC é: ${calcImc.toFixed(2)}. (Obesidade grau 2) `;
            }else if (calcImc.toFixed(2) >= 40) {
                console.log(dadosArray);
                resultado.innerHTML = `Seu IMC é: ${calcImc.toFixed(2)}. (Obesidade grau 3 ) `;
            }else if (!converPeso) {
                resultado.innerHTML = `Peso inválido`;
            }else if (!converAltura) {
                resultado.innerHTML = `Altura inválida`;
            }
     }
    
    form.addEventListener('submit', recebeDadoFormulario);

}

chamandoFormulario();      

