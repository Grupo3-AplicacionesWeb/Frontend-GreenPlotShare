<script>
export default {
  name: "app",
  title: "Green Plot Share",
  data() {
    return {
      drawer: false,
      items: [
        { label: "Login", to: "/login" },
        { label: "Register", to: "/register" },
        { label: "Home", to: "/home" },
        { label: "About us", to: "/about" },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
<template>
  <router-view />
</template>
