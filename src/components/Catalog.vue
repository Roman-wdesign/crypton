<template>
  <div class="container">
    <p>All heroes</p>
    <div class="container-currency"
    >
      <CatalogItem
          v-for="(person, id) in people"
          :key="id"
          :name="person.name"
          :hero_data="person"
          @addHero="showChildAddedHeroInConsole"
      ></CatalogItem>

    </div>
  </div>

</template>

<script>
import CatalogItem from './Catalog-item'
import axios from "axios";

export default {
  name: "Catalog",
  components: {CatalogItem},
  data: () => ({
    counter: 0,
    people: [],
    id: String,
    image: String,
  }),
  methods: {
    loadPeople() {
      axios.get('https://swapi.dev/api/people/')
          .then(response => {
            console.log(this.people = response.data.results)
            return response.data.count;
          })
          .finally(() => console.log('%cData people loading is complete', 'background: #0096d3; color: #FFFFFFFF'))
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          })
    },
    showChildAddedHeroInConsole(data) {
      console.log(data)
    }

  },
  mounted() {
    this.loadPeople();

  },
}
</script>

<style lang="scss">

.container-currency{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 200px);
  gap: 10px
}

</style>