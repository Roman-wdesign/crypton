<template>
<main>
  <Catalog/>
  <Cart/>
</main>
</template>

<script>

import Cart from "./Cart";
import Catalog from "./Catalog"

export default {
  name: "Main",
  components:{
    Cart,
    Catalog
  },
  data: () => ({

  }),



  watch: {},
  computed: {}
}
</script>

<style lang="scss">

</style>