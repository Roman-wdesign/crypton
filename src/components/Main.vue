<template>
  <div class="container">
    <div class="currency" v-for="(person, id) in people"
         :key="id"
    >
      <div class="card">
        <p> name: {{ person.name }}</p>
        <button v-on:click="counter += 1">+1</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// let urls = [
//       'https://swapi.dev/api/people/1/',
//       'https://swapi.dev/api/people/2/',
//       'https://swapi.dev/api/people/3/',
//       'https://swapi.dev/api/people/4/',
//       'https://swapi.dev/api/people/5/',
//       'https://swapi.dev/api/people/6/',
//       'https://swapi.dev/api/people/7/',
//       'https://swapi.dev/api/people/8/',
//       'https://swapi.dev/api/people/9/',
//       'https://swapi.dev/api/people/10/'
//     ];
// let requests = urls.map(url => axios(url));
//
//     Promise.all(requests)
//         .then(responses => responses.forEach(
//             response => alert(`${response.url}: ${response.status}`)
//         ));

export default {
  name: "Main",
  data: () => ({
    counter: 0,
    people: [],
    id: Number,

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
    }
  },
  mounted() {
    this.loadPeople();
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
  margin: 10px;
  padding: 10px;
  height: 70px;
  width: 200px;
  background-color: #ead949;
}
</style>