<template>
  <div class="container">
    <p>All heroes</p>
    <div class="currency"
    >
      <CatalogItem
          v-for="(person, id) in people"
          :key="id"
          :name="person.name"
          :hero_data="person"/>

    </div>
  </div>

</template>

<script>
import CatalogItem from './Catalog-item'
import axios from "axios";

export default {
  name: "Catalog",
  components: {CatalogItem},
  data: () => ({
    counter: 0,
    people: [],
    id: Number,
    // images: [
    //   {article: '1', image: "1.jpg"},
    //   {article: '2', image: "2.jpg"},
    //   {article: '3', image: "3.jpg"},
    //   {article: '4', image: "4.jpg"},
    //   {article: '5', image: "5.jpg"},
    //   {article: '6', image: "6.jpg"},
    //   {article: '7', image: "7.jpg"},
    //   {article: '8', image: "8.jpg"},
    //   {article: '9', image: "9.jpg"},
    //   {article: '10', image: "10.jpg"}
    // ]
  }),
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

  },
  mounted() {
    this.loadPeople();
  },
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