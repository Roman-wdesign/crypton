<template>
  <main>
    <Catalog/>
    <Cart
        v-if="CART.length"
        :favorite_data="CART"
    />
  </main>
</template>

<script>

import Cart from "./Cart";
import Catalog from "./Catalog"
import {mapGetters} from "vuex"

export default {
  name: "Main",
  components: {
    Cart,
    Catalog
  },
  data: () => ({}),
  watch: {},
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
}
</script>

<style lang="scss">
</style>