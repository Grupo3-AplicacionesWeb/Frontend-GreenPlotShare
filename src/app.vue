<script>

import AgriculturalLand from "./public/agricultural-land/pages/agriculturalLand.component.vue";
import Home from "./public/pages/home.component.vue";
import About from "./public/pages/about.component.vue";

export default {
  name: "app",
  components: {About, Home, AgriculturalLand},
  title:"Green Plot Share",
  data(){
    return{
      drawer:false,
      items:[
        {label:"Home", to: "/home"},
        {label:"About Us", to:"/about"},
        {label:"Agricultural Land", to:"/agricultural-land"},
      ]
    }

  },
  methods:{
    toggleDrawer(){
      this.drawer = !this.drawer;
    }
  }

}
</script>

<template>
  <div>
    <!-- Enlaces de Router para el header-->
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/agricultural-land">Agricultural Land</router-link>

    <!-- Componentes estáticos -->
    <home></home>
    <about></about>
    <agricultural-land></agricultural-land>


    <router-view></router-view>
  </div>
</template>

<style>
</style>
