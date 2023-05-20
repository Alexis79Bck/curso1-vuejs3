<script setup>
/**
 * Importacion de los componentes
 */
import { ref, computed } from 'vue';
import EncabezadoCurso from './components/Global/EncabezadoCurso.vue';
import Video1 from './components/VueCurso/Video1.vue';
import Video2 from './components/VueCurso/Video2.vue';
import Video3 from './components/VueCurso/Video3.vue';
import Video4 from './components/VueCurso/Video4.vue';
import Video5 from './components/VueCurso/Video5.vue';
import Video6 from './components/VueCurso/Video6.vue';
import Video7_8 from './components/VueCurso/Video7_8.vue';
import BotonSeleccion from './components/Global/BotonSeleccion.vue';
import Video9 from './components/VueCurso/Video9.vue';
import Video10 from './components/VueCurso/video10.vue';
import Video11 from './components/VueCurso/Video11.vue';
import Video12_13 from './components/VueCurso/Video12_13.vue';

/**
 * Inicialización de variable:
 *  - componente: identificar y mostrar el componente seleccionado.
 *  - botones: matriz de datos que almacena los nombres de los componentes. 
 */
const componente = ref(null);
const botones = ref([
  { nombre: 'video1', etiqueta: 'Ejercicio 1' },
  { nombre: 'video2', etiqueta: 'Ejercicio 2' },
  { nombre: 'video3', etiqueta: 'Ejercicio 3' },
  { nombre: 'video4', etiqueta: 'Ejercicio 4' },
  { nombre: 'video5', etiqueta: 'Ejercicio 5' },
  { nombre: 'video6', etiqueta: 'Ejercicio 6' },
  { nombre: 'video7_8', etiqueta: 'Ejercicios 7 y 8' },
  { nombre: 'video9', etiqueta: 'Ejercicio 9' },
  { nombre: 'video10', etiqueta: 'Ejercicio 10' },
  { nombre: 'video11', etiqueta: 'Ejercicio 11' },
  { nombre: 'video12_13', etiqueta: 'Ejercicios 12 y 13' },

]);

/**
 * Se declara esta variable componenteSeleccionado, como propiedad computada.
 * es decir que dependiendo el resultado del proceso u operacion que realice, es
 * el valor de esta variable. Aun cuando se utilice una arrow function, el metodo o hook
 * computed maneja el return de la funcion y lo trata como un unico valor
 */
const componenteSeleccionado = computed(() => {

  switch (componente.value) {
    case 'video1':
      return Video1;
    case 'video2':
      return Video2;
    case 'video3':
      return Video3;
    case 'video4':
      return Video4;
    case 'video5':
      return Video5;
    case 'video6':
      return Video6;
    case 'video7_8':
      return Video7_8;
    case 'video9':
      return Video9;
    case 'video10':
      return Video10;
    case 'video11':
      return Video11;
    case 'video12_13':
      return Video12_13;
       case 'video13_14':
      return Video13_14;
    default:
      return null;
  }

})

/**
 * Metodo sobre el evento onClick y captura el nombre del componente a visualizar
 * @param {string} nombre 
 */
function seleccionar(nombre) {
  componente.value = nombre
}

</script>

  <!-- 
      ** Vue nos permite tener esta etiqueta dinámica para mostrar diferentes componentes segun la interacción
      ** del usuario, de una manera mas simple y clara.
      **
      ** La etiqueta <component :is /> permite a vue renderizar un componente o elemento HTML determinado mediante 
      ** la propiedad :is. 
      **      - Cuando se utiliza una cadena de texto (:is="<nombre_componente_o_nombre_elemento_html>"),
      **        renderiza el componente registrado o el elemento html.
      **        Ejemplo:  <component :is='video1' /> 
      **
      **      - Tambien puede renderizar un componente o elemento, mediante una condicional, una operacion o el
      **        valor de una propiedad.
      **        Ejemplo:  <component :is='componenteSeleccionado' /> componenteSeleccionado es una propiedad computada

    -->
   <!-- 
      ** Aun cuando escribimos codigo puede ser que sea semantico e independiente, escribirlo como se ve abajo
      ** no es la forma correcta, aun cuando el resultado es el mismo.
      **
      ** Como puede verse en el bloque de codigo, cada componente esta utilizando una condicional para que sea 
      ** mostrado en este bloque <div>, funciona «SI FUNCIONA», pero no es mantenible ya que se deberia escribir
      ** mas linea de codigo para mostrar otros nuevos componentes.
          <Video1 v-if="componente == 'video1'" />
          <Video2 v-if="componente == 'video2'" />
          <Video3 v-if="componente == 'video3'" />
          <Video4 v-if="componente == 'video4'" />
          <Video5 v-if="componente == 'video5'" />
          <Video6 v-if="componente == 'video6'" />
          <Video7_8 v-if="componente == 'video7_8'" /> 
    -->
<template>
  <div>
    <EncabezadoCurso />
    <hr />
    <div class="container">
      <div class="row ">
        <div class="col s4 m3 l3" v-for="(boton, idx) in botones" :key="idx" >
          <BotonSeleccion  @click="seleccionar(boton.nombre)">
            {{ boton.etiqueta }}
          </BotonSeleccion>
        </div>
      </div>

    </div>
    <hr />

    <div>
      <component :is='componenteSeleccionado' />
    </div>
  </div>
</template>

<style scoped>
@import url('assets/materialize/materialize.min.css');

</style>