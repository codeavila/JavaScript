//If Basico
const variableA = 1;
const variableB = 1;

if(variableA == variableB){
     document.getElementById('if').innerHTML = 'Las variables son iguales';
     console.log('Las variables son iguales')
   }else{
     document.getElementById('if').innerHTML = 'Las variables son diferentes';
   console.log('Las variables son diferentes')
   }

//If con operador de igualdad estricto
const variable_Numero = 1;
const variable_Objeto_Numero = new Number(20) ;

if(variable_Numero === variable_Objeto_Numero){
     document.getElementById('if-estricto').innerHTML = 'Las variables son iguales';
     console.log('Las variables son iguales')
   }else{
     document.getElementById('if-estricto').innerHTML = 'Las variables son diferentes';
    console.log('Las variables son diferentes')
   }

//If con Operador logico &&

const varIFA = 20; 
const varIFB = 20; 

const varIFD = 10; 
const varIFE = 15; 

if( (varIFA === varIFB) && (varIFD === varIFE) ){ 
     document.getElementById('if-opeLogico-Y').innerHTML = 'Las variables son iguales';
     console.log('Son iguales');
   }else{
     document.getElementById('if-opeLogico-Y').innerHTML = 'Las variables son diferentes';
     console.log('Son diferentes');
   }

   //ELSE IF

   const varELSEA = 'Hola';
   const varELSEB = 'Adios';
 
   const varELSEC = 'Hola';

   if(varELSEA == varELSEB){
     document.getElementById('ElseIF').innerHTML = 'Son iguales varELSEA y varELSEB';
     console.log('Son iguales varELSEA y varELSEB');
   }else if( varELSEA == varELSEC){
     document.getElementById('ElseIF').innerHTML = 'Son iguales varELSEA y varELSEC';
     console.log('Son iguales varELSEA y varELSEC');
   }