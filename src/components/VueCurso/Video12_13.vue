<!-- 
/**********************************************************************
* Atributos booleanos HTML y enlace de estilos con v-bind:class.
* Video 12 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=mppzB_PJR4Q
*
* Video 13 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=JOiM7WceXEQ
***********************************************************************/
-->
<template>
    <div>
        <TextoEncabezado titulo="Video 12 y 13 - Atributos booleanos HTML y enlace de estilos con v-bind:class" />

        <div class="container mt-4 box sombra-box">
            <div class="title is-2 has-text-centered">{{ mensajes[0] }}</div>
            <div class="block subtitle is-5">
                Los atributos <code>disabled</code>, <code>required</code>,
                <code>selected</code> (en el caso de la Etiqueta Select),
                <code>checked</code> (en el caso de las Etiquetas Input Checkbox y
                Radio Button), son booleanos. Debido a que unicamente pueden ser
                «true» o «false»
            </div>
            <div class="is-flex is-justify-content-center">
                <div class="select">
                    <select>
                        <option v-for="fruta in frutas" :value="fruta.id" :selected="fruta.seleccionado">
                            #{{ fruta.id }} -{{ fruta.nombre }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="container mt-4 box sombra-box">
            <div class="title is-2 has-text-centered">{{ mensajes[1] }}</div>
            <div class="block subtitle is-5">
                Para enlazar una clase de Estilos a un elemento o componente, se
                utiliza la directiva <code>v-bind:</code> sobre el atributo class.
            </div>
            <div class="columns is-flex is-justify-content-center">
                <div class="column is-2">
                    <div class="select">
                        <select v-model="sombraId" @change="cambiarSombra(sombraId)">
                            <option v-for="sombra in coloresSombra" :value="sombra.id">
                                {{ sombra.color }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="column is-2 has-background-black-ter mx-2" style="height: 125px;">
                    <div class="box has-background-light " :class="sombraClase"></div>
                </div>
            </div>
            <hr />
            <NotaTexto nota="Video 12 y 13 - Si desean ver la version este ejercicio de Vue.Js con CDN"
                anclaSrc="estaticas/pagina12_13.html" />
            <NotaTexto nota="Si desean ver el video 12 del canal Code Stack"
                anclaSrc=" https://www.youtube.com/watch?v=mppzB_PJR4Q" />
            <NotaTexto nota="Si desean ver el video 13 del canal Code Stack"
                anclaSrc="https://www.youtube.com/watch?v=JOiM7WceXEQ" />
        </div>
    </div>
</template>

<script setup>
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';
import { ref } from 'vue';

const mensajes = ref([
    "12 - Atributos Booleanos HTML",
    "13 - Enlaces de Estilos con v-bind:class",
])

const frutaId = ref(3);
const frutas = ref([
    {
        id: 1,
        nombre: "Mango",
        seleccionado: false,
    },
    {
        id: 2,
        nombre: "Papaya",
        seleccionado: false,
    },
    {
        id: 3,
        nombre: "Piña",
        seleccionado: true,
    },
    {
        id: 4,
        nombre: "Manzana",
        seleccionado: false,
    },
    {
        id: 5,
        nombre: "Pera",
        seleccionado: false,
    },
]);


const sombraId = ref("");
const sombraClase = ref("");

const coloresSombra = ref([
    {
        id: 1,
        color: "Ninguno",
        clase: "",
    },
    {
        id: 2,
        color: "Rojo",
        clase: "sombra-rojo-box",
    },
    {
        id: 3,
        color: "Verde",
        clase: "sombra-verde-box",
    },
    {
        id: 4,
        color: "Azul",
        clase: "sombra-azul-box",
    },
    {
        id: 5,
        color: "Amarillo",
        clase: "sombra-amarillo-box",
    },
    {
        id: 6,
        color: "Turquesa",
        clase: "sombra-turquesa-box",
    },
    {
        id: 7,
        color: "Violeta",
        clase: "sombra-violeta-box",
    },
]);

function cambiarSombra(id) {
    const encontrado = this.coloresSombra.find(
        (color) => color.id === id
    );

    if (encontrado) {
        return (this.sombraClase = encontrado.clase);
    }
}
</script>

<style scoped>
@import url('../../assets/bulma/bulma.min.css');

.sombra-box {
    border: solid 1px black;
    box-shadow: 7px 7px 12px black;
}

.sombra-violeta-box {
    border: solid 1px black;
    box-shadow: 7px 7px 12px violet;
}

.sombra-turquesa-box {
    border: solid 1px black;
    box-shadow: 7px 7px 12px cyan;
}

.sombra-amarillo-box {
    border: solid 1px black;
    box-shadow: 7px 7px 12px yellow;
}

.sombra-rojo-box {
    border: solid 1px black;
    box-shadow: 7px 7px 12px red;
}

.sombra-azul-box {
    border: solid 1px black;
    box-shadow: 7px 7px 12px blue;
}

.sombra-verde-box {
    border: solid 1px black;
    box-shadow: 7px 7px 12px greenyellow;
}

.redondeado {
    border-radius: 50px;
}
</style>