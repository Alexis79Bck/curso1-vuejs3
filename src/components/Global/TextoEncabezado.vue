<!-- 
/**********************************************************************
* Componente Global TextoEncabezado.
* Este componente presenta una título de encabezado estática al inicio 
* del componente padre
***********************************************************************/ 
-->
<template>
    <div>
        <h5 style="color: brown;">{{ titulo }} </h5>
    </div>
</template>

<script setup> 

defineProps({
    titulo: String,
})

</script>
