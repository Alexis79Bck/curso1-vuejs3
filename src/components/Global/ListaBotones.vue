<template >
    <BotonSeleccion class="espaciado" v-for="(boton, idx) in props.listaBotones" :key="idx" :nombre="boton.nombre">
        {{ boton.etiqueta }}
    </BotonSeleccion>
</template>

<script setup>
import BotonSeleccion from './BotonSeleccion.vue';
import { defineProps } from 'vue';

const props = defineProps([
    'listaBotones'
])

</script>

<style scoped>
.espaciado {
    padding: 5px;
    margin: 5px;
}
</style>


<!-- [
    {nombre: 'video1', etiqueta: 'Video 1'},
    {nombre: 'video2', etiqueta: 'Video 2'},
    {nombre: 'video3', etiqueta: 'Video 3'},
    {nombre: 'video4', etiqueta: 'Video 4'},
    {nombre: 'video5', etiqueta: 'Video 5'},
    {nombre: 'video6', etiqueta: 'Video 6'},
    {nombre: 'video7_8', etiqueta: 'Video 7 y 8'}
] -->