<script>
import { UserApiService } from "../services/users-api.service.js";
export default {
  name: "register",
  title: "Register",
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      password: "",
      validationStart: false,
    };
  },
  computed: {
    isNameValid() {
      if (this.validationStart) {
        return this.name.trim() !== "";
      } else {
        return true;
      }
    },
    isLastnameValid() {
      if (this.validationStart) {
        return this.lastname.trim() !== "";
      } else {
        return true;
      }
    },
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
    async register() {
      this.validationStart = true;
      if (
        !this.isNameValid ||
        !this.isLastnameValid ||
        !this.isEmailValid ||
        !this.isPasswordValid
      ) {
        return;
      }
      try {
        const newUser = {
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        };
        const userApiService = new UserApiService();
        const response = await userApiService.create(newUser);

        if (response.status == 201) {
          this.$toast.add({
            severity: "success",
            summary: "Account Created",
            detail: "Your account has been successfully created!",
            life: 3000,
          });
          this.clearFields();
        } else {
          throw new Error("Failed to register user");
        }
      } catch (error) {
        console.error("Error registering user:", error);
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to register user. Please try again later.",
          life: 3000,
        });
      }
    },
    clearFields() {
      this.name = "";
      this.lastname = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<template>
  <div class="register-container">
    <video class="video-fondo" autoplay loop muted>
      <source src="../../../public/video/fondo-login.mp4" type="video/mp4">
    </video>
    <div class="register-form__container">
      <pv-card class="bg-primary register__login">
        <template #title>
          <h1 class="text-center text-black-alpha-90">New Account?</h1>
        </template>
        <template #content>
          <form @submit.prevent="register">
            <div class="mb-5">
              <pv-float-label>
                <pv-input-text
                  id="name"
                  v-model="name"
                  :class="{ 'p-invalid': !isNameValid }"
                />
                <label for="name" class="text-black-alpha-90">Enter your name</label>
              </pv-float-label>
              <small class="text-red-600" v-if="!isNameValid"
                >Please, enter a valid name.</small
              >
            </div>
            <div class="mb-5">
              <pv-float-label>
                <pv-input-text
                  id="lastname"
                  v-model="lastname"
                  :class="{ 'p-invalid': !isLastnameValid }"
                />
                <label for="lastname" class="text-black-alpha-90"
                  >Enter your lastname</label
                >
              </pv-float-label>
              <small class="text-red-600" v-if="!isLastnameValid"
                >Please, enter a valid lastname.</small
              >
            </div>
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
            <div class="mb-5">
              <pv-float-label>
                <pv-password
                  id="password"
                  v-model="password"
                  inputId="password"
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
            <div class="text-center">
              <pv-button
                type="submit"
                label="Register now"
                severity="contrast"
                rounded
                class="w-full"
              />
              <router-link to="/login">
                <pv-button
                  label="Already have an account? Login now"
                  class="text-black-alpha-90 text-sm"
                  link
                />
              </router-link>
            </div>
          </form>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style>

.register-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #F2FCF2;
  position: relative;
  overflow: hidden;
}

.video-fondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.register-form__container{
  width: 60%;
  display: flex;
  justify-content: center;
  max-width: 500px;
}

.register__login{
  width: 100%;
  z-index: 2;
}

</style>
