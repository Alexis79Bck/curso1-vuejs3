<!--
/**********************************************************************
* Ciclo de Vida de Vue o Lifecycle hooks .
* Video 16 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=1WSnbmHJ5Ik
***********************************************************************/
-->

<template>
    <div>
        <TextoEncabezado titulo="Video 16 - Ciclo de vida o Lifecycle hooks" />

        <div class="box sombra-box">
            <div class="title is-2 has-text-centered">CRUD DE LIBROS</div>
            <div class="subtitle is-6 has-text-centered">Presione Ctrl + i, para ver la consola de Depuración</div>
            <div class="field">
                <div class="columns">
                    <div class="column">
                        <span>Título:</span>
                        <input class="input is-primary is-small" type="text" v-model="titulo" />
                    </div>
                    <div class="column">
                        <span>Autor:</span>
                        <input class="input is-primary is-small" type="text" v-model="autor" />
                    </div>
                    <div class="column">
                        <button class="button is-small is-link is-outlined" @click="agregarLibro()">
                            Agregar libro
                        </button>
                    </div>
                </div>
            </div>
            <div class="content is-flex is-justify-content-center" v-if="cargando">
                <img src="../../../estaticas/images/beforeCreate_loading.gif" width="128" height="128" />
            </div>
            <div class="content" v-else>
                <div class="columns">
                    <div class="column">
                        <div v-if="notificacion" class="notification is-info">
                            {{ notificacion }}
                        </div>
                    </div>
                </div>
                <ul>
                    <li v-for="(libro, idx) in libros" :key="idx">
                        <div class="notification is-light">
                            <div class="columns">
                                <div class="column">
                                    <span>{{ libro.titulo }}</span>
                                </div>
                                <div class="column">
                                    <span>{{ libro.autor }}</span>
                                </div>
                                <div class="column is-2">
                                    <button class="button is-small is-primary" @click="editarLibro(idx)">
                                        Editar
                                    </button>
                                </div>
                                <div class="column is-2">
                                    <button class="button is-small is-danger" @click="eliminarLibro(idx)">
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="box sombra-box " style="text-align: left;">
            <p class="subtitle is-5">
                Cada instancia de componente Vue pasa por una serie de pasos de
                inicialización cuando se crea; por ejemplo, necesita configurar la
                observación de datos, compilar la plantilla, montar la instancia en el
                DOM y actualizar el DOM cuando cambian los datos.
            </p>
            <p class="subtitle is-5">
                Existen 8 hooks o ganchos dando a los usuarios la oportunidad de
                añadir su propio código en etapas específicas del ciclo de vida. Los hooks son:
                <em class="is-family-monospace  has-text-danger has-text-weight-semibold">onBeforeCreate, created, </em>
                <em class="is-family-monospace  has-text-info has-text-weight-semibold">beforeMount, mounted, beforeUpdate,
                    updated, </em>
                <em class="is-family-monospace  has-text-link has-text-weight-semibold">beforeUnmount y unmounted</em>
            </p>
            <p class="subtitle is-5">
                Hay que tener en cuenta y con total consideración lo siguiente para cada momento del ciclo de vida: <br />
                - Los hooks <em class="is-family-monospace  has-text-danger has-text-weight-semibold">onBeforeCreate y
                    onCreated,</em> es cuando se
                esta instanciando el componente pero sin tener acceso al DOM.<br />
                - Los hooks <em class="is-family-monospace  has-text-info has-text-weight-semibold">onBeforeMount,
                    onMounted, onBeforeUpdate, onUpdated</em>
                es cuando el componente ya está instanciado, podemos tener acceso al DOM y manipular los metodos y
                propiedades asociados a él.<br />
                - Los hooks <em class="is-family-monospace  has-text-link has-text-weight-semibold">onBeforeUnmount y
                    onUnmounted,</em> es cuando se
                requiere realizar cualquien función o acción antes o despues de la desmontaje o destrucción del
                componente.<br />

            </p>
            <div class="container is-flex is-justify-content-center my-4">
                <img src="../../../estaticas/images/vue_lifecycle.png" width=633 height=1001>
            </div>


        </div>



        <hr />
        <NotaTexto nota="Video 16 - Si desean ver la version este ejercicio de Vue.Js con CDN"
            anclaSrc="estaticas/pagina16.html" />
        <NotaTexto nota="Si desean ver el video 16 del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=1WSnbmHJ5Ik" />
    </div>
</template>

<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';

const mensajeBeforeMount = ref('');
const mensajeMounted = ref('');
const mensajeBeforeUpdate = ref('');
const mensajeUpdated = ref('');
const mensajeBeforeUnmount = ref('');
const mensajeUnmounted = ref('');
const libros = ref([]);
const titulo = ref("");
const autor = ref("");
const libroEditado = ref(null);
const cargando = ref(false);
const notificacion = ref("");


onBeforeMount(() => {
    obtenerLibros();
    console.log("Este es un texto antes de montarse el componente: onBeforeMount");
    mensajeBeforeMount.value = "Hook onBeforeMount --> Paso 1";

});

onMounted(() => {
    console.log("Este es un texto despues de montarse el componente: onMounted");
    mensajeMounted.value = "Hook onMounted--> Paso 2";

});
onBeforeUpdate(() => {

    console.log("Este es un texto antes de actualizarse el componente: onBeforeUpdate");
    mensajeBeforeUpdate.value = "Hook onBeforeUpdated--> Paso 3 (Ciclico)";

});

onUpdated(() => {

    console.log("Este es un texto despues de actualizarse el componente: onUpdated");
    mensajeUpdated.value = "Hook onUpdated--> Paso 4 (Ciclico)";


});

onBeforeUnmount(() => {
    console.log("Este es un texto antes de desmontarse el componente: onBeforeUnmount");
    mensajeBeforeUnmount.value = "Hook onBeforeUnmount--> Paso 5";


});

onUnmounted(() => {
    console.log("Este es un texto despues de desmontarse el componente: onUnmounted");
    mensajeUnmounted.value = "Hook onUnmounted--> Paso 6";

});

function obtenerLibros() {
    cargando.value = true;
    // Simulación de una llamada a la API con un retraso de 2 segundos
    setTimeout(() => {
        libros.value = [
            { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
            {
                titulo: "Cien años de soledad",
                autor: "Gabriel García Márquez",
            },
            { titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald" },
        ];
        cargando.value = false;
    }, 2000);
};

function agregarLibro() {
    if (titulo.value.trim() === "" || autor.value.trim() === "") {
        notificacion.value = "Por favor, ingrese un título y un autor";
        setTimeout(() => {
            notificacion.value = "";
        }, 2000);
        return;
    }
    notificacion.value = "";
    if (libroEditado.value === null) {
        libros.value.push({ titulo: titulo.value, autor: autor.value });
        notificacion.value = "Libro agregado correctamente";
    } else {
        libros.value[libroEditado.value] = {
            titulo: titulo.value,
            autor: autor.value,
        };
        notificacion.value = "Libro editado correctamente";
        libroEditado.value = null;
    }
    titulo.value = "";
    autor.value = "";
    setTimeout(() => {
        notificacion.value = "";
    }, 3000);
};

function editarLibro(index) {
    libroEditado.value = index;
    titulo.value = libros.value[index].titulo;
    autor.value = libros.value[index].autor;
};
function eliminarLibro(index) {
    libros.value.splice(index, 1);
    notificacion.value = "Libro eliminado correctamente";
    setTimeout(() => {
        notificacion.value = "";
    }, 3000);
};
</script>

<style scoped>
.sombra-box {
    border: solid 1px black;
    box-shadow: 7px 7px 12px black;
}
</style>