<!-- 
/**********************************************************************
* Estructura v-for, Recorrido de Arrays y Creación de Listas.
* Video 5 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=mppzB_PJR4Q
***********************************************************************/
-->

<script setup>
import { ref } from 'vue';
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';
import Mensaje from '../Global/Mensaje.vue';


/**
 * Se pudiera crear una variable array de Frutas para listar los elementos frutas
 * con un unico valor 
 
        const arrayFrutas = [
                    "Mango",
                    "Papaya",
                    "Piña",
                    "Guayaba",
                    "Maracuyá",
                    "Carambola",
                    "Lichi",
                    "Granadilla",
                    "Chirimoya",
                    "Pitahaya",
                    ];
*/

/**
 * Se pudiera crear una variable array de Frutas del tipo Objeto para listar los elementos frutas
 * el cual poseera caracteristicas, tal como se muestra en el ejemplo abajo expuesto.
 
        Las propiedades que este contiene son: id, nombre. Tambien podria agregarle otros rasgos como
        Color, Forma, Tamaño, etc.
        const objectFrutas = [
              {
                id: 1,
                nombre: "Mango",
              },
              {
                id: 2,
                nombre: "Papaya",
              },
              {
                id: 3,
                nombre: "Piña",
              },
              {
                id: 4,
                nombre: "Guayaba",
              },
              {
                id: 5,
                nombre: "Maracuyá",
              },
              {
                id: 6,
                nombre: "Carambola",
              },
              {
                id: 7,
                nombre: "Lichi",
              },
              {
                id: 8,
                nombre: "Granadilla",
              },
              {
                id: 9,
                nombre: "Chirimoya",
              },
              {
                id: 10,
                nombre: "Pitahaya",
              },
            ];
*/
 
const fruta = ref("");

// otra forma de escribir este codigo es: 
//    const frutas = ref(arrayFrutas);
const frutas = ref([
    "Mango",
    "Papaya",
    "Piña",
    "Guayaba",
    "Maracuyá",
    "Carambola",
    "Lichi",
    "Granadilla",
    "Chirimoya",
    "Pitahaya",
]);
// otra forma de escribir este codigo es: 
//    const frutas_con_id = ref(objectFrutas);
const frutas_con_id = ref([
    {
        id: 1,
        nombre: "Mango",
    },
    {
        id: 2,
        nombre: "Papaya",
    },
    {
        id: 3,
        nombre: "Piña",
    },
    {
        id: 4,
        nombre: "Guayaba",
    },
    {
        id: 5,
        nombre: "Maracuyá",
    },
    {
        id: 6,
        nombre: "Carambola",
    },
    {
        id: 7,
        nombre: "Lichi",
    },
    {
        id: 8,
        nombre: "Granadilla",
    },
    {
        id: 9,
        nombre: "Chirimoya",
    },
    {
        id: 10,
        nombre: "Pitahaya",
    },
]); 

</script>

<template>
    <div>
        <TextoEncabezado titulo="Video 5 - Estructura Repetitiva con v-for" />

        <Mensaje mensaje="Recorrido de arrays y creación de listas con v-for" />

        <div class="container">
            <div>
                <select class="browser-default" v-model="fruta">
                    <option v-for="(fruta, idx) in frutas" v-bind:value="fruta" ::key="idx">#{{ idx }} -{{ fruta }}</option>
                </select>
                : <span><strong>La fruta que selecciono es: {{ fruta }}</strong></span>
                <br />
                <!-- El idx representa el indice del elemento en el array, no confundir con el id de la lista inferior. -->
            </div>
        </div>
            <div>
                <ul class="sin-vineta">
                    <li  v-for="fruta2 in frutas_con_id" >
                       <span :class="{frutaSeleccionada: fruta2.nombre === fruta}">
                        #{{ fruta2.id }} - Fruta: {{ fruta2.nombre }}
                      </span>
                    </li>
                </ul>
            </div>
        
        <hr />
        <NotaTexto nota="Video 5 - Si desean ver la version este ejercicio de Vue.Js con CDN"
            anclaSrc="estaticas/pagina5.html" />
        <NotaTexto nota="Si desean ver el video del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=mppzB_PJR4Q" />
    </div>
</template>

<style scoped>
  .sin-vineta {
    list-style-type: none;
  }

  .frutaSeleccionada {
    color: brown;
    padding: 2px;
    font-size: large;
    font-weight: 600;
    border: 2px solid blue;
    border-radius: 7px;
    background-color: lightgoldenrodyellow;
  }
     
</style>

