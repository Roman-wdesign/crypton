<template>
  <div id="app">
    <div id="nav">

      <router-link to="/">Home</router-link> |
      <router-link to="/main">Main page</router-link>|
      <router-link to="/Cart">Favorite Heroes</router-link>


    </div>
    <router-view/>
  </div>
</template>
<script>


export default {
  name:'app',
  components:{

  }
}
</script>

<style lang="scss">
</style>