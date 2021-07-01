<template>
  <div class="cart">
    <p>Cart</p>
    <cart-item
        v-for="person in favorite_data"
        :key="person.name"
        :favorite_item_data="person"
    />
  </div>

</template>

<script>


import CartItem from "./Cart-item";

export default {
  name: "Cart",
  components: {CartItem},
  props:{
    favorite_data:{
      type: Array,
      default() {
        return [];
      }
    }
  },
  data: () => ({}),
}
</script>

<style lang="scss" >
</style>