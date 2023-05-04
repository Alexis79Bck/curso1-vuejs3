<!-- 
/**********************************************************************
* Renderizacion condicional con con v-show y diferencia entre v-if.
* Video 11 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=QEIr2gz3df0
***********************************************************************/
-->
<template>
    <div >
        <TextoEncabezado titulo="Video 11 - Renderizado condicional de componentes | v-show vs. v-if" />
        <div>

            <h2><u>EJEMPLO BÁSICO V-SHOW vs. V-IF</u></h2>
            <div>
                <label>Numero 1: </label>
                <input v-model.number="numero_uno" type="number" step="1" />
            </div>
            <div>
                <label>Numero 2: </label>
                <input v-model.number="numero_dos" type="number" step="1" />
            </div>
            <h5 v-show="numero_uno < numero_dos">El nro. {{ numero_uno}} es menor que {{ numero_dos }} (Usando V-Show) </h5>
            <h5 v-if="numero_uno > numero_dos">El nro. {{ numero_uno}} es mayor que {{ numero_dos }} (usando V-If)</h5>

        </div>
        
        <hr />
        <NotaTexto nota="Video 11 - Si desean ver la version este ejercicio de Vue.Js con CDN"
            anclaSrc="estaticas/pagina11.html" />
        <NotaTexto nota="Si desean ver el video 11 del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=QEIr2gz3df0" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';

const numero_uno = ref(0);
const numero_dos = ref(0);
 
</script>

<style scoped>
 .sin-vineta {
    list-style-type: none;
  }
</style>