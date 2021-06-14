<template>
  <div id="app">
    <div id="nav">

      <router-link to="/">Home</router-link> |
      <router-link to="/main">Main page</router-link>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    &:hover{
      color: #42b983;
    }
    text-decoration: none;
    padding: 0 10px ;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
