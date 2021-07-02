<template>
  <div class="catalog">
    <div class="catalog__link_to_cart">All Favorite Heroes:{{CART.length}}</div>
    <div class="container-currency"
    >

      <CatalogItem
          v-for="(person, id) in PEOPLE"
          :key="id"
          :name="person.name"
          :gender="person.gender"
          :hero_data="person"
          @addFavoriteHero="addFavoriteHero"
      />

    </div>
  </div>
</template>

<script>
import CatalogItem from "./Catalog-item"
import {mapActions, mapGetters} from "vuex"


export default {
  name: "Catalog",
  components: {CatalogItem},
  data: () => ({}),
  methods: {
    ...mapActions([
      'GET_PEOPLE_FROM_API',
      'ADD_FAVORITE_HERO'
    ]),


    addFavoriteHero(data) {
      this.ADD_FAVORITE_HERO(data)
    }
  },
  mounted() {
    this.GET_PEOPLE_FROM_API();

  },
  computed: {
    ...mapGetters([
      'PEOPLE',
      'CART'
    ]),
  }
}
</script>

<style lang="scss">
</style>