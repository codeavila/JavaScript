# Mi Manual de JavaScript 
#### by Dev-EUAB

# Condiciones IF,ELSE,ELSE IF y Operadores Lógicos/Relacionales
## IF

>Compara si ambas variables son iguales y nos arroja un mensaje en caso de que sea cierto, y en caso de que no (**else**) arroja un mensaje de que son diferentes.

>Un uso común de las **Condiciones** es para *Comparar* dos o mas variables.
>Para estos casos se utilizan **Los Operadores Relacionales**.
>
>Los cuales son:

|Operador|Nombre|Ejemplo|Descripcion|
|---|---|---|---| 
|< 	|menor que| 	a<b| 	a es menor que b|
|> 	|mayor que| 	a>b| 	a es mayor que b|
|== |	igual a| 	a==b| 	a es igual a b|
|!= |	no igual a |	a!=b| 	a no es igual a b|
|<= |	menor que o igual a| 	a<=5| 	a es menor que o igual a b|
|>= |	mayor que o igual a| 	a>=b| 	a es menor que o igual a b|

>Estos operadores se ponen en la estructura del las condicionales dependiendo de lo que necesitemos en nuestro caso **`==`** 


`const variableA = 1;`
`const variableB = 1;`

### `==` Operador de igualdad

`if(variableA == variableB){
  console.log('Las variables son iguales')
}else{
console.log('Las variables son diferentes)
}`

### `===` Operador de igualdad estricto

>¿Por que estricto?
>>Se le hace llamar así debido a que ese operador no solamente compara el valor de la variable si no también el tipo de variable y compara ambas cosas.

###Ejemplo

`
const variable_Numero = 1;
cons variable_Objeto_Numero = new Number(20) 
`

`if(variable_Numero === variable_Objeto_Numero){
  console.log('Las variables son iguales')
}else{
 console.log('Las variables son diferentes)
}`

>>>podemos observar que ambas variables tiene el valor de **20** pero la diferencia es que uno es un **Objeto de tipo Numero** y el otro es una **variable numero**, así que nunca serán iguales aunque tengan el mismo valor debido a que son dos tipos diferentes.  

Sabiendo lo anterior podemos utilizar tambien **Los Operadores Logicos**



# Objetos

### Escritura

  `const ciudadano = {
  nombre : 'Eric' ,
  apellido : 'Avila' ,
  edad : 28
  }`

>Normalmente un objeto se declara como si fuera una variable ya que lo que hará la diferencia serian los "parámetros" que le agregamos.

Se puede tener **functions** dentro de los **Objetos**.


### Escritura

`const ciudadano = {
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
`

## Observación

>Un detalle es que en los parámetros que le agregamos a nuestro objeto es que los elementos de tipo **STRING** se utiliza la **Comilla simple** y a los que son **"Numeros"** **(Float,Int,Double,Etc.)** solo se escriben tal cual, ya que automáticamente se identifica cual parámetro es de que tipo, así que hay que tener en cuenta que al momento de querer utilizar alguno de los parámetros de nuestro **Objeto** debemos respetar el tipo de variable que es.

>**NOTA** se utiliza la palabra reservada `this` debido a que se hace referencia a un elemento del **Objeto**, ademas se cada "parámetro" es separado por una "coma".

Hay que tener en cuenta que un **Objeto** se le pueden asignar parametros

### Escritura

`function ciudadano(nombre,apellido,edad){
          this.nombre = nombre ,
          this.appelido = apellido ,
          this.edad = edad ,
          this.esMayorDeEdad = function(){
               let respuesta;
               if(this.edad >= 18){ respuesta = 'Si es mayor de edad.' }
               else { respuesta = 'No es mayor de edad.' }
               return respuesta;
          };
     }`

Y se utiliza de la siguiente manera

`const ciudadanoA = new ciudadano('Eric','Avila',28);`

>Se crea una variable del tipo de objeto -ciudadano de esta manera la variable tendrá la estructura del objeto y se pueden agregar los atributos que le corresponde, **Hay que respetar los tipo de datos que se declaran dentro del objeto**.

# Event Listener

## Observación 

> Evitar la ejecución default del botón agregar el siguiente código:
> ` e.preventDefault(); ` , donde **e** es el *event* que escucha la función declarada. 

 
### Escritura 

` document.querySelector('** nombre del elemento **').addEventListener   ('**tipo de evento **', ** nombre de la función **);`

`function **nombre de la función**(e){
  e.preventDefault(); 
  CODIGO DEL LA FUNCION
};`

Utilizando el *querySelector* se busca el elemento ya sea un **id** `#nombre_id`  ó una **clase** `.nombre_clase`

## Ejemplo - Evento "click"

`document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton);
function ejecutarBoton(e){
     e.preventDefault();
     let elemento;
     elemento =  e;
      elemento = e.target;
      elemento = e.target.id;
     console.log(elemento);
  };`

---
## Event Listener - **INPUT**

`const nombre_variable = document.querySelector('** nombre del elemento **');`

>Lo declaramos en una constante para mantener el elemento mas practico.
>
>A continuación se muestran los eventos en INPUT "mas utilizados"
<pre>
*keydown 
*keypress
*keyup
*focus
*blur
*copy
*cut
*paste
</pre>

`nombre_variable.addEventListener('tipo de evento', nombre de la función);`

`function nombre de la función(e){
     console.log(busqueda.value);
     console.log(`${e.type}`);
}`

---

# Local Storage 

Existen dos formar de guardar información una llamada *Local Storage* y *Session Storage*.

### Escritura
`localStorage.setItem('** key **','** valor **');`

>**key** seria como el ID y por consecuencia el otro atributo es el valor que tendra.

Para eliminar el storage se utiliza:

`localStorage.removeItem('** key **');`

Eliminar todo

`localStorage.clear();`


## Session Storage

### Escritura
`sessionStorage.setItem('** key **','** valor **');`

>**key** seria como el ID y por consecuencia el otro atributo es el valor que tendra.

Para eliminar el storage se utiliza:

`sessionStorage.setItem.removeItem('** key **');`

>>**NOTA**  La diferencia entre ambas es que SessionStorage se borra al momento de cerrar el navegador y localStorage se borra cuando el usuario borra el cache del navegador. Claro ambos se pueden borrar con su respectivo "comando".


Mas información 
[Session Storage](https://developer.mozilla.org/es/docs/DOM/Almacenamiento)

---
>**NOTA**  Ejecutar funciones al iniciar "el documento"
>se utiliza el comando
>`document.addEventListener('DOMContentLoaded', que es lo que debe hacer);`
>*La primera parte es el atributo **DOMContentLoaded** el cual hace referencia que cuando todo este listo hara lo que se pase en el siguiente atributo.
>Para saber mas [DOMContentLoaded](<https://developer.mozilla.org/es/docs/Web/Events/DOMContentLoaded>)
>>En JQUERY vendria siendo como el  `$( document ).ready()`
---
