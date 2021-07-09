<template>
  <div class="catalog">
    <router-link :to="{name: 'Favorite Heroes', params:{ favorite_data: CART }}">
      <div class="catalog__link_to_cart">All Favorite Heroes: <strong>{{ CART.length }}</strong></div>
    </router-link>
    <Select
        :selected="selected"
        :options="categories"
        @select="sortByGender"
    />
    <div class="catalog__container_currency"
    >


      <CatalogItem
          v-for="(person, id) in filteredPeople"
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
import Select from "./Select";


export default {

  name: "Catalog",
  components: {Select, CatalogItem},

  data: () => ({
    peoplesOnPage: 5,
    pageFirst: 1,
    categories: [
      {name: 'All', value: 'All'},
      {name: 'male', value: 'male'},
      {name: 'female', value: 'female'},
      {name: 'n/a', value: 'n/a'}
    ],
    selected: 'All',
    sortedPeople: []
  }),

  methods: {
    ...mapActions([
      'GET_PEOPLE_FROM_API',
      'ADD_FAVORITE_HERO'
    ]),

    sortByGender(gender) {
      this.sortedPeople = [];
      let vm = this;
      this.PEOPLE.map(function (item) {
        if (item.gender === gender.name) {
          vm.sortedPeople.push(item)
        }
      })
    },

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
      return Math.ceil(this.PEOPLE.length / 5);
    },

    paginatedPeople() {
      let from = (this.pageFirst - 1) * this.peoplesOnPage;
      let to = from + this.peoplesOnPage;
      return this.PEOPLE.slice(from, to);

    },
    filteredPeople() {
      if (this.sortedPeople.length) {
        return this.sortedPeople
      } else if (this.paginatedPeople.length) {
        return this.paginatedPeople
      } else {
        return this.PEOPLE
      }
    }
  }
}
</script>

<style lang="scss">
</style>