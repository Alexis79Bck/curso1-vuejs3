<template>
    <div class="box sombra-box">
        <span class="is-size-3 has-text-primary">Componente Nro. {{ numero }}</span>
        <p class="title is-4 has-text-centered">{{ mensaje }}</p>
        <div class="columns is-flex is-justify-content-center ">
            <div class="column is-one-fifth is-flex is-justify-content-end">
                <button class="button button-small is-link has-text-centered" @click="decrementar"> - </button>
            </div>
            <div class="column is-one-fifth is-flex is-justify-content-center">
                <span class="title is-2 has-text-centered has-text-danger"> {{ counter }} </span>
            </div>
            <div class="column is-one-fifth is-flex is-justify-content-start">
                <button class="button button-small is-link has-text-centered" @click="incrementar"> + </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const mensaje = ref("Este mensaje es una propiedad dentro del componente personalizado");
const counter = ref(0);

defineProps({
    numero: Number,
});

function incrementar() {
    return counter.value++;
};
function decrementar() {
    return counter.value--;
};
</script>

 