<script>
import { ref } from "vue";
export default {
  name: "agricultural-land",
  title: "Agricultural Land",
  data(){
    const selectedCity=ref();
    const selectedType=ref();
    const cities = ref([
      { name: 'Lima', code: 'LIM' },
      { name: 'Miraflores', code: 'MIR' },
      { name: 'San Isidro', code: 'SIS' },
      { name: 'Barranco', code: 'BAR' },
      { name: 'Surco', code: 'SUR' }
    ]);
    const type = ref([
      { name: 'type 1', code: 'TP1' },
      { name: 'type 2', code: 'TP2' },
      { name: 'type 3', code: 'TP3' },
      { name: 'type 4', code: 'TP4' },
      { name: 'type 5', code: 'TP5' }
    ]);
    //categorias
    const category=ref('');


    return {
      selectedCity,
      selectedType,
      cities,
      type,
      category
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
          <pv-dropdown v-model="selectedType" :options="type" optionLabel="name" placeholder="Select a Type" class="w-full md:w-14rem" style="background-color:#739A77"/>
        </div>
      </div>
      <div class="category">
        <p>Category:</p>
        <div class="flex flex-wrap gap-3">
          <div class="flex align-items-center">
            <pv-radio-button v-model="category" inputId="category1" value="Category 1" />
            <label for="Category1" class="ml-2">Category 1</label>
          </div>
          <div class="flex align-items-center">
            <pv-radio-button v-model="category" inputId="category2" value="Category 2" />
            <label for="Category2" class="ml-2">Category 2</label>
          </div>
          <div class="flex align-items-center">
            <pv-radio-button v-model="category" inputId="category3" value="Category 3" />
            <label for="Category3" class="ml-2">Category 3</label>
          </div>
          <div class="flex align-items-center">
            <pv-radio-button v-model="category" inputId="category4" value="Category 4" />
            <label for="Category4" class="ml-2">Category 4</label>
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