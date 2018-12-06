
//Forma basica de un Objeto
const ciudadano = {
     nombre : 'Eric' ,
     apellido : 'Avila' ,
     edad : 28
     };

     const objetoBasico = document.getElementById('objeto-basico').innerHTML = JSON.stringify(ciudadano);
     console.log('--- Estructura basica --- ');
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

          const objetoB_f = document.getElementById('objeto-function_return').innerHTML = ciudadano2.esMayorDeEdad();
          console.log('--- Estructura con función ---');
          console.log(ciudadano2);
          console.log(ciudadano2.esMayorDeEdad());


//Pasar parametros a la funcion
function f_ciudadano(nombre,apellido,edad){
     this.nombre = nombre ,
     this.appelido = apellido ,
     this.edad = edad ,
     this.esMayorDeEdad = function(){
          let respuesta;
          if(this.edad >= 18){ respuesta = 'Si es mayor de edad.' }
          else { respuesta = 'No es mayor de edad.' }
          return respuesta;
     };
}
const fciudadanoA = new f_ciudadano('Eric','Avila',28);
const fciudadanoB = new f_ciudadano('Uriel','Barrios',16);

console.log('--- Objetos y parametros ---');
console.log(fciudadanoA);
console.log(fciudadanoA .esMayorDeEdad());
console.log(fciudadanoB);
console.log(fciudadanoB.esMayorDeEdad());

const var_fciudadanoA = document.getElementById('objeto-param-A').innerHTML = JSON.stringify(fciudadanoA);
const var_fciudadanoAr = document.getElementById('objeto-return-A').innerHTML = JSON.stringify(fciudadanoA.esMayorDeEdad());

const var_fciudadanoB = document.getElementById('objeto-param-B').innerHTML = JSON.stringify(fciudadanoB);
const var_fciudadanoBr = document.getElementById('objeto-return-B').innerHTML = JSON.stringify(fciudadanoB.esMayorDeEdad());