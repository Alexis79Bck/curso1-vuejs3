<!--
/**********************************************************************
* Propiedades Calculadas.
* Video 17 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=Kngd4g0QXuo
***********************************************************************/
-->
<template>
    <div>
        <TextoEncabezado titulo="Video 17 - Componentes y Traspaso de Datos" />
        <div class="mt-4 block">
            <Saludo class="has-text-centered mb-4" />
        </div>

        <div class="mb-4">
            <MensajeTituloNv2 />
        </div>
        <div class="box sombra-box">
            <p class="title is-2 has-text-centered">Posts</p>
            <div class="columns is-justify-content-center is-flex-wrap-wrap">
                <PostComponent class="column m-3 is-one-fifth" v-for="(post, idx) in posts" :key="idx" :post="post" />
            </div>
        </div>
       
        <hr />
        <NotaTexto nota="Video 17 - Si desean ver la version este ejercicio de Vue.Js con CDN"
            anclaSrc="estaticas/pagina17.html" />
        <NotaTexto nota="Si desean ver el video 17 del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=Kngd4g0QXuo" />
    </div>
</template>

<script setup>

import { ref, onBeforeMount } from 'vue'
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';
import Saludo from './Video17Components/Saludo.vue';
import MensajeTituloNv2 from './Video17Components/MensajeTituloNv2.vue';
import PostComponent from './Video17Components/PostComponent.vue';

const posts = ref([]);

onBeforeMount(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            posts.value = data;
        });
  
})
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css");

.sombra-box {
    border: solid 1px black;
    box-shadow: 7px 7px 12px black;
}
</style>