<!-- 
/**********************************************************************
* Llamada de Métodos y Manipulación de Datos.
* Video 2 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=JGN5TqaqnRg
*
* Este componente es una adaptacion del ejercicio del video 2, basado en
* en composicion de VueJs 3 + Vite
***********************************************************************/ 
-->

<script setup>
import { ref, onMounted } from 'vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';
import NotaTexto from '../Global/NotaTexto.vue';


const mensaje = ref("Este un contador automatico, que incrementa cada segundo");
const contador = ref(0);
const interval = ref(null);
const estaActivo = ref(false);

function detenerContador() {
    if (estaActivo.value) {
        clearInterval(interval.value);
        estaActivo.value = false;
    } else {
        contador.value = 0;
        interval.value = setInterval(() => {
            contador.value++;
        }, 1000);
        estaActivo.value = true;
    }
};

onMounted(() => {
    interval.value = setInterval(() => {
        contador.value++;
    }, 1000);
    estaActivo.value = true;
});

</script>

<template>
    <div>
        <TextoEncabezado titulo="Video 2 - Llamada de Métodos y Manipulación de Datos" />

        <h2>{{ mensaje }}</h2>
        <br />
        <span style="font-size: 36px"> {{ contador }} </span> -
        <button type="button" @click="detenerContador">
            {{ estaActivo ? 'Detener' : 'Reiniciar' }}
        </button>
        <hr />
        <div>
            <NotaTexto nota="Video 2 - Si desean ver la version este ejercicio de Vue.Js con CDN" anclaSrc="pagina2.html" />

        </div>

    </div>
</template>