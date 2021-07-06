<template>
  <div class="header">
    <router-link :to="{name:'Main'}">
      <img src="../assets/logo.png" alt="">
    </router-link>

    <div class="search-field">
      <input
          style="padding: 5px;"
          type="text"
          v-model="searchValue"
          placeholder="find a hero"
      >
      <button class="search_btn">
        <i class="material-icons" @click="search(searchValue)">search</i>
      </button>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "Header",
  data: () => ({
    searchValue: ''
  }),
  computed: {
    ...mapGetters([
      'SEARCH_VALUE'
    ])
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX'
    ]),
    search(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);
      if (this.$route.path !== '/Catalog') {
        this.$router.push('/Catalog')
      }
    }
  }
}
</script>

<style scoped>

</style>