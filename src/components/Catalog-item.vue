<template>
  <div class="item__catalog">
    <div class="item__catalog-card">
      <p> {{ hero_data.name }}</p>
      <p> gender: <strong>{{ hero_data.gender }}</strong></p>

      <div class="img">
        <img class="item__catalog-img" v-if="hero_data.name === 'Luke Skywalker'"
             :src="'https://starwars-visualguide.com/assets/img/characters/1.jpg'" alt="img"/>
        <img class="item__catalog-img" v-if="hero_data.name === 'C-3PO'"
             :src="'https://starwars-visualguide.com/assets/img/characters/2.jpg'" alt="img"/>
        <img class="item__catalog-img" v-if="hero_data.name === 'R2-D2'"
             :src="'https://starwars-visualguide.com/assets/img/characters/3.jpg'" alt="img"/>
        <img class="item__catalog-img" v-if="hero_data.name === 'Darth Vader'"
             :src="'https://starwars-visualguide.com/assets/img/characters/4.jpg'" alt="img"/>
        <img class="item__catalog-img" v-if="hero_data.name === 'Leia Organa'"
             :src="'https://starwars-visualguide.com/assets/img/characters/5.jpg'" alt="img"/>
        <img class="item__catalog-img" v-if="hero_data.name === 'Owen Lars'"
             :src="'https://starwars-visualguide.com/assets/img/characters/6.jpg'" alt="img"/>
        <img class="item__catalog-img" v-if="hero_data.name === 'Beru Whitesun lars'"
             :src="'https://starwars-visualguide.com/assets/img/characters/7.jpg'" alt="img"/>
        <img class="item__catalog-img" v-if="hero_data.name === 'R5-D4'"
             :src="'https://starwars-visualguide.com/assets/img/characters/8.jpg'" alt="img"/>
        <img class="item__catalog-img" v-if="hero_data.name === 'Biggs Darklighter'"
             :src="'https://starwars-visualguide.com/assets/img/characters/9.jpg'" alt="img"/>
        <img class="item__catalog-img" v-if="hero_data.name === 'Obi-Wan Kenobi'"
             :src="'https://starwars-visualguide.com/assets/img/characters/10.jpg'" alt="img"/>
      </div>
      <button
          class="item__catalog__add_btn btn"
          @click="addFavoriteHero"
          :isActive="isActive"
          :disabled="!isActive"
      >
        <span class="material-icons md-18">favorite</span>
      </button>
    </div>
  </div>


</template>

<script>

export default {
  name: "Catalog-item",
  props: {
    hero_data: {
      type: Object,
      default() {
        return {}
      }
    },
  },

  data: () => ({
    isActive: true
  }),
  computed: {},
  methods: {
    addFavoriteHero() {
      this.$emit('addFavoriteHero', this.hero_data)
    }
  },


}
</script>

<style lang="scss">
</style>