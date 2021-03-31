/* const botonElm = document.querySelector('button');
const inputElm = document.querySelector('input');
const listaElm = document.querySelector('ul');


botonElm.addEventListener('click', () => {
    const valor = inputElm.value;
    const listaItemElm = document.createElement('li');
    listaItemElm.textContent = valor;
    listaElm.appendChild(listaItemElm);
    inputElm.value = '';
}); */


/**
 * Se crea una instancia para 
 * poder trabajar con el framework
 * 
 * Se agrega un objeto, que es el global de vue...
 * Para montar la aplicación va a utilizar .mount('#app')
 */

Vue.createApp({
//Creo un modelo a través del método data()
    data(){
        return {
            tareas: [],
            valor: ''
        }
    },
    //Método que agrega la tarea es otro objeto
    methods : {
        //Con este metodo agrego las tareas
        //Utilizo el this para hacer referencia
        //a las propiedades del data()
        agregarTarea(){
          this.tareas.push(this.valor);  
          this.valor = '';
        }
    }

}).mount('#app');