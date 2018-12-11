const variableA = 1;
const variableB = 1;

if(variableA == variableB){
     document.getElementById('if').innerHTML = 'Las variables son iguales';
     console.log('Las variables son iguales')
   }else{
     document.getElementById('if').innerHTML = 'Las variables son diferentes';
   console.log('Las variables son diferentes')
   }


const variable_Numero = 1;
const variable_Objeto_Numero = new Number(20) ;

if(variable_Numero === variable_Objeto_Numero){
     document.getElementById('if-estricto').innerHTML = 'Las variables son iguales';
     console.log('Las variables son iguales')
   }else{
     document.getElementById('if-estricto').innerHTML = 'Las variables son diferentes';
    console.log('Las variables son diferentes')
   }