<template>
  <div class="main">
    <h1>The Heroes of Star Wars</h1>
    <keep-alive>
      <Catalog/>
    </keep-alive>
    <Header/>
  </div>
</template>
<script>


import Catalog from "./Catalog"
import Header from "./Header";


export default {
  name: "Main",
  components: {
    Header,
    Catalog
  },
  data: () => ({}),
  watch: {},
  computed: {}
}
</script>

<style lang="scss">
</style>