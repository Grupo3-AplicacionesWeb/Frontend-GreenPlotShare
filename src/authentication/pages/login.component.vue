

<template>
  <div class="grid justify-content-center align-items-center min-h-screen w-full">
    <div class="md:col-10 lg:col-5 xl:col-3 text-left">
      <pv-card class="bg-primary">
        <template #title>
          <h1 class="text-center text-black-alpha-90">Sign in</h1>
        </template>
        <template #content>
          <div class="mb-5">
            <pv-float-label>
              <pv-input-text
                id="email"
                v-model="email"
                :class="{ 'p-invalid': !isEmailValid }"
              />
              <label for="email" class="text-black-alpha-90">Enter your email</label>
            </pv-float-label>
            <small class="text-red-600" v-if="!isEmailValid"
              >Please, enter a valid email.</small
            >
          </div>
          <div class="mb-3">
            <pv-float-label>
              <pv-password
                id="password"
                v-model="password"
                :feedback="false"
                toggleMask
                :class="{ 'p-invalid': !isPasswordValid, 'w-full': true }"
              />
              <label for="password" class="text-black-alpha-90"
                >Enter your password</label
              >
            </pv-float-label>
            <small class="text-red-600" v-if="!isPasswordValid"
              >Please, enter a valid password.</small
            >
          </div>
        </template>
        <template #footer>
          <div class="text-center">
            <pv-button @click="login" label="LOGIN" severity="contrast" rounded class="w-full"/>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>


<script>
import {LoginService} from "../services/login-service.js";

export default {
  name: "login",
  title: "Login",
  data() {
    return {
      email: "",
      password: "",
      validationStart: false,
      loginService: null,
    };
  },
  created() {
    this.loginService = new LoginService();
  },
  computed: {
    isEmailValid() {
      if (this.validationStart) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(this.email);
      } else {
        return true;
      }
    },
    isPasswordValid() {
      if (this.validationStart) {
        return this.password.trim() !== "";
      } else {
        return true;
      }
    },
  },
  methods: {
    async login() {
      this.validationStart = true;
      if (!this.isEmailValid && !this.isPasswordValid) {
        return;
      }
      try {
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();
        const user = users.find(
            (u) => u.email === this.email && u.password === this.password
        );
        if (user) {
          this.$toast.add({
            severity: "success",
            summary: "Successfully logged in",
            detail: `Hi ${user.name}`,
            life: 3000,
          });
        } else {
          this.$toast.add({
            severity: "error",
            summary: "Error Message",
            detail: "User not found",
            life: 3000,
          });
        }
      } catch (error) {
        console.error("Error logging in:", error);
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Upps, something wrong happened",
          life: 3000,
        });
      }
    },
  },
};
</script>