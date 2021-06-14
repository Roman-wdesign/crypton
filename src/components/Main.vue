<template>
  <div class="container">
    <div class="currency" v-for="(person, id) in people"
         :key="id"
    >
      <div class="card">
        <p> name: {{ person.name }}</p>
        <button v-on:click="counter += 1">+1</button>
      </div>
      <div class="img"
           style=" width: 20px;height: 20px;"
      ><img :src="images">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'




export default {
  name: "Main",
  data: () => ({
    counter: 0,
    people: [],
    id: Number,
    images: [],
    image:String


  }),
  props: {},

  methods: {
    loadPeople() {
      axios.get('https://swapi.dev/api/people/')
          .then(response => {
            console.log(this.people = response.data.results)
            return response.data.count;
          })
          .finally(() => console.log('%cData people loading is complete', 'background: #0096d3; color: #FFFFFFFF'))
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          })
    },
    loadImages() {
      axios.get('https://starwars-visualguide.com/assets/img/characters/1.jpg')
          .then(response => {
            console.log(this.images = response)
          })
          .finally(() => console.log('%cData people loading is complete', 'background: #183CA8FF; color: #FFFFFFFF'))
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          })
    }
  },
  mounted() {
    this.loadPeople();
    this.loadImages();
  },
  watch: {},
  computed: {
    // item() {
    //   return this.people.map(peoples => {
    //
    //     const name = peoples.name
    //
    //     return Object.assign({name})
    //
    //   });
    // },
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.currency {
  margin: 0 10px;
  display: flex;
}

.card {
  //color: #b7d02c;
  margin: 10px;
  padding: 10px;
  height: 70px;
  width: 200px;
  background-color: #ead949;
}
</style>