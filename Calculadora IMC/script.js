
  


   function calcular() {
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    const converteAltura= parseInt(altura) /100
    const quadrado =  converteAltura * converteAltura
    const resultado = (parseInt(peso) /quadrado)
    const respostas = document.getElementById('resposta')


       if (peso !== '' && altura !== '' && peso !== ''){

         if (resultado < 18.5) { 
          
            respostas.textContent = 'Abaixo do Peso: ' + resultado.toFixed(2);
            respostas.style.color = "red";

        }

        if (resultado >= 18.5 && resultado <= 24.9) { 
          
            respostas.textContent = 'Peso Ideal: ' + resultado.toFixed(2);
            respostas.style.color = "green";

        }

        if (resultado >= 24.9 && resultado <= 29.9) { 
          
            respostas.textContent = 'Levemente acima do peso: ' + resultado.toFixed(2);
            respostas.style.color = "orange";

        }

        if (resultado >= 29.9 && resultado <= 34.9) { 
          
            respostas.textContent = 'Obesidade grau I: ' + resultado.toFixed(2);
            respostas.style.color = "orange";

        }

        if (resultado >= 34.9  && resultado <= 39.9) { 
          
            respostas.textContent = 'Obesidade grau II: ' + resultado.toFixed(2);
            respostas.style.color = "red";

        }

        if (resultado > 40){ 
          
            respostas.textContent = 'Obesidade grau III: ' + resultado.toFixed(2);
            respostas.style.color = "red";

        }

      

       }

       else {
           respostas.textContent = "Preencha todos os campos!!";
       }
    
    }
 

      
       
        
    
       