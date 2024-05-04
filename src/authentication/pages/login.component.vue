

<template>
  <div class="login-container">
    <video class="video-fondo" autoplay loop muted>
      <source src="../../../public/video/fondo-login.mp4" type="video/mp4">
    </video>
      <div class="login-form__container">
        <pv-card class="bg-primary form__login">
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
              <p>¿todavía no tienes una cuenta? <a href="/register" style="text-decoration: none; color: black">crear cuenta</a></p>
            </div>
          </template>
        </pv-card>
      </div>
  </div>
</template>

<style>

  .login-container{
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


  .login-form__container{
    width: 60%;
    display: flex;
    justify-content: center;
    max-width: 500px;
  }

  .form__login{
    width: 100%;
    z-index: 2;
  }

</style>

<script>

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
          localStorage.setItem('user', JSON.stringify(user));
          this.$router.push('/home');
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
