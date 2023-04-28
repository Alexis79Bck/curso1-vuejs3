<script setup>
import { ref } from 'vue';
import EncabezadoCurso from './components/Global/EncabezadoCurso.vue';
import Video1 from './components/VueCurso/Video1.vue';
import Video2 from './components/VueCurso/Video2.vue';
import Video3 from './components/VueCurso/Video3.vue';
import Video4 from './components/VueCurso/Video4.vue';
import Video5 from './components/VueCurso/Video5.vue';
import Video6 from './components/VueCurso/Video6.vue';
import Video7_8 from './components/VueCurso/Video7_8.vue';
import BotonSeleccion from './components/Global/BotonSeleccion.vue';

const componente = ref(null); 

function componenteSeleccionado(nombre) {
  componente.value = nombre 
}

</script>

<template>
  <div>
  <EncabezadoCurso />
  <hr />
  <div class="container">
    <BotonSeleccion class="espaciado" v-for="(boton, idx) in [
      { nombre: 'video1', etiqueta: 'Video 1' },
      { nombre: 'video2', etiqueta: 'Video 2' },
      { nombre: 'video3', etiqueta: 'Video 3' },
      { nombre: 'video4', etiqueta: 'Video 4' },
      { nombre: 'video5', etiqueta: 'Video 5' },
      { nombre: 'video6', etiqueta: 'Video 6' },
      { nombre: 'video7_8', etiqueta: 'Video 7 y 8' }
    ]" :key="idx" @click = "componenteSeleccionado(boton.nombre)">
      {{ boton.etiqueta }}
    </BotonSeleccion>
  </div>
  <hr />
 
  <div>
    <Video1 v-if="componente == 'video1'" />
    <Video2 v-if="componente == 'video2'" />
    <Video3 v-if="componente == 'video3'" />
    <Video4 v-if="componente == 'video4'" />
    <Video5 v-if="componente == 'video5'" />
    <Video6 v-if="componente == 'video6'" />
    <Video7_8 v-if="componente == 'video7_8'" />

  </div>
</div>
  <!-- <div>
    <Video2 />
  </div>
  <hr />
  <div>
    <Video3 />
  </div>
  <hr />
  <div>
    <Video4 />
  </div>
  <hr />
  <div>
    <Video5 />
  </div>
  <hr />
  <div>
    <Video6 />
  </div>
  <hr />
  <div>
    <Video7_8 />
  </div>
  <hr /> -->
</template>

<style >
 @import url('assets/materialize/materialize.min.css'); 

 .espaciado {
    padding: 5px;
    margin: 5px;
}
</style>
