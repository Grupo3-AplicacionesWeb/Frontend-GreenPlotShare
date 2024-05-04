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
              <input v-model="users.name" :class="{ 'input-editing': editing }" />
            </div>
            <div>
              <label>Last Name: </label>
              <input v-model="users.lastname" :class="{ 'input-editing': editing }" />
            </div>
            <div>
              <label>Email Address: </label>
              <input v-model="users.email" :class="{ 'input-editing': editing }" />
            </div>
            <div>
              <label>Phone Number: </label>
              <input v-model="users.phoneNumber" :class="{ 'input-editing': editing }" />
              <button @click="saveChanges">Save</button>
            </div>
          </div>
          <div class="form-column">
            <div>
              <label>Date: </label>
              <input type="date" v-model="users.birthDate" :class="{ 'input-editing': editing }" />
            </div>
            <div>
              <label>Address: </label>
              <input v-model="users.address" :class="{ 'input-editing': editing }" />
            </div>
            <div>
              <label>Apartment:</label>
              <input v-model="users.apartment" :class="{ 'input-editing': editing }" />
            </div>
          </div>
        </div>

        <div v-else>

          <div class="data-container">
            <div class="data-column">
              <div>
                <label>First Name: </label>
                <span class="data-span">{{ users.name }}</span>
              </div>
              <div>
                <label>Last Name: </label>
                <span class="data-span">{{ users.lastname }}</span>
              </div>
              <div>
                <label>Email: </label>
                <span class="data-span">{{ users.email }}</span>
              </div>
              <div>
                <label>Phone Number: </label>
                <span class="data-span">{{ users.phoneNumber }}</span>
                <button @click="toggleEditing">Edit</button>
              </div>

            </div>
            <div class="data-column">
              <div>
                <label>Date: </label>
                <span class="data-span">{{ users.birthDate }}</span>
              </div>
              <div>
                <label>Address: </label>
                <span class="data-span">{{ users.address }}</span>
              </div>
              <div>
                <label>Apartment: </label>
                <span class="data-span">{{ users.apartment }}</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

    <!-- Área de foto de perfil -->
    <div class="profile-photo">
      <img :src="users.profilePhoto" alt="Foto de perfil" class="profile-image" />
      <input type="file" ref="fileInput" style="display: none" @change="handleFileChange">
      <button @click="openFilePicker">Edit Photo</button>
    </div>
  </div>
</template>

<<script>
import axios from 'axios';
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
      users: {},
      editing: false
    };
  },
  created() {
    // Cuando se carga el componente, hacemos una solicitud GET a la API para obtener los usuarios
    axios.get('http://localhost:3000/users')
        .then(response => {
          if (response.data && response.data.length > 0) {
            this.users = response.data[0]; // Tomamos el primer usuario de la matriz
          } else {
            console.error('No se encontraron usuarios en la respuesta.');
          }
        })
        .catch(error => {
          console.error('Error al obtener los usuarios:', error);
        });
  },


  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
    toggleEditing() {
      this.editing = !this.editing;
    },
    saveChanges() {
      // Realizar una solicitud PUT al servidor con los datos actualizados del usuario
      axios.put(`http://localhost:3000/users/${this.users.id}`, this.users)
          .then(response => {
            console.log('Cambios guardados:', response.data);
            this.toggleEditing();
          })
          .catch(error => {
            console.error('Error al guardar los cambios:', error);
          });
    },

    openFilePicker() {
      this.$refs.fileInput.click(); // Al hacer clic en el botón, se activará el clic en el input de tipo file
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      // Aquí puedes implementar la lógica para guardar y mostrar la nueva foto de perfil
      console.log('Nueva foto seleccionada:', file.name);
      // Actualizar la imagen de perfil con la nueva imagen seleccionada
      const reader = new FileReader();
      reader.onload = () => {
        this.users.profilePhoto = reader.result;
      };
      reader.readAsDataURL(file);
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
