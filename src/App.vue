<template>
  <div id="app">
    <toolbar-left-profile></toolbar-left-profile>
  </div>

</template>

<script>
import ToolbarLeftProfile from "./app/user/profile/components/toolbar-left-profile.component.vue";

export default {
  name: 'App',
  components: {
    ToolbarLeftProfile// Registra el componente para su uso en el template
  }
};
</script>


<style>
</style>
