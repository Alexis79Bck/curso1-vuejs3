<!-- 
/**********************************************************************
* Componente Global BotonSelección.
* Este componente está creado para crear los botones de navegación entre
* los diversos ejercicios realizados segun los videos del curso.
***********************************************************************/ 
-->
<template >
    <button type="button" class="espaciado waves-effect waves-light red btn btn-small">
        <slot></slot>
    </button>
</template>


<style scoped>
@import url('../../assets/materialize/materialize.min.css');
.espaciado {
    padding: 5px;
    margin: 5px;
}
</style>