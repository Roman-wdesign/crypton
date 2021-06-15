<template>
  <div class="item__catalog">
    <div class="item__catalog-card">
      <p> name: {{ hero_data.name}}</p>
      <p class="item__catalog__name">Catalog item</p>
      <div class="img">
        <img style=" width: 50px;height: 60px;" :src="require('../assets/images/1.jpg')"/>
      </div>
      <button class="item__catalog__add_btn btn">
        <div class="favorite"><span class="material-icons md-18">favorite</span></div>
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
  data() {
    return {}
  },
  computed:{},

}
</script>

<style lang="scss" scoped>
.item__catalog {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.item__catalog-card {
  margin: 10px;
  padding: 10px;
  height: 7rem;
  width: 12rem;
  background-color: #ead949;
}

</style>