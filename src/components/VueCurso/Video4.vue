<!-- 
/**********************************************************************
* Binding de Doble Vía con v-model: Interacción del Usuario.
* Video 4 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=iCoJC3P0ftQ
***********************************************************************/
-->

<script setup>
import { ref } from 'vue';
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';

const mensaje = ref("Utilizando la directiva V-Model");
const texto = ref("");
const fruta = ref("");
const activo = ref(false);

</script>

<template>
    <div class="container">
        <TextoEncabezado titulo="Video 4 - Enlace con v-model" />

        <span>{{ mensaje }}</span>

        <div >
            <label>Escriba un texto: </label>
            <input type="text" v-model="texto" v-bind:disabled="activo" />
            <span>
                <input type="checkbox" class="filled-in" v-model="activo" />
                <label>{{ activo ? 'No Disponible' : 'Disponible' }}</label>
            </span>
        </div>
        <div >
            <span>Lo que escribas aparece aqui ---> {{ texto }}</span>
        </div>
        <hr />
        <div >
            <select class="browser-default" v-model="fruta">
                <option value="Mango">Mango</option>
                <option value="Papaya">Papaya</option>
                <option value="Piña">Piña</option>
                <option value="Guayaba">Guayaba</option>
                <option value="Maracuyá">Maracuyá (fruta de la pasión)</option>
                <option value="Carambola">Carambola (fruta estrella)</option>
                <option value="Lichi">Lichi</option>
                <option value="Granadilla">Granadilla</option>
                <option value="Chirimoya">Chirimoya</option>
                <option value="Pitahaya">Pitahaya (fruta del dragón)</option>
            </select>
        </div>

        <div>
            <span>La fruta que selecciono es: {{ fruta }}</span>
        </div>

        <hr />
        <NotaTexto nota="Video 4 - Si desean ver la version este ejercicio de Vue.Js con CDN" anclaSrc="estaticas/pagina4.html" />
        <NotaTexto nota="Si desean ver el video del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=iCoJC3P0ftQ" />
    </div>
</template>



