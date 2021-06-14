<template>
<p>Catalog item</p>
</template>

<script>
export default {
  name: "Catalog-item",
  props: {
    product_data: {
      type: Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>

</style>