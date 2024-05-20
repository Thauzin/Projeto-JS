
document.getElementById('calcular').addEventListener('click', function(e) { 
 e.preventDefault(); 

 var peso1 = document.getElementById('peso'); 
 var peso = parseInt(peso1.value); 

 var altura1 = document.getElementById('altura'); 
 var altura = parseFloat(altura1.value); 




 if (isNaN(peso) || isNaN(altura)) {  //isNaN() é usado para verificar se peso ou altura não são números válidos 
     alert("Por favor, insira valores válidos para peso e altura");
     return; 
 }

 else {

     
 total = peso/(altura*altura); 
 var text = document.getElementById('texto'); 
 text.innerHTML = "<p>Seu IMC é de " + total.toFixed(1) + "</p>"; 


 
 var calc = document.getElementById('calculo'); 
 calc.style.display = "block"; // Torna a div visível

 }





      
     
 }); 

 document.getElementById('voltar').addEventListener('click', function() {
 
 location.reload(); // Atualiza a página


 });

