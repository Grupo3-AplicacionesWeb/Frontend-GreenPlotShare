<script>
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
      typesService:null,
      categoriesService:null,
      landsService:null,

      cities:[],
      types:[],
      categories:[],
      lands:[],

      selectedCity:null,
      selectedType:null,
      selectedCategories:[]
    };
  },
  computed:{
    filteredLands(){
      let filtered = this.lands;

      if (this.selectedCity) {
        filtered = filtered.filter(land => land.city === this.selectedCity.name);
      }

      if (this.selectedType) {
        filtered = filtered.filter(land => land.type === this.selectedType.name);
      }

      if (this.selectedCategories.length > 0) {
        filtered = filtered.filter(land => this.selectedCategories.includes(land.category));
      }

      return filtered;
    }
  },
  created(){
  this.landsService = new LandsApiService();
  this.citiesService=new CitiesApiServices();
  this.typesService = new typeApiServices();
  this.categoriesService = new CategoriesApiService();


  this.getCities();
  this.getTypes();
  this.getCategories();
  this.getLands();
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
    },
    getLands(){
      try{
        this.landsService.getAll().then(response => {
          this.lands = response.data;
          console.log(this.lands)
        });
      }catch(error){
        console.error("Error al obtener los lands:", error);
      }
    }
  }
}
</script>

<template>
    <div class="container">
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
            <div v-for="category in categories"  class="flex align-items-center">
              <pv-checkbox v-model="selectedCategories" :inputId="category.code" :value="category" />
              <label :for="category.code" class="ml-2">{{ category.name }}</label>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div class="Cards">
        <div v-for="(land, index) in filteredLands" :key="index" class="card">
          <pv-card style="width: 25rem; overflow: hidden; background-color:#739A77">
            <template #header>
              <img class="cardImg" :src="land.image" alt="land header"/>
            </template>

            <template #title>{{ land.name }}</template>
            <template #subtitle>{{ land.city }}</template>
            <template #content>
              <div class="cardInformation">
                <div class="textcard">
                  <p>{{ land.age }} años</p>
                  <span>Antigüedad</span>
                </div>
                <div class="textcard">
                  <p>{{ land.cost }} $</p>
                  <span>Costo</span>
                </div>
              </div>
              <div class="cardInformation">
                <div class="textcard">
                  <p>{{ land.area }} m<sup>2</sup></p>
                  <span>Área</span>
                </div>
                <div class="textcard">
                  <p>{{ land.type }}</p>
                  <span>Tipo</span>
                </div>
              </div>
            </template>
            <template #footer>
              <div style="background-color:#739A77" class="cardButton">
                <pv-button label="See Offering" outlined class="w-full" style="background-color: #121E13; color: #FFFFFF;" rounded />
              </div>
            </template>
          </pv-card>
        </div>
      </div>
    </div>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');
* {
  font-family: 'Bree Serif', serif;
  background-color:#f2fcf2;

}
.container{
  padding:2rem;
}

.options{
  display: flex;
  flex-direction: row;
}

.dropdown{
  display:flex;
  gap:1rem;
  padding-right: 15px;
  padding-top:20px
}
.Cards{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap:wrap;

}
.Cards .card{
  margin-top:1.5rem;
  margin-bottom:1.5rem;
}
.cardInformation{
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding:1.5rem 0;
  background-color:#f2fcf2;
}
.cardInformation span{
  color:#9A9A9A;
}
.cardButton:hover {
  background-color: #1a2e21;
  color: #ffffff;
  transition: background-color 0.3s ease, color 0.3s ease;
  transform: translateY(-3px);

}

.cardButton:hover:after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  animation: hoverAnimation 0.3s forwards;
}

@keyframes hoverAnimation {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>