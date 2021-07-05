<template>
  <div class="cart">
    <router-link :to="{name: 'Main'}">
      <div class="catalog__link_to_cart">Back to catalog</div>
    </router-link>
    <p v-if="!favorite_data.length">There are no heroes still...</p>
    <cart-item
        v-for="(person, index) in favorite_data"
        :key="person.name"
        :favorite_item_data="person"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
    />
  </div>

</template>

<script>
import CartItem from './Cart-item';
import {mapActions} from 'vuex';

export default {
  name: "Cart",
  components: {CartItem},
  props: {
    favorite_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM'
    ]),

    increment(index){
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index){
      this.DECREMENT_CART_ITEM(index)
    },

    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  },
  data: () => ({}),
}
</script>

<style lang="scss">
</style>