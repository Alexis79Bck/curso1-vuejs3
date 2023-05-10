<!--
/**********************************************************************
* Propiedades Calculadas.
* Video 15 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=7JbRZtiuiu4
*
* Se utilizó inicialmente un snippet basico de Html y se agregó el CDN de
* la ultima versión estable de desarrollo de VueJs 3.
* Solo para manera educativa.
***********************************************************************/
-->
<template>
    <div>
        <TextoEncabezado titulo="Video 15 - Propiedades Calculadas" />
        <div class="mt-4 box sombra-box">
            <div class="columns is-flex is-justify-content-center">
                <div class="column is-2">
                    <label>Numero 1: </label>
                    <input class="input" v-model.number="numero_a" type="number" min="0" step="1" />
                </div>
                <div class="column is-2">
                    <label>Numero 2: </label>
                    <input class="input" v-model.number="numero_b" type="number" min="0" step="1" />
                </div>
            </div>

            <p class="subtitle is-3">
                La suma de los numeros es : {{ numero_a }} + {{ numero_b }} = {{
                    resultadoSuma }}
            </p>
            <p class="subtitle is-3">
                El producto de los numeros es : {{ numero_a }} * {{ numero_b }} = {{
                    resultadoProducto }}
            </p>
            <p class="subtitle is-3">
                La división de la suma entre el producto es : {{ resultadoSuma }} / {{
                    resultadoProducto }} = {{ resultadoDivision }}
            </p>
            <p class="subtitle is-3">
                La división del producto entre la suma es {{ resultadoProducto }} / {{
                    resultadoSuma }} = {{ resultadoDivision2 }}
            </p>
        </div>

        <div class="mt-4 box sombra-box">
            <div class="columns is-flex">
                <div class="column is-3">
                    <div class="field has-addons">
                        <div class="control">
                            <input class="input is-primary" v-model="fruta" type="text" placeholder="Ingresa una fruta:" />
                        </div>
                        <div class="control">
                            <button class="button is-link" @click="addFruta">Añadir</button>
                        </div>
                    </div>
                </div>
                <div class="column is-3">
                    <div class="content">
                        <p class="subtitle is-3">Listado de Frutas:</p>
                        <div v-if="frutas.length > 0" class="block is-small message is-link">
                            <div v-for="(fruta, idx) in frutas" class="message-body">
                                <div class="columns is-2 is-flex is-justify-content-space-between">
                                    <div class="column">
                                        <h4>{{ fruta }}</h4>
                                    </div>
                                    <div class="column">
                                        <button class="button is-small is-danger is-justify-content-end"
                                            @click="removeFruta(idx)">
                                            Remover
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-3">
                    <div class="subtitle is-5">
                        Total de elementos: {{ total_frutas }}
                    </div>
                </div>
            </div>
        </div>

        <hr />
        <NotaTexto nota="Video 15 - Si desean ver la version este ejercicio de Vue.Js con CDN"
            anclaSrc="estaticas/pagina15.html" />
        <NotaTexto nota="Si desean ver el video 15 del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=7JbRZtiuiu4" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';

const numero_a = ref(0);
const numero_b = ref(0);
const fruta = ref(""); 
const frutas = ref([]);

function addFruta() {
    frutas.value.push(fruta.value);
    fruta.value = "";
}

function removeFruta(idx) {
    frutas.value.splice(idx, 1);
}

const resultadoSuma = computed(() => numero_a.value + numero_b.value);
const resultadoProducto = computed(() => numero_a.value * numero_b.value);
const resultadoDivision = computed(() => {
    const resultado =
        resultadoProducto.value === 0
            ? "«-- No puede dividirse entre 0. --»"
            : resultadoSuma.value / resultadoProducto.value;
    return resultado;
});

const resultadoDivision2 = computed(() => {
    const resultado =
        resultadoSuma.value === 0
            ? "«-- No puede dividirse entre 0. --»"
            : resultadoProducto.value / resultadoSuma.value;
    return resultado;
});

const total_frutas = computed(() => frutas.value.length);
 
</script>

<style  scoped>
@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css");

.sombra-box {
    border: solid 1px black;
    box-shadow: 7px 7px 12px black;
}
</style>