// Chamando meu formulario dentro de uma variavel
const formulario = document.querySelector('.formulario');
   
    function chamaFormulario(evento) {
        // Previni da pagina atualizar com as informações 
        evento.preventDefault();
        //chamando meus inputs do formulario dentro de uma variavel
        const peso = formulario.querySelector('.inputPeso');
        const altura = formulario.querySelector('.inputAltura');

        //Transforma o valor da variavel peso de string para Numero
        const valorPeso = Number(peso.value);   
        const valorAltura = Number(altura.value);
        // Se peso não for um numero
        if (!valorPeso) {
            exibiPagina('Peso Inválido', false);
            //Se meu peso for invalido ira parar de executa
            return;
        }
        // Se peso não for um numero
        if (!valorAltura) {
            exibiPagina('Altura Inválida', false);
            //Se meu altura for invalido ira parar de executa
            return;
        }
        const imc =  calculaImc(valorPeso, valorAltura);
        const nivelImc2 = nivelImc(imc);
    
        const msg = `Seu IMC é ${imc} ${nivelImc2}.`;
        exibiPagina(msg, true);

    }
    function nivelImc(imc) {
        const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau1', 'Obesidade grau 2', 'Obesidade grau 3'];
        
        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }
    
    // Função calcula IMC 
    function calculaImc(valorPeso, valorAltura) {
        const imc = valorPeso / (valorAltura * valorAltura); 
        return imc.toFixed(2);
    };
        //Função cria paragrafo
    function criaParagrafo() {
        //Cria um paragrafo na minha <div>
        const paragrafo = document.createElement('p');
        return paragrafo;
    }


    // Exibi informação na minha <div>
    function exibiPagina(msg, isValid) {
        const resultado = document.querySelector('.resultadoimc');
        resultado.innerHTML = ''; 
        //Chama meu paragrafo criado na função criaParagrafo();     
        const paragrafo = criaParagrafo();  

        // Condição se é valido ou não
        if (isValid ){ // se meu paragrafo for valido 
            paragrafo.classList.add('paragrafo-resultado');
        } else{
            paragrafo.classList.add('paragrafo-resultado-invalido');
        }
        paragrafo.innerHTML = msg;
        // Coloca meu paragrafo na div resultado com a mensagem criada na linha anterior
        resultado.appendChild(paragrafo);
    }

        //Evita que meu subtmit dispare toda hora que eu clicar nele 
    formulario.addEventListener('submit',chamaFormulario);