
 var numeros = [];
 numeros[0] = soliticaPrimeiroNumero();
 numeros[1] = soliticaSegundoNumero();
 var resultadoMultiplica = multiplica(numeros);
 alert('O resultado da multiplicação é igual a: ' + resultadoMultiplica); 
 function soliticaPrimeiroNumero(){
    var numero1 = prompt("Insira o primeiro número: ");
    if(numero1 < 0){
         alert("O número precisa ser inteiro e positivo");
     return soliticaPrimeiroNumero();
         }else{
         return numero1;
         }
         }

         function soliticaSegundoNumero(){
             var numero2 = prompt("Insira o segundo número: ");
             
             if(numero2 < 0){
             alert("O número precisa ser inteiro e positivo");
             return soliticaSegundoNumero();
             }else{
             return numero2;
             }
             }
             
              function multiplica(numeros){
              var resultado = 0;
              
              //Os números a serem divididos são acessados através dos índices do array
              resultado = numeros[0] * numeros[1];
              return resultado;
              }
      

