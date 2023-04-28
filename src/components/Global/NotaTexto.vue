<!-- 
/**********************************************************************
* Componente Global NotaTexto.
* Este componente presenta una nota estática al pie del componente.
***********************************************************************/ 
-->

<template>
    <div>
        <small>
           <span> {{ nota }}, haga click <a v-bind:href="anclaSrc" target="_blank">AQUI</a></span>
        </small>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    nota: String,
    anclaSrc: String
})
</script>

