<template>
  <div class="cart-item">
    <p> {{ favorite_item_data.name }}</p>
    <p> gender: <strong>{{ favorite_item_data.gender }}</strong></p>
    <div class="img">
      <img class="cart-item__catalog-img" v-if="favorite_item_data.name === 'Luke Skywalker'"
           :src="'https://starwars-visualguide.com/assets/img/characters/1.jpg'" alt="img"/>
      <img class="cart-item__catalog-img" v-if="favorite_item_data.name === 'C-3PO'"
           :src="'https://starwars-visualguide.com/assets/img/characters/2.jpg'" alt="img"/>
      <img class="cart-item__catalog-img" v-if="favorite_item_data.name === 'R2-D2'"
           :src="'https://starwars-visualguide.com/assets/img/characters/3.jpg'" alt="img"/>
      <img class="cart-item__catalog-img" v-if="favorite_item_data.name === 'Darth Vader'"
           :src="'https://starwars-visualguide.com/assets/img/characters/4.jpg'" alt="img"/>
      <img class="cart-item__catalog-img" v-if="favorite_item_data.name === 'Leia Organa'"
           :src="'https://starwars-visualguide.com/assets/img/characters/5.jpg'" alt="img"/>
      <img class="cart-item__catalog-img" v-if="favorite_item_data.name === 'Owen Lars'"
           :src="'https://starwars-visualguide.com/assets/img/characters/6.jpg'" alt="img"/>
      <img class="cart-item__catalog-img" v-if="favorite_item_data.name === 'Beru Whitesun lars'"
           :src="'https://starwars-visualguide.com/assets/img/characters/7.jpg'" alt="img"/>
      <img class="cart-item__catalog-img" v-if="favorite_item_data.name === 'R5-D4'"
           :src="'https://starwars-visualguide.com/assets/img/characters/8.jpg'" alt="img"/>
      <img class="cart-item__catalog-img" v-if="favorite_item_data.name === 'Biggs Darklighter'"
           :src="'https://starwars-visualguide.com/assets/img/characters/9.jpg'" alt="img"/>
      <img class="cart-item__catalog-img" v-if="favorite_item_data.name === 'Obi-Wan Kenobi'"
           :src="'https://starwars-visualguide.com/assets/img/characters/10.jpg'" alt="img"/>
    </div>
    <div class="cart-item__quantity">
      <p>qty</p>
      <span>
        <span class="quantity__btn" @click="incrementItem">+</span>
        <strong> {{ favorite_item_data.quantity }}</strong>
        <span class="quantity__btn" @click="decrementItem">-</span>
      </span>
    </div>
    <button @click="deleteFromCart">Delete hero from favorite</button>
  </div>
</template>

<script>

export default {
  name: "Cart-item",
  props: {
    favorite_item_data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    incrementItem() {
      this.$emit('increment')
    },
    decrementItem() {
      this.$emit('decrement')
    },

    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },
  mounted() {
    this.$set(this.favorite_item_data, 'quantity', 1)
  }
}
</script>

<style lang="scss">
</style>