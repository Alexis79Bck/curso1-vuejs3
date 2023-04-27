<script setup>
import { ref, onMounted } from 'vue';
import emitter from './services/EventBus';
import EncabezadoCurso from './components/Global/EncabezadoCurso.vue';
import ListaBotones from './components/Global/ListaBotones.vue';
import Video1 from './components/VueCurso/Video1.vue';
import Video2 from './components/VueCurso/Video2.vue';
import Video3 from './components/VueCurso/Video3.vue';
import Video4 from './components/VueCurso/Video4.vue';
import Video5 from './components/VueCurso/Video5.vue';
import Video6 from './components/VueCurso/Video6.vue';
import Video7_8 from './components/VueCurso/Video7_8.vue';

const componente = ref(null);
const mostrar = ref(false);
onMounted(()=>{
  emitter.on('seleccionado', (nombre) => {
    mostrar = true;
    componente = nombre;
  })
});
</script>

<template>
  
  <EncabezadoCurso />
  <hr />
  <ListaBotones :listaBotones="[
    {nombre: 'video1', etiqueta: 'Video 1'},
    {nombre: 'video2', etiqueta: 'Video 2'},
    {nombre: 'video3', etiqueta: 'Video 3'},
    {nombre: 'video4', etiqueta: 'Video 4'},
    {nombre: 'video5', etiqueta: 'Video 5'},
    {nombre: 'video6', etiqueta: 'Video 6'},
    {nombre: 'video7_8', etiqueta: 'Video 7 y 8'}
    ]" />
  <hr />
  <div>
    <Video1 v-if="componente=='video1'"/>
  </div>
  <hr />
  <div>
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
  <hr />
</template>

<style scoped>
</style>
