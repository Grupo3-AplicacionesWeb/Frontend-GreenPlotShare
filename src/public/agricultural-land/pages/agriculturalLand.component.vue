<script>
import { ref } from "vue";
import {LandsApiService} from "../services/lands-api.services.js";
import {CitiesApiServices} from "../services/cities-api.services.js";
import {typeApiServices} from "../services/type-api-services.js";
import {CategoriesApiService} from "../services/categories-api.services.js";

export default {
  name: "agricultural-land",
  title: "Agricultural Land",
  data(){

    return {
      citiesService:null,
      landService: null,
      typesService:null,
      categoriesService:null,

      cities:[],
      types:[],
      categories:[],

      selectedCity:null,
      selectedType:null,
      selectedCategory:[]
    }
  },
  created(){
  this.landService = new LandsApiService();
  this.citiesService=new CitiesApiServices();
  this.typesService = new typeApiServices();
  this.categoriesService = new CategoriesApiService();


  this.getCities();
  this.getTypes();
  this.getCategories();
  },
  methods: {
    getCities() {
      try {
        this.citiesService.getAll().then(response => {
          this.cities = response.data;
        });
      } catch (error) {
        console.error("Error al obtener las ciudades:", error);
      }
    },
    getTypes(){
      try{
        this.typesService.getAll().then(response => {
          this.types = response.data;
        });
      } catch (error) {
        console.error("Error al obtener los tipos:", error);
      }
    },
    getCategories(){
      try{
        this.categoriesService.getAll().then(response => {
          this.categories = response.data;
        });
      }catch(error){
        console.error("Error al obtener los categorias:", error);
      }
    }
  }
}
</script>

<template>
    <div class="firstText">
      <h1>Active Offerings</h1>
      <p>Explora las ofertas disponibles este mes. Encuentra el terreno perfecto para tus proyectos y haz que tus ideas cobren vida.</p>
    </div>

    <!-- opciones -->
    <div class="options">
      <div class="dropdown">
        <div>
          <pv-dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" style="background-color:#739A77"/>
        </div>
        <div>
          <pv-dropdown v-model="selectedType" :options="types" optionLabel="name" placeholder="Select a Type" class="w-full md:w-14rem" style="background-color:#739A77"/>
        </div>
      </div>

      <div class="category">
        <p>Categories:</p>
        <div class="flex flex-wrap gap-3">
          <!-- Iterar sobre el arreglo de categorías -->
          <div v-for="category in categories" :key="category.code" class="flex align-items-center">
            <pv-checkbox v-model="selectedCategories" :inputId="category.code" :value="category" />
            <label :for="category.code" class="ml-2">{{ category.name }}</label>
          </div>
        </div>
      </div>
    </div>

    <!--Cards-->
    <div class="Cards">
      <div class="card">
        <pv-card style="width: 25rem; overflow: hidden; background-color:#739A77">
          <template #header>
            <img class="cardImg" alt="user header" src="../../../../public/img/granja1.jpeg"/>
          </template>

          <template #title>Name of the Farm</template>
          <template #subtitle>Lima,Lima</template>
          <template #content>
            <div class="cardInformation">
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
            </div>
            <div class="cardInformation">
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
            </div>

          </template>
          <template #footer>
            <div class="m-0">
              <pv-button label="See Offering" outlined class="w-full" style="background-color: #121E13; color: #797979;" rounded />
            </div>
          </template>
        </pv-card>
      </div>
      <!--Card 2-->
      <div class="card">
        <pv-card style="width: 25rem; overflow: hidden; background-color:#739A77">
          <template #header>
            <img class="cardImg" alt="user header" src="../../../../public/img/granja1.jpeg"/>
          </template>

          <template #title>Name of the Farm</template>
          <template #subtitle>Lima,Lima</template>
          <template #content>
            <div class="cardInformation">
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
            </div>
            <div class="cardInformation">
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
            </div>

          </template>
          <template #footer>
            <div class="m-0">
              <pv-button label="See Offering" outlined class="w-full" style="background-color: #121E13; color: #797979;" rounded />
            </div>
          </template>
        </pv-card>
      </div>
      <!--Card 3-->
      <div class="card">
        <pv-card style="width: 25rem; overflow: hidden; background-color:#739A77">
          <template #header>
            <img class="cardImg" alt="user header" src="../../../../public/img/granja1.jpeg"/>
          </template>

          <template #title>Name of the Farm</template>
          <template #subtitle>Lima,Lima</template>
          <template #content>
            <div class="cardInformation">
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
            </div>
            <div class="cardInformation">
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
              <div class="textcard">
                <p>10 años</p>
                <span>Target Old</span>
              </div>
            </div>

          </template>
          <template #footer>
            <div class="m-0">
              <pv-button label="See Offering" outlined class="w-full" style="background-color: #121E13; color: #797979;" rounded />

            </div>
          </template>
        </pv-card>
      </div>
    </div>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
* {
  font-family: 'Bree Serif', serif;
}

.firstText h1{
  display:flex;
  margin: 0;


}
.firstText p{
  display:flex;
  font-size:18px;
}
.options{
  display: flex;
  gap: 1rem;
}
.dropdown{
  display:flex;
  gap:1.5rem;
}
.category p{
  display:flex;
  margin:0;
  font-weight:bold;
}

.cardInformation{
  display:flex;
  justify-content: space-around;
  margin-bottom:2rem
}
.cardInformation p{
  display:flex;
  margin:0;
  font-weight:bold;
}
.cardInformation span{
  color: lightgray;
}
.card{
  padding:0;
  background-color:red;
}
.Cards{
  display: flex;
  margin-top:2rem;
  gap: 1.5rem;
}

</style>