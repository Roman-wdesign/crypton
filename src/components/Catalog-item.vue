<template>
  <div class="item__catalog">
    <div class="item__catalog-card">
      <p> {{ hero_data.name }}</p>

      <div class="img">
        <img style=" width: 50px;height: 70px;" :src="'https://starwars-visualguide.com/assets/img/characters/4.jpg'" alt="img"/>
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
    urls:String,
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
p{
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