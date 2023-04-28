<!-- 
/**********************************************************************
* Componente Global Mensaje.
* Este componente presenta un mensaje del tipo título.
***********************************************************************/ 
-->
<template>
    <h4>
        {{ mensaje }}
    </h4>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps([
    'mensaje'
])
</script>
