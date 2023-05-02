<!-- 
/**********************************************************************
* Renderizacion condicional con v-if, v-else, v-else-if.
* Video 9 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=4OSZ2AdX9x4
***********************************************************************/
-->
<template>
    <div >
        <TextoEncabezado titulo="Video 9 - Renderizado condicional de componentes" />
        <div>

            <h2><u>EJEMPLO BÁSICO</u></h2>
            <div>
                <label>Numero 1: </label>
                <input v-model.number="numero_uno" type="number" step="1" />
            </div>
            <div>
                <label>Numero 2: </label>
                <input v-model.number="numero_dos" type="number" step="1" />
            </div>
            <h4 v-if="numero_uno < numero_dos">El nro. {{ numero_uno }} es menor que {{ numero_dos }} </h4>
            <h4 v-else-if="numero_uno == numero_dos">El nro. {{ numero_uno }} es igual a {{ numero_dos }} </h4>
            <h4 v-else="numero_uno > numero_dos">El nro. {{ numero_uno }} es mayor que {{ numero_dos }} </h4>

        </div>
        <hr />
        <div>
            <h3><u>EJEMPLO BÁSICO CON V-FOR (POSTS CON ID PARES)</u></h3>
            <ul class="sin-vineta">
                <li  v-for="post in posts" :key="post.id">
                    <span v-if="post.id % 2 == 0">El ID es par. - </span>
                    <span v-else>El ID es impar. - </span>
                    {{ post.id }} - {{ post.title }}
                </li>
            </ul>

        </div>

        <hr />
        <NotaTexto nota="Video 9 - Si desean ver la version este ejercicio de Vue.Js con CDN"
            anclaSrc="estaticas/pagina9.html" />
        <NotaTexto nota="Si desean ver el video 9 del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=4OSZ2AdX9x4" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';

const numero_uno = ref(0);
const numero_dos = ref(0);
const posts = ref([]);

const getPosts = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json());
};

onMounted(() => {
    getPosts().then(data => {
        posts.value = data;
    }).catch(err => {
        console.log(err);
    });
})
</script>

<style scoped>
 .sin-vineta {
    list-style-type: none;
  }
</style>