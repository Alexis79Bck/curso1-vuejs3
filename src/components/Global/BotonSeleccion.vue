<script setup>
import { defineEmits, defineProps } from 'vue';
import emitter from '../../services/EventBus'

const props = defineProps([
    'nombre'
]);

const emit = defineEmits(["seleccionado"]);

function componenteSeleccionado(nombre) {
   console.log(nombre);
   emitter.emit("seleccionado", nombre);
}

</script>

<template>
    <button type="button" class="waves-effect waves-light red btn btn-small" @click="componenteSeleccionado(nombre)">
        <slot></slot> 
    </button>
</template>


<style scoped>
   @import url('../../assets/materialize/materialize.min.css'); 

</style>