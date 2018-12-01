     //Variable donde se guardara el contenido de la lista
     const lista_compras = document.getElementById('lista-compras');
     
     //Se declara una funcion la cual se ejecutara desde que se carga el DOM
     funcionMetodos();

     function funcionMetodos(){
          //Agregar los items que se ingresan en el INPUT cuando se da click en el botón de agregar lista.
          //Se agrega un evento al elemento con el ID `formulario` de HTML para poder manipularlo
          document.querySelector('#formulario').addEventListener('submit',agregarElemento);
  
     };

     function agregarElemento(e){
          //Se evita que al momento de dar click en el botón se ejecuta su funcion de default con el motivo de utilizar los nuestros.
          e.preventDefault();

          //Se lee y se guarda en una variable el contenido del INPUT
          const elementoItem = document.getElementById('elementoItem').value;
               console.log(elementoItem);
          
          //Crear la lista en base a los items recibidos
          agregarItemLista(elementoItem);
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