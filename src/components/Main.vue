<template>
  <div class="main">
    <keep-alive>
      <Catalog/>
    </keep-alive>
  </div>
</template>
<script>


import Catalog from "./Catalog"


export default {
  name: "Main",
  components: {
    Catalog
  },
  data: () => ({}),
  watch: {},
  computed: {
  }
}
</script>

<style lang="scss">
</style>