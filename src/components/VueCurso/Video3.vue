<!-- 
/**********************************************************************
* Binding de Atributos HTML con v-bind.
* Video 3 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=5-SsRpGa9NM
*
* Este componente es una adaptacion del ejercicio del video 3, basado en
* en composicion de VueJs 3 + Vite
***********************************************************************/ 
-->

<script setup>
import { ref } from 'vue';
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';

const mensaje = ref("Selección de Imagen a través usando binding de atributos");
const imagen = ref("no-image.png");

function mostrarImagen(imagenFileName) {
    imagen.value = imagenFileName
}

</script>

<template>
    <div>
        <TextoEncabezado titulo="Video 3 - Binding de atributos HTML" />

        <h2 style="text-align: center">{{ mensaje }}</h2>
        <hr />
        <div style="display: flex; justify-content: center; width:100% ">
            <img width="128" height="128" v-bind:src=imagen />
        </div>
        
        <div style="display: flex; justify-content: center">
            <button type="button" @click="mostrarImagen('html5-logo.png')">HTML-Logo</button>
            <button type="button" @click="mostrarImagen('CSS-Logo.png')">CSS-Logo</button>
            <button type="button" @click="mostrarImagen('javascript-logo.png')">JS-Logo</button>
            <button type="button" @click="mostrarImagen('vue-js-Logo.png')">VUEJS-Logo</button>
            <button type="button" @click="mostrarImagen('no-image.png')">Default</button>
        </div>

        <hr />
        <NotaTexto nota="Video 3 - Si desean ver la version este ejercicio de Vue.Js con CDN" anclaSrc="pagina3.html" />
    </div>
</template>



