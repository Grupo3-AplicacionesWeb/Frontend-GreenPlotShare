<template>
  <div id="app">
    <!-- Renderiza el componente toolbar-left-profile -->
    <toolbar-left-profile></toolbar-left-profile>
  </div>

</template>

<script>
// Importa el componente toolbar-left-profile
import ToolbarLeftProfile from "./app/user/profile/components/toolbar-left-profile.component.vue";

export default {
  name: 'App',
  components: {
    ToolbarLeftProfile// Registra el componente para su uso en el template
  }
};
</script>


<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #f0faf0;
}

</style>
