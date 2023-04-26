<!-- 
/**********************************************************************
* Conexión a API Pública Para Datos de Prueba.
* Video 7 del curso de VueJs 3 del canal Code Stack.
* Link: https://www.youtube.com/watch?v=5WsfNs_zkvg
***********************************************************************/
-->

<script setup>
import { ref, onMounted } from 'vue';
import NotaTexto from '../Global/NotaTexto.vue';
import TextoEncabezado from '../Global/TextoEncabezado.vue';
 
function getUsuariosJP() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            return data;
        }); 
}

function getUsuariosRndUser() {
    fetch("https://randomuser.me/api/?results=10&nat=es")
        .then((response) => response.json())
        .then((data) => {
            return  data.results;
        });
    
    
}

onMounted(() => {
   getUsuariosJP();
    getUsuariosRndUser();
})

</script>

<template>
    <div>
        <TextoEncabezado titulo="Video 7 - Conexión a API Pública Para Datos de Prueba utilizando API Fetch" />
 
        <div style="
              display: flex;
              flex-wrap: wrap;
              flex-grow: 1;
              justify-content: center;
              width: 100%;
            ">
            <div v-for="(usuario, idx) in usuariosJP" :key="idx" style="
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
            </div>
        </div>
        <h5 style="color: blue">
            Datos tomado del sitio
            <a href="https://jsonplaceholder.typicode.com" target="_blank">https://jsonplaceholder.typicode.com</a>
        </h5>
       
        <hr />

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
        <NotaTexto nota="Video 7 - Si desean ver la version este ejercicio de Vue.Js con CDN"
            anclaSrc="estaticas/pagina7.html" />
        <NotaTexto nota="Si desean ver el video del canal Code Stack"
            anclaSrc="https://www.youtube.com/watch?v=5WsfNs_zkvg" />
    </div>
</template>



