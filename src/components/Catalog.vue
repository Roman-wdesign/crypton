<template>
  <div class="catalog">
    <router-link :to="{name: 'Favorite Heroes', params:{ favorite_data: CART }}">
      <div class="catalog__link_to_cart">All Favorite Heroes: <strong>{{ CART.length }}</strong></div>
    </router-link>

    <div class="catalog__container_currency"
    >

      <CatalogItem
          v-for="(person, id) in paginatedPeople"
          :key="id"
          :name="person.name"
          :gender="person.gender"
          :hero_data="person"
          @addFavoriteHero="addFavoriteHero"
      />
      <div class="catalog__pagination">
        <button class="catalog__pagination__page"
                v-for="page in pages"
                :key="page"
                :class="{'catalog__pagination__page__selected': page === pageFirst}"
                @click="pageChangeClick(page)"
        >{{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogItem from "./Catalog-item"
import {mapActions, mapGetters} from "vuex"


export default {
  name: "Catalog",
  components: {CatalogItem},
  data: () => ({
    peoplesOnPage: 2,
    pageFirst: 1,
  }),
  methods: {
    ...mapActions([
      'GET_PEOPLE_FROM_API',
      'ADD_FAVORITE_HERO'
    ]),

    addFavoriteHero(data) {
      this.ADD_FAVORITE_HERO(data)
    },
    pageChangeClick(page) {
      this.pageFirst = page
    }
  },
  mounted() {
    this.GET_PEOPLE_FROM_API();

  },
  computed: {
    ...mapGetters([
      'PEOPLE',
      'CART',
     'SEARCH_VALUE'
    ]),
    pages() {
      return Math.ceil(this.PEOPLE.length / 2);
    },

    paginatedPeople() {
      let from = (this.pageFirst - 1) * this.peoplesOnPage;
      let to = from + this.peoplesOnPage;
      return this.PEOPLE.slice(from, to)
    }
  }
}
</script>

<style lang="scss">
</style>