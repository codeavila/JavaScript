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
