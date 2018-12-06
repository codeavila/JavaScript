     //Variable donde se guardara el contenido de la lista
     const lista_compras = document.getElementById('lista-compras');
     
     //Se declara una funcion la cual se ejecutara desde que se carga el DOM
     funcionMetodos();

     function funcionMetodos(){
          //Agregar los items que se ingresan en el INPUT cuando se da click en el botón de agregar lista.

          /* Esta funcion es cargada esperando alguno de los eventos a continuación */

          //Se agrega un evento al elemento con el ID `formulario` de HTML para poder manipularlo
          document.querySelector('#formulario').addEventListener('submit',agregarElemento);

          //Con la siguiente funcion se borrara el item de la lista que declaramos al inicio
          lista_compras.addEventListener('click',eliminarItem);

          //Cargar el contenido que se encuentra en el LocalStorage para mostrar si hay información guardada
          document.addEventListener('DOMContentLoaded',leerLocalStorage);
  
     };

     function agregarElemento(e){
          //Se evita que al momento de dar click en el botón se ejecuta su funcion de default con el motivo de utilizar los nuestros.
          e.preventDefault();

          //Se lee y se guarda en una variable el contenido del INPUT
          const elementoItem = document.getElementById('elementoItem').value;
               console.log(elementoItem);
          
          //Crear la lista en base a los items recibidos
          agregarItemLista(elementoItem);

          //Agregar el elemento al Local Storage
          guardarEnLocalStorage(elementoItem);
     };

     function agregarItemLista(itemRecibido){
          //Se declara una variable la cual contendra un elemento de lista li
          const elemento_li = document.createElement('li');
          //A la variable con la estructura HTML li se le asigna el valor que se haya ingresado en el INPUT 
          elemento_li.innerHTML = itemRecibido;
          //Una vez que la variable tiene la estructura HTML => li y un valor asignado, se agrega la primer variable que declaramos al inicio que contiene la estructura HTML => UL
          lista_compras.append(elemento_li);
          //A cada elemento li creado le agregaremos un botón para poder ejecutar el una funcion de borrado
          //Crearemos un elemento que sea de tipo botón
          const li_boton = document.createElement('a');
          li_boton.classList = 'borrar-item';
          li_boton.innerText = 'X';

          elemento_li.appendChild(li_boton);
          
     };

     function eliminarItem(e){
           //Se evita que al momento de dar click en el botón se ejecuta su funcion de default con el motivo de utilizar los nuestros.
          e.preventDefault();
          //Se busca el elemento el cual tenga la clase **borrar-item** y cuando lo encuentra elimina el elemento padre el cual por este ejemplo seria la etiqueta **li** y se finaliza avisando con un alert.
          if(e.target.className === 'borrar-item'){
               e.target.parentElement.remove();
               alert('Se ha eliminado el elemento');
               eliminarItemDelLocalStorage(e.target.parentElement.innerText);
          }
     };

     function guardarEnLocalStorage(itemRecibidoAGuardar){
          //Se declara una variable para obtener la informacion que este en Local Storage
          let lista;
          //Se manda a ejecutar la función y se guarda en la variable
          lista = obtenerListaDesdeLocalStorage();

          //Se agrega items nuevos utilizando la propieda **push** , ya que estamos dando por hecho que la variable lista es un **array**
          lista.push(itemRecibidoAGuardar);

          //Debido a que el Storage solo guarda una variable o un valor por **KEY** se utiliza el formato JSON para hacer una cadena donde se guarde todo lo que se vaya agregando al **array**
          localStorage.setItem('ListaCompras', JSON.stringify(lista));
     };

     function obtenerListaDesdeLocalStorage(){
          //Se declara una variable para obtener la informacion que este en Local Storage
          let lista;

          //A continuación se muestra una condicion que hace lo siguiente:
          //(if)- Revisa que el elemento que esta en el LocalStorage que tiene una **key** llamada ListaCompras se encuentra **null** y si es **true** declara el arreglo vacio.
          //(else) - En caso contrario de que fuera diferente de **null** quiere decir que tiene contenido y debemos obtener la cade de texto y decodificarla porque se encuentra en formato JSON
          //(return) - Y al finalizar la comparacion se retorna la variable lista.
          if(localStorage.getItem('ListaCompras') === null){
               lista = [];
          }else{
               lista = JSON.parse(localStorage.getItem('ListaCompras'));
          }
          return lista;
     };

     function eliminarItemDelLocalStorage(itemRecibidoAEliminar){
          //Se declaran dos variables
          let lista,itemABorrar;
          
          //Guardamos en una de las variables el valor recibido por la función y a esa misma le quitamos el ultimo caracter debido a que en nuestro caso obtiene un valor parecido a esto ** valorDelInputX ** esto es porque tomamos todo el valor de la etiqueta **li** y sus hijos en este caso una letra ** X ** la cual utilizamos para borrar el item.
          itemABorrar = itemRecibidoAEliminar.substring(0,itemRecibidoAEliminar.length - 1);
          
          //Obtenemos la cadena que tenemos ya en memoria
          lista = obtenerListaDesdeLocalStorage();

          //Recorremos la lista que obtenemos y comparamos el valor que queremos eliminar ya que compara la posicion en la que se encuentra el ** index ** ve si es igual al valor que "limpiamos" anteriormente y si es así, se elimina del ** array ** con uno de sus metodos predefinidos que es ** splice **
          lista.forEach(function(itemRecibidoAEliminar,index){
               if(itemABorrar === itemRecibidoAEliminar){
                    lista.splice(index,1);
               }
          });    

          //Se carga en el localStorage la cadena con todos los elementos de la lista en JSON
          localStorage.setItem('ListaCompras',JSON.stringify(lista));
     };

     function leerLocalStorage(){
          // Como ya se ha visto se carga lo que exista en el LocalStorage 
          let lista;
          lista = obtenerListaDesdeLocalStorage();

          
          //Cada elemento que se encuentra se pasa a una funcion, esta funcion hace la estructura HTML que ya hemos visto un ** <li> ** y ** <a> ** y se le adjunta el valor que este recorriendo el ** forEach **
          lista.forEach(function(item){
               const btn_borrar = document.createElement('a');
                     btn_borrar.classList = 'borrar-item';
                     btn_borrar.innerText = 'X';
          const li = document.createElement('li');
          li.innerHTML = item;
          li.appendChild(btn_borrar);

          //Al final de crear la estructura HTML se agrega a la lista de compras que esta de manera global para que este lo muestre en pantalla.
          lista_compras.append(li);

          });

     }

     function ciudadano(nombre,apellido,edad){
          this.nombre = nombre,
          this.appelido = apellido,
          this.edad = edad,
          esMayorDeEdad: function(){
               let respuesta;
               if(this.edad >= 18){ respuesta = 'Si es mayor de edad.' }
               else { respuesta = 'No es mayor de edad.' }
               return respuesta;
          }
     }