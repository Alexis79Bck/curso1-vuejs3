<!-- 
/**********************************************************************
* Manejo de eventos.
* Video 10 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=MECrKp8B-7U
***********************************************************************/
-->
<template>
    <div>
        <TextoEncabezado titulo="Video 10 - Manejo de Eventos" />

        <div class="box sombra-box">
            <p class="subtitle is-3"><u>EJEMPLO BÁSICO - EVENTO CLICK (onClick)</u></p>
            <div class="block">
                <button class="button is-info" type="button" v-on:click="contador++">
                    Click me!
                </button>
            </div>
            <div class="is-size-3">{{ contador }}</div>
        </div>

        <div class="box sombra-box">
            <p class="subtitle is-3"><u>EJEMPLO BÁSICO - EVENTO MOUSEOVER (onMouseover)</u></p>

            <button class="button is-info" type="button" @mouseover="estadoVue = !estadoVue">
                {{ estadoVue ? 'Ocultar Logo Vue' : 'Mostrar Logo Vue' }}
            </button>
            <div class="block is-flex is-justify-content-center">
                <div class="card" v-if="estadoVue">
                    <div class="card-image">
                        <img src="../../../estaticas/images/vue-js-logo.png" alt="" />
                    </div>
                </div>
            </div>

            <button class="button is-success" type="button" @mouseover="estadoJs = !estadoJs">
                {{ estadoJs ? 'Ocultar Logo JavaScript' : 'Mostrar Logo Javascript' }}
            </button>

            <div class="block is-flex is-justify-content-center">
                <div class="card" v-if="estadoJs">
                    <div class="card-image">
                        <img src="../../../estaticas/images/javascript-logo.png" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div class="box sombra-box">
            <p class="subtitle is-3"><u>EJEMPLO BÁSICO - EVENTO CHANGE (onChange)</u></p>

            <div class="control">
                <label class="radio">
                    <input type="radio" name="SeleccionImangen" @change="cambiarImagen('vue-js-logo.png')" />
                    Vue Logo
                </label>
                <label class="radio">
                    <input type="radio" name="SeleccionImangen" @change="cambiarImagen('html5-logo.png')" />
                    HTML5 Logo
                </label>
                <label class="radio">
                    <input type="radio" name="SeleccionImangen" @change="cambiarImagen('CSS-logo.png')" />
                    CSS Logo
                </label>
                <label class="radio">
                    <input type="radio" name="SeleccionImangen" @change="cambiarImagen('javascript-logo.png')" />
                    JavaScript Logo
                </label>
                <label class="radio">
                    <input type="radio" name="SeleccionImangen" @change="cambiarImagen('no-image.png')" />
                    Sin Imagen
                </label>
            </div>

            <div class="block is-flex is-justify-content-center">
                <div class="card">
                    <div class="card-image">
                        <img :src="imagen" width="128" height="128" />
                    </div>
                </div>
            </div>

        </div>

        <hr style="background-color: gray; " />
        <NotaTexto nota="Video 10- Si desean ver la version este ejercicio de Vue.Js con CDN"
            anclaSrc="estaticas/pagina10.html" />
        <NotaTexto nota="Si desean ver el video 10 del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=MECrKp8B-7U" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';

const contador = ref(0);
const estadoVue = ref(false);
const estadoJs = ref(false);
const imagen = ref("../../../estaticas/images/no-image.png");

function cambiarImagen(imagen) {
    this.imagen = "../../../estaticas/images/" + imagen;
}

</script>

<style scoped>
@import url('../../assets/bulma/bulma.min.css');

.sombra-box {
    border: solid 1px black;
    box-shadow: 7px 7px 12px black;
}
</style>