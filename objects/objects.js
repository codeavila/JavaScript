
//Forma basica de un Objeto
const ciudadano = {
     nombre : 'Eric' ,
     apellido : 'Avila' ,
     edad : 28
     };

     const objetoBasico = document.getElementById('objeto-basico').innerHTML = JSON.stringify(ciudadano);
     console.log('Estructura basica');
     console.log(ciudadano);


//Objeto con funcion
     const ciudadano2 = {
          nombre : 'Eric' ,
          apellido : 'Avila' ,
          edad : 28 ,
          esMayorDeEdad : function(){
            let respuesta;
            if(this.edad >= 18){ respuesta = 'Si es mayor de edad.' }
            else { respuesta = 'No es mayor de edad.' }
            return respuesta;
            }
          }

          const objetoBasico2 = document.getElementById('objeto-function').innerHTML = JSON.stringify(ciudadano2);

          const objetoB_f = document.getElementById('objeto-f').innerHTML = ciudadano2.esMayorDeEdad();
          console.log('Estructura con funcion');
          console.log(ciudadano2);
          console.log(ciudadano2.esMayorDeEdad());


//Pasar parametros a la funcion
function f_ciudadano(nombre,apellido,edad){
     this.nombre = nombre ,
     this.appelido = apellido ,
     this.edad = edad ,
     esMayorDeEdad = function(){
          let respuesta;
          if(this.edad >= 18){ respuesta = 'Si es mayor de edad.' }
          else { respuesta = 'No es mayor de edad.' }
          return respuesta;
     };
}
