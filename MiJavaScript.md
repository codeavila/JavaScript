# Event Listener

## Obervacion 

> Evitar la ejecución default del botón agregar el siguiente codigo:
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