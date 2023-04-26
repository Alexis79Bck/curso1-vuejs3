<!-- 
/**********************************************************************
* Creación del primer componente básico mostrando un mensaje estático.
* Video 1 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=je1r0Qaz0Gs
*
* Este componente es una adaptacion del ejercicio del video 1, basado en
* en composicion de VueJs 3 + Vite
***********************************************************************/ 
-->

<script setup>
import { ref } from 'vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';
import NotaTexto from '../Global/NotaTexto.vue';

const texto = ref("Hola Mundo !!!");
const nombre = ref("Alexis Mata");
const edad = ref(44);
const profesion = ref("Desarrollador");
const fechaCreacion = ref("24-04-2023")
const fechaActual = Date('d-m-Y');

</script>

<template>
    <div>
        <TextoEncabezado titulo="Video 1 - Introducción a VUEJS 3" />
        <span>{{ texto }} mi nombre es <strong>{{ nombre }}</strong>, tengo <strong>{{ edad }} años</strong> de edad y soy <strong>{{ profesion }}.</strong></span>
        <blockquote>
            Este ejercicio de ejemplo fue creado en fecha de <b>{{ fechaCreacion }}</b>.<br />
            La fecha actual es: <u>{{ fechaActual }}</u>
        </blockquote>
        <hr />
        <div>
            <NotaTexto nota="Video 1 - Si desean ver la version de este ejercicio de Vue.Js con CDN"
                anclaSrc="estaticas/pagina1.html" />
            <NotaTexto nota="Si desean ver el video del canal Code Stack"
                anclaSrc="https://www.youtube.com/watch?v=je1r0Qaz0Gs" />
        </div>
    </div>
</template>

