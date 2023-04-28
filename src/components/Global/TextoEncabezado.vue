<!-- 
/**********************************************************************
* Componente Global TextoEncabezado.
* Este componente presenta una título de encabezado estática al inicio 
* del componente padre
***********************************************************************/ 
-->
<template>
    <div>
        <h2 style="color: brown;">{{ titulo }} </h2>
    </div>
</template>

<script setup> 

defineProps({
    titulo: String,
})

</script>
