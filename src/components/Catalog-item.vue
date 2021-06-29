<template>
  <div class="item__catalog">
    <div class="item__catalog-card">
      <p> {{ hero_data.name }}</p>
      <p> gender: <strong>{{ hero_data.gender }}</strong></p>

      <div class="img">
        <img v-if="hero_data.name == 'Luke Skywalker'" style="width: 50px;height: 70px;"
             :src="'https://starwars-visualguide.com/assets/img/characters/1.jpg'" alt="img"/>
        <img v-if="hero_data.name == 'C-3PO'" style="width: 50px;height: 70px;"
             :src="'https://starwars-visualguide.com/assets/img/characters/2.jpg'" alt="img"/>
        <img v-if="hero_data.name == 'R2-D2'" style="width: 50px;height: 70px;"
             :src="'https://starwars-visualguide.com/assets/img/characters/3.jpg'" alt="img"/>
        <img v-if="hero_data.name == 'Darth Vader'" style="width: 50px;height: 70px;"
             :src="'https://starwars-visualguide.com/assets/img/characters/4.jpg'" alt="img"/>
        <img v-if="hero_data.name == 'Leia Organa'" style="width: 50px;height: 70px;"
             :src="'https://starwars-visualguide.com/assets/img/characters/5.jpg'" alt="img"/>
        <img v-if="hero_data.name == 'Owen Lars'" style="width: 50px;height: 70px;"
             :src="'https://starwars-visualguide.com/assets/img/characters/6.jpg'" alt="img"/>
        <img v-if="hero_data.name == 'Beru Whitesun lars'" style="width: 50px;height: 70px;"
             :src="'https://starwars-visualguide.com/assets/img/characters/7.jpg'" alt="img"/>
        <img v-if="hero_data.name == 'R5-D4'" style="width: 50px;height: 70px;"
             :src="'https://starwars-visualguide.com/assets/img/characters/8.jpg'" alt="img"/>
        <img v-if="hero_data.name == 'Biggs Darklighter'" style="width: 50px;height: 70px;"
             :src="'https://starwars-visualguide.com/assets/img/characters/9.jpg'" alt="img"/>
        <img v-if="hero_data.name == 'Obi-Wan Kenobi'" style="width: 50px;height: 70px;"
             :src="'https://starwars-visualguide.com/assets/img/characters/10.jpg'" alt="img"/>
      </div>
      <button
          class="item__catalog__add_btn btn"
          @click="addFavoriteHero"
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
    urls: String,
    hero_data: {
      type: Object,
      default() {
        return {}
      }
    },
  },

  data: () => ({}),
  computed: {},
  methods: {
    addFavoriteHero() {
      this.$emit('addHero', this.hero_data.name)
    }
  }

}
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}

.item__catalog-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  background-color: #ead949;
}

</style>