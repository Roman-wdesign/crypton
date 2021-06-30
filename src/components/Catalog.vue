<template>
  <div class="container">

    <p>All heroes</p>

    <div class="container-currency"
    >

      <CatalogItem
          v-for="(person, id) in PEOPLE"
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
import {mapActions, mapGetters} from 'vuex'


export default {
  name: "Catalog",
  components: {CatalogItem},
  data: () => ({

  }),
  methods: {
    ...mapActions([
      'GET_PEOPLE_FROM_API'
    ]),


    showChildAddedHeroInConsole(data) {
      console.log(data)
    }
  },
  mounted() {
    this.GET_PEOPLE_FROM_API();

  },
  computed: {
    ...mapGetters([
        'PEOPLE'
    ]),
  }
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