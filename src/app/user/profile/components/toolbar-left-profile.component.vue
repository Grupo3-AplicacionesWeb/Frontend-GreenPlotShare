<template>

  <div class="profile-container">
    <!-- Toolbar izquierdo con opciones -->
    <div class="toolbar-left">
      <ul>
        <li v-for="option in profileOptions" :key="option.id" @click="selectOption(option)">
          <i :class="['fas', option.icon]"></i>
          <span class="option-label">{{ option.label }}</span>
        </li>
      </ul>


    </div>

    <!-- Área de detalles del perfil -->
    <div class="profile-details">
      <h2>{{ selectedOption ? selectedOption.label : '' }}</h2>
      <div class="profile-form">
        <div v-if="editing" class="form-editing">
          <div class="form-column">
            <div>
              <label>First Name: </label>
              <input v-model="user.firstName" :class="{ 'input-editing': editing }" />
            </div>
            <div>
              <label>Last Name: </label>
              <input v-model="user.lastName" :class="{ 'input-editing': editing }" />
            </div>
            <div>
              <label>Email Address: </label>
              <input v-model="user.email" :class="{ 'input-editing': editing }" />
            </div>
            <div>
              <label>Phone Number: </label>
              <input v-model="user.phoneNumber" :class="{ 'input-editing': editing }" />
              <button @click="saveChanges">Save</button>
            </div>
          </div>
          <div class="form-column">
            <div>
              <label>Date: </label>
              <input type="date" v-model="user.birthDate" :class="{ 'input-editing': editing }" />
            </div>
            <div>
              <label>Address: </label>
              <input v-model="user.address" :class="{ 'input-editing': editing }" />
            </div>
            <div>
              <label>Apartment:</label>
              <input v-model="user.apartment" :class="{ 'input-editing': editing }" />
            </div>
          </div>
        </div>

        <div v-else>

          <div class="data-container">
            <div class="data-column">
              <div>
                <label>First Name: </label>
                <span class="data-span">{{ user.firstName }}</span>
              </div>
              <div>
                <label>Last Name: </label>
                <span class="data-span">{{ user.lastName }}</span>
              </div>
              <div>
                <label>Email: </label>
                <span class="data-span">{{ user.email }}</span>
              </div>
              <div>
                <label>Phone Number: </label>
                <span class="data-span">{{ user.phoneNumber }}</span>
                <button @click="toggleEditing">Edit</button>
              </div>

            </div>
            <div class="data-column">
              <div>
                <label>Date: </label>
                <span class="data-span">{{ user.birthDate }}</span>
              </div>
              <div>
                <label>Address: </label>
                <span class="data-span">{{ user.address }}</span>
              </div>
              <div>
                <label>Apartment: </label>
                <span class="data-span">{{ user.apartment }}</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

    <!-- Área de foto de perfil -->
    <div class="profile-photo">
      <img :src="user.profilePhoto" alt="Foto de perfil" />
      <input type="file" @change="changeProfilePhoto" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'toolbar-left',
  data() {
    return {
      profileOptions: [
        { id: 1, label: 'Profile', icon: 'fa-user' },
        { id: 2, label: 'Configuration', icon: 'fa-cog' },
        { id: 3, label: 'Payment', icon: 'fa-money-bill-wave' },
        { id: 4, label: 'Security', icon: 'fa-shield-alt' },
        { id: 5, label: 'Password', icon: 'fa-key' },
        { id: 6, label: 'Logout', icon: 'fa-sign-out-alt' }
      ],
      selectedOption: null,
      user: {
        firstName: 'Jorge',
        lastName: 'Vins',
        email: 'jorvins@example.com',
        phoneNumber: '999999999',
        birthDate: '01-01-2001',
        address: 'av bolivia',
        apartment: '- - -',
        profilePhoto: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      },
      editing: false
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
    toggleEditing() {
      this.editing = !this.editing;
    },
    saveChanges() {
      // Aquí puedes implementar la lógica para guardar los cambios
      console.log('Cambios guardados:', this.user);
      this.toggleEditing(); // Alternativamente, podrías desactivar la edición aquí si prefieres
    },
    changeProfilePhoto(event) {
      const file = event.target.files[0];
      // Aquí puedes implementar la lógica para guardar y mostrar la nueva foto de perfil
      console.log('Nueva foto seleccionada:', file.name);
    }
  }
};
</script>

<style scoped>
.profile-container {
  display: flex;

}
.input-editing {
  background-color: #6f9573;
}
.toolbar-left {
  width: 100vw; /* 100% del ancho de la ventana */
  height: 100vh; /* 100% de la altura de la ventana */
  background-color: #729976;
  font-family: 'Bree Serif', serif;
  font-size: 20px;
}

.toolbar-left ul {
  list-style: none; /* Eliminar las marcas de lista */

}

.toolbar-left li {
  display: flex;
  align-items: center;
  color:black;
}

/* Estilo para el cuadro verde circular */
.data-span {
  display: inline-block;

  padding: 8px;
  border-radius: 7px;
  background-color: #729976;
  color: #ded9d9;
  width: 200px;
  font-family: 'Bree Serif', serif;
}

.profile-details {
  flex: 1;
  padding: 20px;
}

.profile-details h2 {
  text-align: start;
  color: black;
  font-family: 'Bree Serif', serif;
  font-size: 54px;
  padding-left: 15px;
}

.profile-form {
  margin-top: 20px;
  color: #adb0ad;

}

.profile-form div {
  margin-bottom: 10px;
  width: auto;

}

.profile-photo {
  padding: 20px;
}

.profile-photo img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

button {
  color: #729976;
  border-radius: 50px;
  margin-top: 20px;
  font-family: 'Bree Serif', serif;
  font-size: 20px;

}


.option-label {
  margin-left: 10px; /* Ajustar el margen entre el icono y el texto */
}

.data-container {
  display: flex;
  justify-content: flex-end;
}

.data-column {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 20px; /* Ajustar el margen entre las columnas */
}

.data-column > div {
  margin-bottom: 10px; /* Ajustar el espacio entre los elementos */
}

.form-editing {
  display: flex;
}

.form-column {
  flex: 1;
  margin-right: 20px;
}

</style>
