<template>
  <div class="container">

    <p>All heroes</p>

    <div class="container-currency"
    >

      <CatalogItem
          v-for="(person, id) in people"
          :key="id"
          :name="person.name"
          :gender="person.gender"
          :hero_data="person"
          @addHero="showChildAddedHeroInConsole"
      />

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
    people: [],
    id: String,
    gender: String,

  }),
  methods: {

    loadPeople() {

      const urlMain = 'https://swapi.dev/api'

      axios.get(urlMain + '/people')
          .then(response => {
            console.log(this.people = response.data.results)
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
  computed: {}
}
</script>

<style lang="scss">

.container-currency {
  display: grid;
  grid-template-columns: repeat( auto-fill, minmax(12rem, 1fr));
  grid-template-rows: repeat(5, 15rem);
  gap: 10px;
  flex-wrap: wrap;

}

</style>