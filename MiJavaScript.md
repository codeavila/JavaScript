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


