<!-- 
/**********************************************************************
* Conexión a API Pública Para Datos de Prueba.
* Video 7 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=5WsfNs_zkvg

* Conexión a API Pública Para Datos de Prueba.
* Video 8 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=H_azyZ3RjSM

***********************************************************************/
-->

<script setup>
import { ref, onMounted } from 'vue';
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue'; 

const usuariosJP = ref([]);
const usuariosRndUser = ref([]);

const getUsuariosJP = async () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json());
};

const getUsuariosRndUser = async () => {
    return fetch("https://randomuser.me/api/?results=10&nat=es")
        .then((response) => response.json());
};

onMounted(() => {
    getUsuariosJP().then(data => {
        usuariosJP.value = data;
    }).catch(err => { 
        console.log(err);
    });
    getUsuariosRndUser().then(data => {
        usuariosRndUser.value = data.results;
    }).catch(err => { 
        console.log(err);
    });
})

</script>

<template>
    <div>
    <TextoEncabezado titulo="Video 7 - Conexión a API Pública Para Datos de Prueba utilizando API Fetch" />
    <TextoEncabezado titulo="Video 8 - Ordenar los Datos de Prueba obtenidos en una tabla" />
    <div style="
              display:table;
              
              width: 100%;
            ">
        <table class="table-espaciado table-sombra table-bordes">
                <thead class="table-encabezado">
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>CORREO</th>
                        <th>TELEFONO</th>
                        <th>SITIO WEB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(usuario, idx) in usuariosJP" :key="idx">
                        <td class="celda-bordes">{{ usuario.id }}</td>
                        <td class="celda-bordes">{{ usuario.name }}</td>
                        <td class="celda-bordes">{{ usuario.email }}</td>
                        <td class="celda-bordes">{{ usuario.phone }}</td>
                        <td class="celda-bordes">{{ usuario.website }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="5">
                            <h5 style="color: blue">
                                <small>Datos tomado del sitio <a href="https://jsonplaceholder.typicode.com"
                                        target="_blank">https://jsonplaceholder.typicode.com</a> </small>
                            </h5>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <!-- <div v-for="(usuario, idx) in usuariosJP" :key="idx" style="
                        margin: 8px;
                        padding: 0px 8px;
                        width: 500px;
                        background-color: rgb(255, 230, 230);
                        box-shadow: 7px 7px 18px black;
                      ">
                        <h4>Usuario Nro. {{ usuario.id }}:</h4>
                        <ul>
                            <li>Nombre: {{ usuario.name }}</li>
                            <li>Correo: {{ usuario.email }}</li>
                            <li>Teléfono: {{ usuario.phone }}</li>
                            <li>Sitio Web: {{ usuario.website }}</li>
                        </ul>
                    </div> -->
        </div>

        <hr />
        <TextoEncabezado titulo="El orden de los Datos puede ser expresado en un elemento diferente." />
        <div style="
                      display: flex;
                      flex-wrap: wrap;
                      flex-grow: 1;
                      justify-content: center;
                      width: 100%;
                    ">

            <div v-for="(usuario, idx) in usuariosRndUser" :key="idx" style="
                        margin: 8px;
                        padding: 0px 8px;
                        width: 500px;
                        background-color: rgb(255, 230, 230);
                        box-shadow: 7px 7px 18px black;
                      ">
                <h4>Usuario DNI-{{ usuario.id.value }}:</h4>
                <ul>
                    <li>Nombre: {{ usuario.name.first }} {{ usuario.name.last }}</li>
                    <li>Correo: {{ usuario.email }}</li>
                    <li>Teléfono: {{ usuario.phone }}</li>
                    <li>País Origen: {{ usuario.location.country }}</li>
                </ul>
            </div>
        </div>
        <h5 style="color: blue">
            Datos tomado del sitio
            <a href="https://randomuser.me/" target="_blank">https://randomuser.me/</a>
        </h5>

        <hr />
        <NotaTexto nota="Video 7 y Video 8 - Si desean ver la version este ejercicio de Vue.Js con CDN"
            anclaSrc="estaticas/pagina7_8.html" />
        <NotaTexto nota="Si desean ver el video 7 del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=5WsfNs_zkvg" />
        <NotaTexto nota="Si desean ver el video 8 del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=H_azyZ3RjSM" />
    </div>
</template>

<style scoped >
.table-espaciado {
    margin: 8px;
    width: 100%;
}

.table-bordes {
    border-style: solid;
    border-width: 2px;
    border-color: black;
}

.celda-bordes {
    border-style: solid;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.5);
}

.table-encabezado {
    background-color: rgb(255, 230, 230);
}

.table-sombra {
    box-shadow: 7px 7px 12px black;
}
</style>



