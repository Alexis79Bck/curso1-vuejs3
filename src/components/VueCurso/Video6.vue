<!-- 
/**********************************************************************
* Bucles Anidados con v-for, Obtener Índice, Bucles a Partir de Rangos.
* Video 6 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=5jjMnb9qcVg
***********************************************************************/
-->

<script setup>
import { ref } from 'vue';
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';
const objectFrutas = [
    {
        id: 1,
        nombre: "Mango",
        origen: [
            {
                id_origen: 1,
                pais: "Colombia"
            },
            {
                id_origen: 2,
                pais: "Venezuela"
            },
            {
                id_origen: 3,
                pais: "El Salvador"
            },
            {
                id_origen: 4,
                pais: "Perú"
            },
        ]
    },
    {
        id: 2,
        nombre: "Papaya",
        origen: [
            {
                id_origen: 1,
                pais: "Colombia"
            },
            {
                id_origen: 2,
                pais: "Venezuela"
            },
            {
                id_origen: 3,
                pais: "El Salvador"
            },
            {
                id_origen: 5,
                pais: "Guatemala"
            },
        ]
    },
    {
        id: 3,
        nombre: "Piña",
        origen: [
            {
                id_origen: 2,
                pais: "Venezuela"
            },
            {
                id_origen: 3,
                pais: "El Salvador"
            },
            {
                id_origen: 6,
                pais: "Brasil"
            },
        ]
    },
    {
        id: 4,
        nombre: "Guayaba",
        origen: [
            {
                id_origen: 1,
                pais: "Colombia"
            },
            {
                id_origen: 2,
                pais: "Venezuela"
            },
        ]
    },
    {
        id: 5,
        nombre: "Maracuyá",
        origen: [
            {
                id_origen: 2,
                pais: "Venezuela"
            },
            {
                id_origen: 3,
                pais: "El Salvador"
            },
            {
                id_origen: 4,
                pais: "Perú"
            },
            {
                id_origen: 6,
                pais: "Brasil"
            },
        ]
    },
    {
        id: 6,
        nombre: "Carambola",
        origen: [
            {
                id_origen: 4,
                pais: "Perú"
            },
            {
                id_origen: 7,
                pais: "Ecuador"
            },
            {
                id_origen: 8,
                pais: "Mexico"
            },
        ]
    },
    {
        id: 7,
        nombre: "Lichi",
        origen: [
            {
                id_origen: 2,
                pais: "Venezuela"
            },
            {
                id_origen: 3,
                pais: "El Salvador"
            },
            {
                id_origen: 4,
                pais: "Perú"
            },
            {
                id_origen: 6,
                pais: "Brasil"
            },
        ]
    },
    {
        id: 8,
        nombre: "Granadilla",
        origen: [
            {
                id_origen: 2,
                pais: "Venezuela"
            },
            {
                id_origen: 3,
                pais: "El Salvador"
            },
            {
                id_origen: 4,
                pais: "Perú"
            },
            {
                id_origen: 6,
                pais: "Brasil"
            },
        ]
    },
    {
        id: 9,
        nombre: "Chirimoya",
        origen: [
            {
                id_origen: 4,
                pais: "Perú"
            },
            {
                id_origen: 7,
                pais: "Ecuador"
            },
            {
                id_origen: 8,
                pais: "Mexico"
            },
        ]
    },
    {
        id: 10,
        nombre: "Pitahaya",
        origen: [
            {
                id_origen: 4,
                pais: "Perú"
            },
            {
                id_origen: 7,
                pais: "Ecuador"
            },
            {
                id_origen: 8,
                pais: "Mexico"
            },
        ]
    },
];

const frutas_con_id = ref(objectFrutas);


</script>

<template>
    <div>
        <TextoEncabezado titulo="Video 6 - Bucles Anidados con v-for" />

        <div style="display: flex; justify-content: center; width: 100%">
            <ul>
                <li v-for="fruta in frutas_con_id">
                    #{{ fruta.id }} - Fruta: {{ fruta.nombre }}
                    <ul>
                        <li v-for="pais in fruta.origen">
                            {{ pais.pais }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <hr />
        <NotaTexto nota="Video 6 - Si desean ver la version este ejercicio de Vue.Js con CDN"
            anclaSrc="estaticas/pagina6.html" />
        <NotaTexto nota="Si desean ver el video del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=5jjMnb9qcVg" />
    </div>
</template>



