import { ref, onMounted } from 'vue';

const emitter = {
  // Creamos un objeto Vue para emitir y escuchar eventos
  vm: null,
  // Creamos un método para enviar eventos
  emit(event, ...args) {
    this.vm.$emit(event, ...args);
  },
  // Creamos un método para escuchar eventos
  on(event, callback) {
    this.vm.$on(event, callback);
  },
  // Creamos un método para dejar de escuchar eventos
  off(event, callback) {
    this.vm.$off(event, callback);
  }
};

export default emitter;